"use client";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Divider,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {sendGTMEvent} from "@next/third-parties/google";
import {gearCycleFrame} from "@/data/locale/ko/gear_cycle_frame";
import {gearCycleWheel} from "@/data/locale/ko/gear_cycle_wheel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useGlobalContext} from "@/context/GlobalContextProvider";
import {gearCycleSaddle} from "@/data/locale/ko/gear_cycle_saddle";
import {gearCycleComponents} from "@/data/locale/ko/gear_cycle_components";
import {gearCycleClothes} from "@/data/locale/ko/gear_cycle_clothes";
import {gearCycleAccessory} from "@/data/locale/ko/gear_cycle_accessory";

const GearView: React.FC = () => {
    const {selectedLanguage} = useGlobalContext();
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>(""); // 검색어 상태
    const [selectedCategory, setSelectedCategory] = useState<string>("프레임"); // 선택된 카테고리 상태
    const isMobile = useMediaQuery("(max-width:600px)"); // 반응형 브레이크포인트 설정

    // 여러 gear 데이터 합치기
    const gears = gearCycleFrame
        .concat(gearCycleWheel)
        .concat(gearCycleSaddle)
        .concat(gearCycleComponents)
        .concat(gearCycleClothes)
        .concat(gearCycleAccessory);

    // 카테고리 버튼 배열
    const categories = ["프레임", "휠", "안장", "의류", "구동계", "액세서리"];

    // 아코디언 토글 핸들러
    const handleToggle = (id: number) => {
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

    // 카테고리 필터 핸들러
    const handleCategoryFilter = (category: string) => {
        // 이미 선택된 카테고리를 다시 누르면 전체 해제
        if (selectedCategory === category) {
            setSelectedCategory("");
        } else {
            setSelectedCategory(category);
        }
    };

    // 필터 로직 (검색어 + 카테고리)
    const filteredGear = gears.filter((item) => {
        const matchesSearch = item.productNameKor
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const matchesCategory =
            selectedCategory === "" || item.category1 === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <Box sx={{paddingBottom: 8, paddingTop: 4}}>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    mb: 2,
                }}
            >
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "contained" : "outlined"}
                        onClick={() => handleCategoryFilter(category)}
                    >
                        {category}
                    </Button>
                ))}
            </Box>

            <Box sx={{padding: 2}}>
                <TextField
                    fullWidth
                    variant="standard"
                    label="찾고싶은 제품 이름을 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </Box>

            {/* 결과가 없으면 "준비중입니다" 표시, 있으면 리스트 렌더링 */}
            {filteredGear.length === 0 ? (
                <Typography
                    sx={{ padding: 2, textAlign: "center" }}
                    variant="body1"
                >
                    준비중입니다
                </Typography>
            ) : (
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
                                        primary={`${
                                            selectedLanguage === "한국어"
                                                ? item.productNameKor
                                                : item.productNameEn
                                        }`}
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
                                    <Typography variant="h6">
                                        {selectedLanguage === "한국어"
                                            ? item.productNameKor
                                            : item.productNameEn}
                                    </Typography>
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
                                    {item.specs?.map((spec, index) => (
                                        <Typography key={index}>
                                            {spec}
                                        </Typography>
                                    ))}
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default GearView;