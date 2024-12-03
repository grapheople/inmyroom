"use client";

import * as React from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/app/theme';
import TopNavigation from "@/components/TopNavigation";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useMediaQuery} from "@mui/material";

export default function RootLayout(props: { children: React.ReactNode }) {
    const isMobile = useMediaQuery("(max-width:600px)"); // 모바일 여부 체크
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-o/ZRRbBeYRuNj9Rk5DS6z6z+HdUfhQzq8f6DkoJTOk4="
                crossOrigin=""
            />
        </head>
        <body style={{overflow: "hidden"}}>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider theme={theme}>
            <CssBaseline/>
                <TopNavigation/>
                <Box sx={{ pt: isMobile? 0 : "68px" }}>
                    <Container>
                        {props.children}
                    </Container>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}