"use client";

import React, {useState} from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemText,
    Typography,
    TextField,
    Box,
    Divider,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocationOn from "@mui/icons-material/LocationOn";
import useMediaQuery from "@mui/material/useMediaQuery"; // MUI 반응형 유틸리티
import {sendGTMEvent} from "@next/third-parties/google";

import {mountainData} from "@/data/mountains";
import Head from "next/head";

const ResponsiveDetailView: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>(""); // 검색어 상태 추가
    const isMobile = useMediaQuery("(max-width:600px)"); // 반응형 브레이크포인트 설정

    const handleToggle = (id: number) => {
        // 상태를 간단히 비교
        const newExpandedId = expandedId === id ? null : id;
        setExpandedId(newExpandedId);

        // Google Tag Manager 이벤트 전송
        sendGTMEvent({
            event: "expand_mountain_item",
            category: "competition",
            action: "toggle",
            label: id.toString(),
        });
    };

    // 검색 필터
    const filteredMountains = mountainData.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box sx={{paddingBottom: 7}}>
            <Box sx={{padding: 2}}>
                <TextField
                    fullWidth
                    variant="standard"
                    label="산 이름이나 위치를 검색하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Box>

            <List>
                {filteredMountains.map((item) => (
                    <Accordion
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
                                    style={{flex: 1}}
                                />
                                <Divider
                                    orientation="vertical"
                                    style={{margin: "0 10px", height: "40px"}}
                                />
                                <ListItemText
                                    primary={`${item.elevation}`}
                                    secondary={`해발 고도`}
                                    style={{flex: 1}}
                                />
                                <Divider
                                    orientation="vertical"
                                    style={{margin: "0 10px", height: "40px"}}
                                />
                                <ListItemText
                                    primary={`${item.location}`}
                                    secondary={`지역`}
                                    style={{flex: 1}}
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
                                <Typography variant="h6">{item.name}</Typography>
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
                                        href={"https://namu.wiki/w/" + item.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        startIcon={<OpenInNewIcon/>}
                                        sx={{
                                            flex: 1, // 버튼 크기 유동적
                                            maxWidth: "200px", // 최대 너비 200px
                                            textTransform: "none",
                                            width: isMobile ? "100%" : "auto", // 모바일에서는 버튼이 전체 너비를 사용
                                        }}
                                    >
                                        위키 이동
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="info"
                                        href={
                                            "https://map.naver.com/p/search/" +
                                            item.name +
                                            "??c=13.00,0,0,0,dh"
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        startIcon={<LocationOn/>}
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </List>
        </Box>
    );
};

export default ResponsiveDetailView;