"use client";

import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {useRouter} from "next/navigation";
import {AssistWalker, Checkroom, EmojiEvents, Home, Landscape} from "@mui/icons-material";
import {useGlobalContext} from "@/context/GlobalContextProvider";
import {menuItems} from "@/data/menuItems";


const BottomTab: React.FC = () => {
    const router = useRouter(); // Next.js 라우팅 hook
    const {sport, setSport, selectedLanguage} = useGlobalContext();

    const filteredMenuItems = menuItems.filter((item) => {
        if (sport === "hiking") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "mountain";
        } else if (sport === "cycling") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "cycling";
        } else if(sport === "home") {
            return item.categoryDepth1 === "all";
        }
        // 기본값(혹은 다른 sport 값이 있을 때)
        return item.categoryDepth1 === "all";
    });

    const [value, setValue] = useState(0);

    const movePage = (path: string) => {
        if(path === "/") {
            setSport("home");
        }
        router.push(path); // 홈
    }

    return (
        <BottomNavigation
            value={value}
            style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            showLabels
        >
            {filteredMenuItems.map((menu, index) => (
                <BottomNavigationAction
                    key={menu.key}
                    label={selectedLanguage === '한국어' ? menu.label : menu.labelEn}
                    icon={menu.icon}
                    style={{
                        color: value === index ? "#1976d2" : "gray", // 선택된 메뉴는 강조된 색상
                        transform: value === index ? "scale(1.1)" : "scale(1)", // 선택된 메뉴는 크기 확대
                        transition: "transform 0.2s, color 0.2s", // 부드러운 전환 효과
                    }}
                    onClick={() => {
                        setValue(index);
                        movePage(menu.href);
                    }}
                />
            ))}
        </BottomNavigation>
    );
}

export default BottomTab;