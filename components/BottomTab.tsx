"use client";

import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {useRouter} from "next/navigation";
import {AssistWalker, Checkroom, EmojiEvents, Home} from "@mui/icons-material";
import {useSport} from "@/context/SportProvider";


const BottomTab: React.FC = () => {
    const [value, setValue] = useState(0);
    const router = useRouter(); // Next.js 라우팅 hook
    const {sport, setSport} = useSport();

    const menuItems = [
        {label: "홈", icon: <Home/>, key: "home", href: "/", categoryDepth1: "all"},
        {label: "대회", icon: <EmojiEvents/>, key: "competition", href: "/cycle/competition", categoryDepth1: "cycle"},
        {label: "통증", icon: <AssistWalker/>, key: "painpoint", href: "/cycle/painpoint", categoryDepth1: "cycle"},
        // {label: "빌드업", icon: <FitnessCenter/>, key: "buildup", href: "/buildup"},
        // {label: "커뮤니티", icon: <ForumOutlined/>, key: "search", href: "/community"},
        {
            label: "100대명산",
            icon: <Checkroom/>,
            key: "mountain-top-100",
            href: "/hiking/mountain-top-100",
            categoryDepth1: "mountain"
        },
    ];

    const filteredMenuItems = menuItems.filter((item) => {
        if (sport === "hiking") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "mountain";
        } else if (sport === "cycling") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "cycle";
        } else if(sport === "home") {
            return item.categoryDepth1 === "all";
        }
        // 기본값(혹은 다른 sport 값이 있을 때)
        return item.categoryDepth1 === "all";
    });

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
                    label={menu.label}
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