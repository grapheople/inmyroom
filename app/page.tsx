"use client";

import React, { useState } from "react";
import { Grid2, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useSport } from "@/context/SportProvider";
import { useRouter } from "next/navigation";

const ResponsiveDetailView: React.FC = () => {
    const router = useRouter();
    const { sport, setSport } = useSport();
    const [open, setOpen] = useState(false); // State to control dialog visibility

    const handleRunningClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        setSport("hiking");
        router.push("/mountain-top-100");
    };

    const handleCyclingClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); // Prevent the default page navigation
        setSport("cycling");
        router.push("/competition");
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
                        <a onClick={handleRunningClick}>
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
                        </a>
                        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                            Hiking
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
                        <a onClick={handleCyclingClick}>
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
                        </a>
                        <Typography variant="subtitle1" sx={{ marginTop: 1 }}>
                            Cycling
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>

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