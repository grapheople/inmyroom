"use client";

import React, {useState} from 'react';
import {PainPoint} from './types';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText, Button,
} from '@mui/material';
import {sendGTMEvent} from "@next/third-parties/google";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

interface PainPointModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    painPoints: PainPoint[];
}

const PainPointModal: React.FC<PainPointModalProps> = ({
                                                           isOpen,
                                                           onClose,
                                                           title,
                                                           painPoints,
                                                       }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    if (!isOpen) return null; // 모달이 닫혀있으면 렌더링하지 않음

    const handleToggle = (id: string) => {
        sendGTMEvent({
            event: 'expand_pain_solution_item',
            category: 'painpoint',
            action: 'toggle',
            label: id.toString(),
        });
        setExpandedId((prev) => (prev === id ? null : id));
    };
    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
            onClick={onClose} // 배경 클릭 시 모달 닫기
        >
            <Box
                style={{
                    backgroundColor: '#fff',
                    padding: '2rem',
                    borderRadius: '8px',
                    width: '80%',
                    maxWidth: '500px',
                }}
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 배경 클릭 이벤트 버블링 방지
            >
                <h2 style={{marginBottom: '1rem', fontWeight: "bold"}}>{title} 부위</h2>
                <div>
                    {painPoints.map((point, index) => (
                        <div>
                            {point.causeAndSolution.map((item, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expandedId === point.id + index}
                                    onChange={() => handleToggle(point.id + index)}
                                    style={{padding: '0.5rem'}}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                    >
                                        <Typography>{item.cause}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{item.solution}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </div>
                    ))}
                </div>

                <Button
                    onClick={onClose}
                    style={{
                        marginTop: "20px", // 버튼과 내용 사이 간격
                        padding: "5px 20px", // 버튼 크기 조정
                    }}
                    sx={{
                        padding: "5px 20px", // 버튼 크기 조정
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // 버튼 그림자
                        transition: "transform 0.2s ease, box-shadow 0.2s ease", // 부드러운 애니메이션
                        "&:hover": {
                            backgroundColor: "rgba(0, 123, 255, 0.8)", // 호버 시 색상 변경
                            transform: "scale(1.05)", // 호버 시 살짝 확대
                            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // 호버 시 그림자 강조
                        },
                    }}
                >
                    닫기
                </Button>
            </Box>
        </div>
    );
};

export default PainPointModal;