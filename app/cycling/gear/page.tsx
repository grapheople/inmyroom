"use client";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    TextField, Typography
} from "@mui/material";
import React, {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {sendGTMEvent} from "@next/third-parties/google";
import {mountainData} from "@/data/mountains";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocationOn from "@mui/icons-material/LocationOn";
import {gearCycle} from "@/data/locale/ko/gear_cycle";
import {useGlobalContext} from "@/context/GlobalContextProvider";

const GearView: React.FC = () => {
    const {selectedLanguage} = useGlobalContext();
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
    const filteredGear = gearCycle.filter(
        (item) =>
            item.productNameKor.toLowerCase().includes(searchQuery.toLowerCase()
            )
    );

    return (
        <Box sx={{paddingBottom: 7}}>
            <Box sx={{padding: 2}}>
                <TextField
                    fullWidth
                    variant="standard"
                    label="찾고싶은 제품 이름을 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Box>

            <List>
                {filteredGear.map((item, index) => (
                    <Accordion
                        key={index}
                        expanded={expandedId === index}
                        onChange={() => handleToggle(index)}
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
                                    primary={`${item.brandName}`}
                                    secondary={`브랜드`}
                                    style={{flex: 1}}
                                />
                                <Divider
                                    orientation="vertical"
                                    style={{margin: "0 10px", height: "40px"}}
                                />
                                <ListItemText
                                    primary={`${selectedLanguage === '한국어' ? item.productNameKor : item.productNameEn}`}
                                    secondary={item.modelName}
                                    style={{flex: 1}}
                                />
                                <Divider
                                    orientation="vertical"
                                    style={{margin: "0 10px", height: "40px"}}
                                />
                                <ListItemText
                                    primary={`${item.category1}`}
                                    secondary={`카테고리`}
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
                                <Typography
                                    variant="h6">{selectedLanguage === '한국어' ? item.productNameKor : item.productNameEn}</Typography>
                                <Typography>
                                    <strong>모델명:</strong> {item.modelName}
                                </Typography>
                                <Typography>
                                    <strong>브랜드:</strong> {item.brandName}
                                </Typography>
                                <Typography>
                                    <strong>소개:</strong> {item.description}
                                </Typography>
                                <Typography>
                                    <strong>카테고리:</strong> {item.category1}
                                </Typography>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </List>
        </Box>
    );
};

export default GearView;