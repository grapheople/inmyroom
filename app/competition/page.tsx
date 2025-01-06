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
import moment from 'moment';
import {CompetitionItem} from "@/types/competition/CompetitionItem";
import Box from "@mui/material/Box";
import Divider, { dividerClasses } from '@mui/material/Divider';
import Button from "@mui/material/Button";

import {competitionData} from "@/data/granfondo";

const ResponsiveDetailView: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <Box>
            <List>
                {competitionData.map((item) => (
                    <Accordion
                        key={item.id}
                        expanded={expandedId === item.id}
                        onChange={() => handleToggle(item.id)}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 0 }}>
                                <ListItemText
                                    primary={`${item.name}`}
                                    style={{ flex: 1, textAlign: 'center' }} // 첫 번째 칼럼
                                />
                                <Divider orientation="vertical" flexItem style={{ margin: '0 10px', height: '24px' }} />
                                <ListItemText
                                    primary={`대회일: ${moment(item.eventStartDate).format('YYYY. M. D')}`}
                                    style={{ flex: 1, textAlign: 'center' }} // 두 번째 칼럼
                                />
                                <Divider orientation="vertical" flexItem style={{ margin: '0 10px', height: '24px' }} />
                                <ListItemText
                                    primary={`모집일: ${moment(item.regStartDate).format('YYYY. M. D')}`}
                                    style={{ flex: 1, textAlign: 'center' }} // 세 번째 칼럼
                                />
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box style={{display: "flex", flexDirection: "column", gap: 10}}>
                                <Typography><strong>주최:</strong> {item.host}</Typography>
                                <Typography><strong>위치:</strong> {item.location}</Typography>
                                <Typography>
                                    <strong>등록 기간:</strong>{" "}
                                    {item.regStartDate ? moment(item.regStartDate).format("YYYY. M. D") : ""} ~ {item.regEndDate ? moment(item.regEndDate).format('YYYY. M. D') : ""}
                                </Typography>
                                <Typography><strong>참가비:</strong> {item.fee.toLocaleString()}원</Typography>
                                <Typography>
                                    <strong>링크:</strong>{" "}
                                    <Button
                                        variant="contained"
                                        color="info"
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        대회 이동
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