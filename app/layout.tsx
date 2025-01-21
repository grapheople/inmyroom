"use client";

import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';
import TopNavigation from "@/components/TopNavigation";
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useMediaQuery} from "@mui/material";
import "@/app/globals.css";
import BottomTab from "@/components/BottomTab";
import {SportProvider} from "@/context/SportProvider";
import {GoogleAdSense} from "@/components/GoogleAdSense";

export default function RootLayout(props: { children: React.ReactNode }) {
    const isMobile = useMediaQuery("(max-width:600px)"); // 모바일 여부 체크
    return (
        <html lang="en">
        <head>
            <title>Graphy - 모험가를 위한 안내서</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content="등산 & 싸이클 운동 정보 모험가를 위한 안내서"/>
            <meta name="keywords" content="등산, 싸이클, 운동, 대회, 그란폰도"/>
            <meta name="author" content="Graphy"/>
            <meta property="og:title" content="Graphy"/>
            <meta property="og:image" content="/thumbnail.webp"/>
            <meta property="og:description" content="모험가를 위한 안내서 - 등산 & 싸이클 운동 정보"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:type" content="website"/>
            <GoogleAdSense />
        </head>
        <GoogleTagManager gtmId="GTM-TH4TZR99"/>
        <body>
        <SportProvider>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Box sx={{display: "flex"}}>
                        {!isMobile ? <TopNavigation/> : null}
                        <Container maxWidth={"md"} disableGutters={isMobile}>
                            <Box sx={{
                                pt: {xs: 0 , sm: "80px"}
                            }}>
                                {props.children}
                            </Box>
                        </Container>
                        {isMobile ? <BottomTab/> : null}
                    </Box>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </SportProvider>
        </body>
        <GoogleAnalytics gaId="G-1BNP8LR4S2"/>
        </html>
    );
}