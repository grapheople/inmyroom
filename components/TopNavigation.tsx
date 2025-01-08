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
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Checkroom, ForumOutlined, MilitaryTechOutlined} from "@mui/icons-material";

const TopNavigation = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const menuItems = [
        {label: "대회정보", icon: <MilitaryTechOutlined/>, key: "home", href: "/competition"},
        // {label: "커뮤니티", icon: <ForumOutlined/>, key: "search", href: "/community"},
        // {label: "마이룸", icon: <Checkroom/>, key: "notifications", href: "/myroom"},
    ];

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawerWidth = 240;

    const movePage = (path: string) => {
        location.href = path;
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
        <div>
            {isMobile ? (
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    style={{
                        position: "fixed",
                        bottom: 0,
                        zIndex: 1000,
                        width: "100%",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    {menuItems.map((item) => (
                        <BottomNavigationAction key={item.key} label={item.label} icon={item.icon}/>
                    ))}
                </BottomNavigation>
            ) : (
                <Container>
                    <AppBar position="fixed">
                        <Container maxWidth="md" >
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
                                    {menuItems.map((menu) => (
                                        <Button
                                            key={menu.key}
                                            sx={{my: 2, color: 'white', display: 'block'}}
                                            onClick={() => movePage(menu.href)}
                                        >
                                            {menu.label}
                                        </Button>
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
                </Container>
            )}
        </div>
    );
}

export default TopNavigation;