"use client";

import React, {useState} from "react";
import {Box, IconButton, List, ListItem, ListItemText, Typography, useMediaQuery,} from "@mui/material";
import {AnimatePresence} from "framer-motion";
import {ChevronRight} from "@mui/icons-material";
import ResponsibleListItemText from "./_components/ResponsibleListItemText";
import moment from 'moment';
import {CompetitionItem} from "@/types/competition/CompetitionItem";
import CompetitionDetailView from "@/app/competition/_components/CompetitionDetailView";

const ResponsiveDetailView: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<CompetitionItem | null>(null); // 선택된 아이템의 상태
    const isMobile = useMediaQuery("(max-width:600px)"); // 모바일 여부 체크

    // 리스트 아이템 클릭 시 호출되는 함수
    const handleListItemClick = (item: CompetitionItem): void => {
        setSelectedItem(item);
    };

    // 백 버튼 클릭 시 상세 페이지 닫는 함수
    const handleBack = (): void => {
        setSelectedItem(null);
    };

    const itemList: CompetitionItem[] = [
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

    itemList.sort((a, b) => a.eventStartDate.getTime() - b.eventStartDate.getTime());

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            bgcolor="background.default"
        >
            <Box
                sx={{
                    maxWidth: "1200px",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    bgcolor: "background.paper",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        width: isMobile ? "100%" : selectedItem ? "30%" : "100%",
                        transition: "width 0.5s ease",
                        display: "flex",
                        flexDirection: "column",
                        borderRight: selectedItem ? "1px solid #ddd" : "none",
                        pr: selectedItem ? 2 : 0,
                    }}
                >
                    <List sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        overflow: "visible",
                        padding: 2,
                    }}>
                        {itemList.map((item, index) => (
                            <ListItem
                                key={index}
                                component="div"
                                onClick={() => handleListItemClick(item)}
                                sx={{
                                    bgcolor: "background.default",
                                    borderRadius: 2,
                                    border: "none",
                                    mb: 1,
                                    boxShadow: 1,
                                    textAlign: "left",
                                    transition: "transform 0.5s, background 0.5s",
                                    cursor: "pointer",
                                    gap: 3,
                                    "&:hover": {transform: "scale(1.02)", boxShadow: 2},
                                }}
                            >
                                <ListItemText
                                    sx={{
                                        flex: isMobile || selectedItem ? "auto" : "none",
                                    }}
                                    primary={
                                        <Typography variant="subtitle1" fontWeight="bold" sx={{textWrap: "nowrap"}}>
                                            {item.year + " " + item.name}
                                        </Typography>
                                    }
                                />
                                <ResponsibleListItemText text1="대회 시작일"
                                                         text2={moment(item.eventStartDate).format('YYYY. M. D')}
                                                         displable={!(isMobile || selectedItem)}/>
                                <ResponsibleListItemText text1="모집일"
                                                         text2={moment(item.regStartDate).format('M. D') + ' ~ ' + moment(item.regEndDate).format('M. D')}
                                                         displable={!(isMobile || selectedItem)}/>
                                <ResponsibleListItemText text1="참가비" text2={item.fee + "원"}
                                                         displable={!(isMobile || selectedItem)}/>
                                <ResponsibleListItemText text1="장소" text2={item.location}
                                                         displable={!(isMobile || selectedItem)}/>
                                <IconButton edge="end" onClick={(e) => e.stopPropagation()}>
                                    <ChevronRight/>
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <AnimatePresence>
                    {selectedItem && (
                        <CompetitionDetailView item={selectedItem} onBack={handleBack} isMobile={isMobile} />
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    );
};

export default ResponsiveDetailView;