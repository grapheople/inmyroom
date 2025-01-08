"use client";

import React, {useState} from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import moment from 'moment';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { sendGTMEvent } from '@next/third-parties/google'

import {competitionData} from "@/data/granfondo";

const ResponsiveDetailView: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        sendGTMEvent({
            event: 'expand_competition_item',
            category: 'competition',
            action: 'toggle',
            label: id.toString(),
        });
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <Box>
            <List>
                {competitionData
                    .sort((a, b) => moment(a.eventStartDate).valueOf() - moment(b.eventStartDate).valueOf())
                    .map((item) => (
                    <Accordion disabled={item.eventStartDate == null} // 링크가 없는 경우 비활성화
                        key={item.id}
                        expanded={expandedId === item.id}
                        onChange={() => handleToggle(item.id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon
                                style={{
                                    fontSize: "2rem", // 아이콘 크기
                                    color: "#1976d2", // 아이콘 색상
                                }}
                            />}
                            sx={{
                                flexDirection: "row-reverse", // Icon을 왼쪽으로 이동
                                "& .MuiAccordionSummary-expandIconWrapper": {
                                    marginRight: "10px", // 아이콘을 왼쪽에 고정

                                },
                            }}
                        >
                            <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
                                <ListItemText
                                    primary={`${item.name}`}
                                    secondary={`${item.year}년`}
                                    style={{ flex: 1 }} // 첫 번째 칼럼
                                />
                                <Divider orientation="vertical" flexItem style={{ margin: '0 10px', height: '24px' }} />
                                <ListItemText
                                    primary={`${item.eventStartDate ? moment(item.eventStartDate).format('YYYY. MM. DD') : "미정"}`}
                                    secondary={`대회일`}
                                    style={{ flex: 1}} // 두 번째 칼럼
                                />
                                <Divider orientation="vertical" flexItem style={{ margin: '0 10px', height: '24px' }} />
                                <ListItemText
                                    primary={`${item.regStartDate ? moment(item.regStartDate).format('YYYY. MM. DD') : "미정"}`}
                                    secondary={`모집일`}
                                    style={{ flex: 1}} // 세 번째 칼럼
                                />
                                <ListItemText
                                    primary={`${item.goal1 ? item.goal1 : ""}`}
                                    secondary={`${item.goal2 ? item.goal2 : ""}`}
                                    style={{ flex: 1}} // 세 번째 칼럼
                                />
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2.5, // 10px (1단위 = 8px)
                                px: 5, // 40px (1단위 = 8px)
                            }}>
                                <Typography>
                                    <strong>등록 기간:</strong>{" "}
                                    {item.regStartDate ? moment(item.regStartDate).format("YYYY. M. D") : ""} ~ {item.regEndDate ? moment(item.regEndDate).format('YYYY. M. D') : ""}
                                </Typography>
                                <Typography><strong>참가비:</strong> {item.fee.toLocaleString()}원</Typography>
                                <Typography>{item.goal1}</Typography>
                                {item.goal2 != null && (<Typography>{item.goal2}</Typography>)}
                                <Typography><strong>주최:</strong> {item.host}</Typography>
                                <Typography><strong>위치:</strong> {item.location}</Typography>
                                <Typography>
                                    <Button
                                        className={"text-white"}
                                        variant="contained"
                                        color="info"
                                        href={item.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        startIcon={<OpenInNewIcon />} // 아이콘 추가
                                        sx={{
                                            borderRadius: "20px", // 둥근 모서리
                                            padding: "5px 20px", // 버튼 크기 조정
                                            textTransform: "none", // 텍스트 소문자로 유지
                                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 버튼 그림자
                                            transition: "transform 0.2s ease, box-shadow 0.2s ease", // 부드러운 애니메이션
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 123, 255, 0.8)", // 호버 시 색상 변경
                                                transform: "scale(1.05)", // 호버 시 살짝 확대
                                                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // 호버 시 그림자 강조
                                            },
                                        }}
                                    >
                                        대회 사이트 이동
                                    </Button>
                                </Typography>
                                {item.imgs.length > 0 && (
                                    <img
                                        src={item.imgs[0]}
                                        alt={`${item.name} 이미지`}
                                        style={{marginTop: "10px", maxWidth: "100%"}}
                                    />
                                )}
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </List>
        </Box>
    );
}

export default ResponsiveDetailView;