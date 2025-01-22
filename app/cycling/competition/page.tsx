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
import useMediaQuery from "@mui/material/useMediaQuery"; // MUI 반응형 유틸리티
import { sendGTMEvent } from "@next/third-parties/google";

import { competitionData } from "@/data/granfondo";

const ResponsiveDetailView: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const isMobile = useMediaQuery("(max-width:600px)"); // 반응형 브레이크포인트 설정
    const today = new Date();

    const handleToggle = (id: number) => {
        sendGTMEvent({
            event: "expand_competition_item",
            category: "competition",
            action: "toggle",
            label: id.toString(),
        });
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <Box sx={{ paddingBottom: 7 }}>
            <List>
                {competitionData
                    .sort((a, b) => {
                        // regStartDate가 null인 경우 뒤로 정렬
                        if (a.regStartDate && b.regStartDate) {
                            // 1. regStartDate 기준 정렬
                            const dateCompare = a.regStartDate.getTime() - b.regStartDate.getTime();
                            if (dateCompare !== 0) return dateCompare;
                        }
                        
                        if (!a.eventStartDate) return 1;
                        if (!b.eventStartDate) return -1;

                        // 2. eventStartDate 기준 정렬
                        const dateCompare2 = a.eventStartDate.getTime() - b.eventStartDate.getTime();
                        if (dateCompare2 !== 0) return dateCompare2;

                        // 3. upcoming이 false인 항목을 우선 정렬
                        if (a.upcoming !== b.upcoming) return Number(a.upcoming) - Number(b.upcoming);

                        // 4. id 기준 정렬
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
                                                ? item.upcoming ? moment(item.eventStartDate).format("YYYY. MM.") + " (예정)" : moment(item.eventStartDate).format("YYYY. MM. DD")
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
                                            flexDirection: isMobile ? "column" : "row", // 반응형 레이아웃
                                            gap: 2, // 버튼 간격
                                            mt: 2, // 여백 추가
                                            alignItems: isMobile ? "stretch" : "center", // 버튼이 세로 정렬일 때 너비 맞춤
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="info"
                                            href={item.link || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            startIcon={<OpenInNewIcon />}
                                            sx={{
                                                flex: 1, // 버튼 크기 유동적
                                                maxWidth: "200px", // 최대 너비 200px
                                                textTransform: "none",
                                                width: isMobile ? "100%" : "auto", // 모바일에서는 버튼이 전체 너비를 사용
                                            }}
                                        >
                                            대회 사이트 이동
                                        </Button>
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
                                                flex: 1, // 버튼 크기 유동적
                                                maxWidth: "200px", // 최대 너비 200px
                                                textTransform: "none",
                                                width: isMobile ? "100%" : "auto", // 모바일에서는 버튼이 전체 너비를 사용
                                            }}
                                        >
                                            지도 보기
                                        </Button>
                                    </Box>
                                    {item.imgs.length > 0 && (
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