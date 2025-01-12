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
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter(); // Next.js 라우팅 hook

    const menuItems = [
        {label: "홈", icon: <Home/>, key: "home", href: "/"},
        {label: "대회", icon: <EmojiEvents/>, key: "competition", href: "/competition"},
        {label: "통증", icon: <AssistWalker/>, key: "painpoint", href: "/painpoint"},
        // {label: "빌드업", icon: <FitnessCenter/>, key: "buildup", href: "/buildup"},
        // {label: "커뮤니티", icon: <ForumOutlined/>, key: "search", href: "/community"},
        // {label: "마이룸", icon: <Checkroom/>, key: "notifications", href: "/myroom"},
    ];

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawerWidth = 240;

    const movePage = (path: string) => {
        router.push(path); // 홈
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                BMU
            </Typography>
            <Divider/>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.key} disablePadding>
                        <ListItemButton
                            sx={{textAlign: 'center'}}>
                            <ListItemText primary={item.label}/>
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
                            aria-label="account of current user"
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
                            href="#app-bar-with-responsive-menu"
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
                            BuildMeUp
                        </Typography>
                        <Box sx={{flexGrow: 1, display: 'flex'}}>
                            {menuItems.map((menu, index) => (
                                <React.Fragment key={menu.key}>
                                    <Button
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                        onClick={() => movePage(menu.href)}
                                    >
                                        {menu.label}
                                    </Button>
                                    {index < menuItems.length - 1 && (
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            sx={{
                                                bgcolor: 'rgba(255, 255, 255, 0.5)', // 디바이더 색상
                                                width: '2px', // 디바이더 두께
                                                height: 'auto', // 세로로 채우기
                                                mx: 1, // 좌우 여백
                                            }}
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default TopNavigation;