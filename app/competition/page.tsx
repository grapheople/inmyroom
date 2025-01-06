"use client";

import React, {useState} from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText, Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import {CompetitionItem} from "@/types/competition/CompetitionItem";
import Box from "@mui/material/Box";

const competitionData: CompetitionItem[] = [
    {
        id: 1,
        year: "2024",
        name: "홍천 그란폰도",
        host: "홍천군",
        description: "대한민국에서 가장 아름다운 강원도 홍천에서 자전거의 꽃인 \n 그란폰도대회를 통하여 전국 자전거 동호인들에게 홍천군을 \n 국내 최고의 대회로 만들 수 있도록 홍보",
        location: "강원도 홍천",
        eventStartDate: new Date("2021-11-01"),
        regStartDate: new Date("2021-09-01"),
        regEndDate: new Date("2021-09-21"),
        link: "https://www.naver.com",
        fee: 10000,
        imgs: ["http://speedbike.kr/img/main/240110.png"],
    },
    {
        id: 2,
        name: "설악 그란폰도",
        year: "2024",
        host: "설악그란폰도조직위원회, 위즈런",
        description: "설악산과 오대산 지역을 통과하는 208km 코스의 장거리 자전거 라이딩 이벤트로, 'F' 등급(가장 힘듦)으로 분류됩니다.",
        location: "강원도 인제",
        eventStartDate: new Date("2024-05-18T07:00:00"),
        regStartDate: new Date("2021-09-01"),
        regEndDate: new Date("2021-09-21"),
        link: "http://www.novecolli.it",
        fee: 70000,
        imgs: []
    }
];

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
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={`${item.year} - ${item.name}`}
                                />
                                <Divider orientation="vertical" variant="middle" flexItem/>
                                <ListItemText
                                    primary={`대회 날짜: ${moment(item.eventStartDate).format('YYYY. M. D')}`}
                                />
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography><strong>주최:</strong> {item.host}</Typography>
                            <Typography><strong>설명:</strong> {item.description}</Typography>
                            <Typography><strong>위치:</strong> {item.location}</Typography>
                            <Typography>
                                <strong>등록 기간:</strong>{" "}
                                {moment(item.regStartDate).format('YYYY. M. D')} ~ {moment(item.regEndDate).format('YYYY. M. D')}
                            </Typography>
                            <Typography><strong>참가비:</strong> {item.fee.toLocaleString()}원</Typography>
                            <Typography>
                                <strong>링크:</strong>{" "}
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    대회 링크
                                </a>
                            </Typography>
                            <img
                                src={item.imgs[0]}
                                alt={`${item.name} 이미지`}
                                style={{marginTop: "10px", maxWidth: "100%"}}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))}
            </List>
        </Box>
    );
}

export default ResponsiveDetailView;