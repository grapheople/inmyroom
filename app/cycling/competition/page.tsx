"use client";

import React, { useEffect, useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocationOn from "@mui/icons-material/LocationOn";
import moment from "moment";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { sendGTMEvent } from "@next/third-parties/google";
import { supabase } from "@/api/supabase";
import {CompetitionItem} from "@/types/competition/CompetitionItem";

// 캐싱 관련 상수
const CACHE_KEY = "competitionData";
const CACHE_TIMESTAMP_KEY = "competitionDataTimestamp";
const CACHE_DURATION = 3 * 60 * 60 * 1000; // 3시간 (밀리초 단위)

const ResponsiveDetailView: React.FC = () => {
    const [competitionData, setCompetitionData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width:600px)");

    useEffect(() => {
        const fetchCompetitions = async () => {
            setLoading(true);
            setError(null);

            const now = Date.now();
            const cachedData = localStorage.getItem(CACHE_KEY);
            const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

            // 캐시가 존재하고, 캐시된 시간이 3시간 이내이면 캐시 데이터 사용
            if (
                cachedData &&
                cachedTimestamp &&
                now - parseInt(cachedTimestamp, 10) < CACHE_DURATION
            ) {
                const parsedData = JSON.parse(cachedData);
                // 날짜 문자열을 Date 객체로 변환
                const transformedData = parsedData.map((item: any) => ({
                    ...item,
                    eventStartDate: item.eventStartDate ? new Date(item.eventStartDate) : null,
                    regStartDate: item.regStartDate ? new Date(item.regStartDate) : null,
                    regEndDate: item.regEndDate ? new Date(item.regEndDate) : null,
                }));
                setCompetitionData(transformedData);
                setLoading(false);
                return;
            }

            // 캐시가 없거나 만료된 경우 DB에서 데이터 요청
            const { data, error } = await supabase.from("competition").select("*");

            if (error) {
                setError("데이터를 불러오는 중 오류가 발생했습니다.");
                console.error("Error fetching competitions:", error);
            } else {
                const transformedData = data.map((item: any) => ({
                    ...item,
                    eventStartDate: item.eventStartDate ? new Date(item.eventStartDate) : null,
                    regStartDate: item.regStartDate ? new Date(item.regStartDate) : null,
                    regEndDate: item.regEndDate ? new Date(item.regEndDate) : null,
                })) || [];
                setCompetitionData(transformedData);
                // 캐시 업데이트
                localStorage.setItem(CACHE_KEY, JSON.stringify(transformedData));
                localStorage.setItem(CACHE_TIMESTAMP_KEY, now.toString());
            }

            setLoading(false);
        };

        fetchCompetitions();
    }, []);

    const now = Date.now();

    const handleToggle = (id: number) => {
        sendGTMEvent({
            event: "expand_competition_item",
            category: "competition",
            action: "toggle",
            label: id.toString(),
        });
        setExpandedId((prev) => (prev === id ? null : id));
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Box sx={{ paddingBottom: 7 }}>
            <List>
                {competitionData
                    .sort((a, b) => {
                        /* 0) 날짜 누락 여부 ------------------------------------------------- */
                        const missingA = !a.eventStartDate || !a.regStartDate;
                        const missingB = !b.eventStartDate || !b.regStartDate;

                        // (a) 둘 다 누락 → 같은 그룹 (순서 유지)
                        if (missingA && missingB) return 0;
                        // (b) 한 쪽만 누락 → 누락한 쪽을 뒤로
                        if (missingA) return 1;
                        if (missingB) return -1;
                        // (c) 여기까지 오면 두 날짜 모두 존재 (null 아님)

                        /* 1) 과거 eventStartDate 대회 뒤로 ---------------------------------- */
                        const pastA = a.eventStartDate!.getTime() < now;
                        const pastB = b.eventStartDate!.getTime() < now;

                        if (pastA !== pastB) return pastA ? 1 : -1;

                        /* 2) 현재와 가장 가까운 날짜(event vs reg) -------------------------- */
                        const nearestDelta = (c: CompetitionItem) => {
                            const d1 = Math.abs(c.eventStartDate!.getTime() - now);
                            const d2 = Math.abs(c.regStartDate!.getTime()   - now);
                            return Math.min(d1, d2);
                        };

                        const deltaA = nearestDelta(a);
                        const deltaB = nearestDelta(b);

                        if (deltaA !== deltaB) return deltaA - deltaB;

                        /* 3) tie-breakers --------------------------------------------------- */
                        if (a.upcoming !== b.upcoming) return Number(a.upcoming) - Number(b.upcoming);
                        return a.id - b.id;
                    })
                    .map((item) => (
                        <Accordion
                            disabled={item.eventStartDate == null}
                            key={item.id}
                            expanded={expandedId === item.id}
                            onChange={() => handleToggle(item.id)}
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        style={{
                                            fontSize: "2rem",
                                            color: "#1976d2",
                                        }}
                                    />
                                }
                                sx={{
                                    flexDirection: "row-reverse",
                                    "& .MuiAccordionSummary-expandIconWrapper": {
                                        marginRight: "10px",
                                    },
                                }}
                            >
                                <ListItem
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: 0,
                                    }}
                                >
                                    <ListItemText
                                        primary={`${item.name}`}
                                        secondary={`${item.year}년`}
                                        style={{ flex: 1 }}
                                    />
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        style={{ margin: "0 10px"}}
                                    />
                                    <ListItemText
                                        primary={`${
                                            item.eventStartDate
                                                ? item.upcoming
                                                    ? moment(item.eventStartDate).format("YYYY. MM.") + " (예정)"
                                                    : moment(item.eventStartDate).format("YYYY. MM. DD")
                                                : "미정"
                                        }`}
                                        secondary={`대회일`}
                                        style={{ flex: 1 }}
                                    />
                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        style={{ margin: "0 10px"}}
                                    />
                                    <ListItemText
                                        primary={`${
                                            item.regStartDate
                                                ? moment(item.regStartDate).format("YYYY. MM. DD")
                                                : "미정"
                                        }`}
                                        secondary={`모집일`}
                                        style={{ flex: 1 }}
                                    />
                                </ListItem>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 2.5,
                                        px: 5,
                                    }}
                                >
                                    <Typography>
                                        <strong>등록 기간:</strong>{" "}
                                        {item.regStartDate
                                            ? moment(item.regStartDate).format("YYYY. M. D")
                                            : ""}{" "}
                                        ~{" "}
                                        {item.regEndDate
                                            ? moment(item.regEndDate).format("YYYY. M. D")
                                            : ""}
                                    </Typography>
                                    <Typography>
                                        <strong>참가비:</strong> {item.fee.toLocaleString()}원
                                    </Typography>
                                    <Typography>{item.goal1}</Typography>
                                    {item.goal2 != null && <Typography>{item.goal2}</Typography>}
                                    <Typography>
                                        <strong>주최:</strong> {item.host}
                                    </Typography>
                                    <Typography>
                                        <strong>위치:</strong> {item.location}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: isMobile ? "column" : "row",
                                            gap: 2,
                                            mt: 2,
                                            alignItems: isMobile ? "stretch" : "center",
                                        }}
                                    >
                                        {item.link && (
                                            <Button
                                                variant="contained"
                                                color="info"
                                                href={item.link || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={<OpenInNewIcon />}
                                                sx={{
                                                    flex: 1,
                                                    maxWidth: "200px",
                                                    textTransform: "none",
                                                    width: isMobile ? "100%" : "auto",
                                                }}
                                            >
                                                대회 사이트 이동
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="info"
                                            href={
                                                "https://map.naver.com/p/search/" +
                                                item.location +
                                                "??c=13.00,0,0,0,dh"
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            startIcon={<LocationOn />}
                                            sx={{
                                                flex: 1,
                                                maxWidth: "200px",
                                                textTransform: "none",
                                                width: isMobile ? "100%" : "auto",
                                            }}
                                        >
                                            지도 보기
                                        </Button>
                                    </Box>
                                    {item.imgs?.length > 0 && (
                                        <img
                                            src={item.imgs[0]}
                                            alt={`${item.name} 이미지`}
                                            style={{ marginTop: "10px", maxWidth: "100%" }}
                                        />
                                    )}
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    ))}
            </List>
        </Box>
    );
};

export default ResponsiveDetailView;