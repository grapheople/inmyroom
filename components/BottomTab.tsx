"use client";

import React, {useEffect, useState} from "react";
import {
    BottomNavigation,
    BottomNavigationAction,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import {useRouter} from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {AssistWalker, EmojiEvents, Home} from "@mui/icons-material";


const TopNavigation: React.FC = () => {
    const [value, setValue] = useState(0);
    const router = useRouter(); // Next.js 라우팅 hook

    const menuItems = [
        {label: "홈", icon: <Home/>, key: "home", href: "/"},
        {label: "대회", icon: <EmojiEvents/>, key: "competition", href: "/competition"},
        {label: "통증", icon: <AssistWalker/>, key: "painpoint", href: "/painpoint"},
        // {label: "빌드업", icon: <FitnessCenter/>, key: "buildup", href: "/buildup"},
        // {label: "커뮤니티", icon: <ForumOutlined/>, key: "search", href: "/community"},
        // {label: "마이룸", icon: <Checkroom/>, key: "notifications", href: "/myroom"},
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

        // 탭 인덱스에 따라 페이지 이동 (예시)
        switch (newValue) {
            case 0:
                router.push("/");
                break;
            case 1:
                router.push("/competition");
                break;
            case 2:
                router.push("/painpoint");
                break;
            default:
                break;
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={handleChange}
            style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            showLabels
        >
            {menuItems.map((menu, index) => (
                <BottomNavigationAction
                    key={menu.key}
                    label={menu.label}
                    icon={menu.icon}
                    style={{
                        color: value === index ? "#1976d2" : "gray", // 선택된 메뉴는 강조된 색상
                        transform: value === index ? "scale(1.1)" : "scale(1)", // 선택된 메뉴는 크기 확대
                        transition: "transform 0.2s, color 0.2s", // 부드러운 전환 효과
                    }}
                />
            ))}
        </BottomNavigation>
    );
}

export default TopNavigation;