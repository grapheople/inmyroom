"use client";

import React, { useState } from "react";
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { AssistWalker, Checkroom, EmojiEvents, Home } from "@mui/icons-material";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import Container from "@mui/material/Container";

const TopNavigation: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter();
    const { sport, setSport, selectedLanguage, setSelectedLanguage } = useGlobalContext();

    // Language Dropdown State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClose = (language: string | null) => {
        if (language) {
            setSelectedLanguage(language); // 언어 상태 업데이트
        }
        setAnchorEl(null); // 드롭다운 닫기
    };

    const menuItems = [
        { label: "홈", icon: <Home />, key: "home", href: "/", categoryDepth1: "all" },
        { label: "대회", icon: <EmojiEvents />, key: "competition", href: "/cycling/competition", categoryDepth1: "cycling" },
        { label: "통증", icon: <AssistWalker />, key: "painpoint", href: "/cycling/painpoint", categoryDepth1: "cycling" },
        {
            label: "100대명산",
            icon: <Checkroom />,
            key: "mountain-top-100",
            href: "/hiking/mountain-top-100",
            categoryDepth1: "mountain",
        },
    ];

    const filteredMenuItems = menuItems.filter((item) => {
        if (sport === "hiking") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "mountain";
        } else if (sport === "cycling") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "cycling";
        } else if (sport === "home") {
            return item.categoryDepth1 === "all";
        }
        return item.categoryDepth1 === "all";
    });

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Grapheople
            </Typography>
            <Divider />
            <List>
                {filteredMenuItems.map((menu) => (
                    <ListItem key={menu.key} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => router.push(menu.href)}
                        >
                            <ListItemText primary={menu.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <AppBar component="nav">
                <Container maxWidth="md">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                ml: 2,
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Graphy
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: "center" }}>
                            {filteredMenuItems.map((menu, index) => (
                                <React.Fragment key={menu.key}>
                                    <Button
                                        sx={{my: 2, color: 'white', display: 'block', fontSize: '1.1rem'}}
                                        onClick={() => router.push(menu.href)}
                                    >
                                        {menu.label}
                                    </Button>
                                    {index < filteredMenuItems.length - 1 && (
                                        <Divider
                                            orientation="vertical"
                                            sx={{
                                                backgroundColor: 'white',
                                                height: '20px', // 세로로 채우기
                                            }}
                                        />
                                    )}
                                </React.Fragment>

                            ))}
                        </Box>
                        {/* Language Dropdown */}
                        <Button
                            variant="outlined" // 버튼처럼 보이게
                            aria-controls={open ? "language-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleLanguageClick}
                            sx={{
                                borderColor: "white",
                                color: "white",
                                backgroundColor: "primary.main",
                                textTransform: "none",
                                ml: 2,
                                "&:hover": {
                                    backgroundColor: "primary.dark", // 호버 시 색상 변경
                                },
                            }}
                        >
                            {selectedLanguage}
                        </Button>
                        <Menu
                            id="language-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => handleLanguageClose(null)}
                            MenuListProps={{
                                "aria-labelledby": "language-button",
                            }}
                        >
                            <MenuItem onClick={() => handleLanguageClose("한국어")}>한국어</MenuItem>
                            <MenuItem onClick={() => handleLanguageClose("English")}>English</MenuItem>
                            <MenuItem onClick={() => handleLanguageClose("Español")}>Español</MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default TopNavigation;