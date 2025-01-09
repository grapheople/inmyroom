"use client";

import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';
import TopNavigation from "@/components/TopNavigation";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useMediaQuery} from "@mui/material";
import "@/app/globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
    const isMobile = useMediaQuery("(max-width:600px)"); // 모바일 여부 체크
    return (
        <html lang="en">
        <head>
            <title>Build Me Up</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content="러닝 & 싸이클 운동 정보"/>
            <meta name="keywords" content="러닝, 싸이클, 운동, 대회, 그란폰도, 마라톤"/>

            <meta name="author" content="필라이즈"/>
            <meta property="og:title" content="Build Me Up"/>
            <meta property="og:image" content="/thumbnail.webp"/>

            <meta property="og:description" content="러닝 & 싸이클 운동 정보"/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:type" content="website"/>

        </head>
        <GoogleTagManager gtmId="GTM-TH4TZR99" />
        <body>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <TopNavigation />
                <Box sx={{pt: isMobile ? 0 : "68px"}}>
                    <Container maxWidth={"md"}>
                        {props.children}
                    </Container>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        <GoogleAnalytics gaId="G-1BNP8LR4S2" />
        </html>
    );
}