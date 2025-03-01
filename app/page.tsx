"use client";

import React, { useState } from "react";
import { Grid2, Typography, Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useGlobalContext } from "@/context/GlobalContextProvider";
import { useRouter } from "next/navigation";
import {sendGTMEvent} from "@next/third-parties/google";

const ResponsiveDetailView: React.FC = () => {
    const router = useRouter();
    const {sport, setSport, selectedLanguage, setSelectedLanguage} = useGlobalContext();
    const [open, setOpen] = useState(false); // State to control dialog visibility

    const handleHikingClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        sendGTMEvent({
            event: "home_hiking_click",
            category: "competition",
            action: "toggle",
            label: "hiking",
        });
        setSport("hiking");
        router.push("/hiking/mountain-top-100");
    };

    const handleCyclingClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        sendGTMEvent({
            event: "home_cycle_click",
            category: "competition",
            action: "toggle",
            label: "cycle",
        });
        setSport("cycling");
        router.push("/cycling/competition");
    }

    const handleClose = () => {
        setOpen(false); // Close the dialog
    };

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
                {selectedLanguage === '한국어' ? '운동을 선택하세요!' : 'Choose your workout!'}🏃‍♂️🚴‍♂️
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
                        <a href="/hiking/mountain-top-100" onClick={handleHikingClick}>
                            <img
                                src="https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/hiking_2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJncmFwaHkvaGlraW5nXzIud2VicCIsImlhdCI6MTc0MDg0MzEzMCwiZXhwIjoxNzcyMzc5MTMwfQ.eEFAeVDD0SHuAKiwWkddPfY0ZQgBlanr2L6QK0_2sbw"
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
                        </a>
                        <Typography variant="subtitle1" sx={{ marginTop: 1 }} onClick={handleHikingClick}>
                            {selectedLanguage === '한국어' ? '등산' : 'Hiking'}
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
                        <a href="/cycling/competition" onClick={handleCyclingClick}>
                            <img
                                src="https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/cycling_2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJncmFwaHkvY3ljbGluZ18yLndlYnAiLCJpYXQiOjE3NDA4NDI5ODAsImV4cCI6MTc3MjM3ODk4MH0.Ixh6drF3ag3Uf3rV2_BavHH01l1nbAWGEmQ4i9O71Qk"
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
                        </a>
                        <Typography variant="subtitle1" sx={{ marginTop: 1 }} onClick={handleCyclingClick}>
                            {selectedLanguage === '한국어' ? '싸이클' : 'Cycling'}
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
            <Box sx={{marginTop: '100px'}}>
                Contact <a className="cursor-pointer text-blue-500" href={`mailto:grapheople@gmail.com`}>grapheople@gmail.com</a>
            </Box>

            {/* Dialog for "준비 중입니다" */}
            <Dialog
                open={open}
                onClose={handleClose}
                sx={{
                    "& .MuiDialog-paper": {
                        borderRadius: "16px", // Rounded corners
                        padding: "20px",
                        backgroundColor: "#f9f9f9", // Light gray background
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow
                    },
                }}
            >
                <DialogContent>
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontSize: "1.5rem",
                        }}
                    >
                        준비 중입니다! 🚧
                    </Typography>
                </DialogContent>
                <DialogActions
                    sx={{
                        justifyContent: "center", // Center the buttons
                    }}
                >
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        sx={{
                            padding: "8px 16px",
                            borderRadius: "8px",
                            textTransform: "none",
                            backgroundColor: "#f57c00", // Custom button background color
                            color: "#fff", // Custom text color
                            "&:hover": {
                                backgroundColor: "#e65100", // Hover background color
                            },
                        }}
                    >
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ResponsiveDetailView;