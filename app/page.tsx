'use client';

import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Stack,
} from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SpeedIcon from '@mui/icons-material/Speed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';
import { motion } from 'framer-motion';
import useSWR from 'swr';

/**
 * Fetch helper – replace with your preferred data fetching layer.
 */
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Position {
    lat: number | null;
    lon: number | null;
    error?: GeolocationPositionError;
}

export default function Dashboard() {
    /** ---------------------- 위치 좌표 처리 ---------------------- */
    const [pos, setPos] = useState<Position>({ lat: null, lon: null });

    const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const weatherUrl =
        pos.lat && pos.lon
            ? `https://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lon}&appid=${API_KEY}&units=metric&lang=kr`
            : null;

    const { data: weather, error: weatherError } = useSWR(weatherUrl, fetcher, {
        dedupingInterval: 60 * 1000 * 10,
        revalidateIfStale: false,
        revalidateOnFocus: false,
    });

    const getWeatherIcon = (main: string) => {
        switch (main) {
            case 'Clear':
                return <WbSunnyIcon fontSize="large" />;
            case 'Clouds':
                return <CloudIcon fontSize="large" />;
            case 'Rain':
            case 'Drizzle':
                return <GrainIcon fontSize="large" />;
            default:
                return <WbSunnyIcon fontSize="large" />;
        }
    };

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            setPos({ lat: null, lon: null, error: { code: 0, message: 'unsupported', NAME: 'unsupported' } as any });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (p) =>
                setPos({ lat: p.coords.latitude, lon: p.coords.longitude }),
            (err) => setPos({ lat: null, lon: null, error: err }),
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }, []);

    /** ---------------------- KPI 데이터 ---------------------- */
    const data = {
        totalDistance: 1240,
        totalRides: 112,
        avgSpeed: 27.4,
    };

    /** ---------------------- 주간 날씨 (샘플) ---------------------- */
    if (!data) return <Box p={3}>Loading...</Box>;

    const { totalDistance, totalRides, avgSpeed } = data;

    /** ---------------------- 렌더 ---------------------- */
    return (
        <Box p={3}>
            {/* Page Title */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Typography variant="h4" fontWeight={700} mb={3}>
                    Cycling Dashboard
                </Typography>
            </motion.div>

            {/* KPI + 위치 카드 */}
            <Grid container spacing={3} mb={3}>
                {/* Total Distance */}
                <Grid item xs={12} md={3} sx={{ display: 'flex' }}>
                    <Card elevation={3} sx={{ flexGrow: 1, height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ height: '100%' }}>
                                <DirectionsBikeIcon fontSize="large" />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Total Distance
                                    </Typography>
                                    <Typography variant="h5" fontWeight={600}>
                                        {totalDistance.toLocaleString()} km
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Total Rides */}
                <Grid item xs={12} md={3} sx={{ display: 'flex' }}>
                    <Card elevation={3} sx={{ flexGrow: 1, height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ height: '100%' }}>
                                <DirectionsRunIcon fontSize="large" />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Total Rides
                                    </Typography>
                                    <Typography variant="h5" fontWeight={600}>
                                        {totalRides}
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Average Speed */}
                <Grid item xs={12} md={3} sx={{ display: 'flex' }}>
                    <Card elevation={3} sx={{ flexGrow: 1, height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ height: '100%' }}>
                                <SpeedIcon fontSize="large" />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Avg Speed
                                    </Typography>
                                    <Typography variant="h5" fontWeight={600}>
                                        {avgSpeed} km/h
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Current Location */}
                <Grid item xs={12} md={3} sx={{ display: 'flex' }}>
                    <Card elevation={3} sx={{ flexGrow: 1, height: '100%' }}>
                        <CardContent sx={{ height: '100%' }}>
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ height: '100%' }}>
                                {weather ? (
                                    <>
                                        {getWeatherIcon(weather.weather[0].main)}
                                        <Box>
                                            <Typography variant="subtitle2" color="text.secondary">
                                                현재 날씨
                                            </Typography>
                                            <Typography variant="h6" fontWeight={600}>
                                                {weather.main.temp}°C
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                습도 {weather.main.humidity}%, 풍속 {weather.wind.speed}m/s
                                            </Typography>
                                        </Box>
                                    </>
                                ) : weatherError ? (
                                    <Typography color="error">날씨 정보를 불러올 수 없습니다.</Typography>
                                ) : (
                                    <Typography>날씨 정보를 불러오는 중…</Typography>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}