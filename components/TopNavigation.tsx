"use client";

import React from "react";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useRouter} from "next/navigation";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {AssistWalker, Checkroom, EmojiEvents, Home} from "@mui/icons-material";
import {useSport} from "@/context/SportProvider";


const TopNavigation: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter(); // Next.js 라우팅 hook
    const {sport, setSport} = useSport();

    const menuItems = [
        {label: "홈", icon: <Home/>, key: "home", href: "/", categoryDepth1: "all"},
        {label: "대회", icon: <EmojiEvents/>, key: "competition", href: "/cycling/competition", categoryDepth1: "cycling"},
        {label: "통증", icon: <AssistWalker/>, key: "painpoint", href: "/cycling/painpoint", categoryDepth1: "cycling"},
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
            return item.categoryDepth1 === "all" || item.categoryDepth1 === "cycling";
        } else if (sport === "home") {
            return item.categoryDepth1 === "all";
        }
        // 기본값(혹은 다른 sport 값이 있을 때)
        return item.categoryDepth1 === "all";
    });

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawerWidth = 240;

    const movePage = (path: string) => {
        if (path === "/") {
            setSport("home");
        }
        router.push(path); // 홈
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant="h6" sx={{my: 2}}>
                Grapheople
            </Typography>
            <Divider/>
            <List>
                {filteredMenuItems.map((menu) => (
                    <ListItem key={menu.key} disablePadding>
                        <ListItemButton
                            sx={{textAlign: 'center'}}
                            onClick={() => movePage(menu.href)}
                        >
                            <ListItemText primary={menu.label}/>
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
                            Grapheople
                        </Typography>
                        <Box sx={{flexGrow: 1, display: 'flex'}}>
                            {filteredMenuItems.map((menu, index) => (
                                <React.Fragment key={menu.key}>
                                    <Button
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                        onClick={() => movePage(menu.href)}
                                    >
                                        {menu.label}
                                    </Button>
                                    {index < filteredMenuItems.length - 1 && (
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