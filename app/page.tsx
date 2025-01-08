"use client";

import React from "react";
import { Grid2, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";

const ResponsiveDetailView: React.FC = () => {
    return (
        <Box
            sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column", // Column layout for title and grid
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
            }}
        >
            {/* Title Section */}
            <Typography sx={{ marginBottom: 4, fontSize: 30, textAlign: "center" }}>
                운동을 선택하세요!🏃‍♂️🚴‍♂️
            </Typography>

            {/* Images Section */}
            <Grid2
                container
                spacing={2}
                sx={{
                    maxWidth: "100%",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                }}
            >
                {/* Running Image Section */}
                <Grid2
                    size={{ xs: 12, sm: 6 }}
                    sx={{
                        flex: "1 1 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Link href="/competition" passHref>
                            <img
                                src="/running.webp"
                                alt="Running Thumbnail"
                                style={{
                                    width: "100%",
                                    maxWidth: "512px",
                                    height: "auto",
                                    maxHeight: "500px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            />
                        </Link>
                        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                            Running
                        </Typography>
                    </Box>
                </Grid2>

                {/* Cycling Image Section */}
                <Grid2
                    size={{ xs: 12, sm: 6 }}
                    sx={{
                        flex: "1 1 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Link href="/competition" passHref>
                            <img
                                src="/cycling.webp"
                                alt="Cycling Thumbnail"
                                style={{
                                    width: "100%",
                                    maxWidth: "512px",
                                    height: "auto",
                                    maxHeight: "500px",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            />
                        </Link>
                        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                            Cycling
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default ResponsiveDetailView;