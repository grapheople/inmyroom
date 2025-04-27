"use client";

import React, {useState} from "react";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {useGlobalContext} from "@/context/GlobalContextProvider";
import Container from "@mui/material/Container";
import {menuItems} from "@/data/menuItems";

const TopNavigation: React.FC = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter();
    const {sport, setSport, selectedLanguage, setSelectedLanguage} = useGlobalContext();

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

    const movePage = (path: string) => {
        if (path === "/") {
            setSport("cycling");
        }
        router.push(path); // 홈
    }

    const checkCurrentMenu = (path: string) => {
        return pathname.indexOf(path) > -1 && path !== "/";
    }

    const filteredMenuItems = menuItems.filter((item) => {
        if (sport === "hiking") {
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "hiking";
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
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Graphy
            </Typography>
            <Divider/>
            <List>
                {filteredMenuItems.map((menu) => (
                    <ListItem key={menu.key} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: 'center',
                            }}
                            onClick={() => movePage(menu.href)}
                        >
                            <ListItemText primary={selectedLanguage === '한국어' ? menu.label : menu.labelEn}/>
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
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/cycling/home"
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
                        <Box sx={{flexGrow: 1, display: 'flex', alignItems: "center"}}>
                            {filteredMenuItems.map((menu, index) => (
                                <React.Fragment key={menu.key}>
                                    <Button
                                        sx={{
                                            padding: '4px',
                                            color: 'white',
                                            display: 'block',
                                            border: checkCurrentMenu(menu.href) ? "1px solid white" : "none",
                                            fontSize: '1.1rem',
                                        }}
                                        onClick={() => movePage(menu.href)}
                                    >
                                        {selectedLanguage === '한국어' ? menu.label : menu.labelEn}
                                    </Button>
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
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default TopNavigation;