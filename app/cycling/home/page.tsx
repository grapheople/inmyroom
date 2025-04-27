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
    const weatherData = [
        { date: '2025-04-28', icon: WbSunnyIcon, high: 22, low: 12, desc: 'Sunny' },
        { date: '2025-04-29', icon: CloudIcon, high: 20, low: 11, desc: 'Cloudy' },
        { date: '2025-04-30', icon: GrainIcon, high: 18, low: 10, desc: 'Rain' },
        { date: '2025-05-01', icon: WbSunnyIcon, high: 23, low: 13, desc: 'Sunny' },
        { date: '2025-05-02', icon: CloudIcon, high: 19, low: 12, desc: 'Partly Cloudy' },
        { date: '2025-05-03', icon: GrainIcon, high: 17, low: 9, desc: 'Showers' },
        { date: '2025-05-04', icon: WbSunnyIcon, high: 24, low: 14, desc: 'Sunny' },
    ];

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
                                <LocationOnIcon fontSize="large" />
                                <Box>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        Current Location
                                    </Typography>
                                    {pos.error ? (
                                        <Typography variant="body2" color="error">
                                            {pos.error.message}
                                        </Typography>
                                    ) : pos.lat != null ? (
                                        <Typography variant="h6" fontWeight={600}>
                                            {pos.lat.toFixed(4)}, {pos.lon!.toFixed(4)}
                                        </Typography>
                                    ) : (
                                        <Typography variant="body2">Fetching…</Typography>
                                    )}
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Weekly Weather Forecast */}
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="subtitle1" mb={2}>
                        Weekly Weather Forecast
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: (theme) => theme.spacing(2),
                        }}
                    >
                        {weatherData.map((day) => {
                            const IconComponent = day.icon;
                            return (
                                <Box key={day.date} sx={{ width: 90, textAlign: 'center' }}>
                                    <Typography variant="body2" fontWeight={500}>
                                        {new Date(day.date).toLocaleDateString(undefined, { weekday: 'short' })}
                                    </Typography>
                                    <IconComponent fontSize="large" />
                                    <Typography variant="body2">
                                        {day.high}°/{day.low}°
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {day.desc}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}