import React from "react";
import {Box, Button, Typography, Link} from "@mui/material";
import {motion} from "framer-motion";
import {CompetitionItem} from "@/types/competition/CompetitionItem";
import moment from "moment/moment";

interface CompetitionDetailProps {
    item: CompetitionItem;
    onBack: () => void;
    isMobile: boolean;
}

const CompetitionDetailView: React.FC<CompetitionDetailProps> = ({item, onBack, isMobile}) => {
    return (
        <motion.div
            initial={{x: "100%", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: "100%", opacity: 0}}
            transition={{duration: 0.5}}
            style={{
                width: isMobile ? "100%" : "70%",
                position: isMobile ? "absolute" : "relative",
                height: "100%",
                background: "#fff",
                zIndex: 10,
                boxShadow: isMobile ? "0px 4px 6px rgba(0,0,0,0.1)" : "none",
                overflowY: "auto", // 스크롤바 추가
            }}
        >
            <Box
                p={3}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Box sx={{position: 'sticky', top: 0, background: '#fff', zIndex: 1, pt: 1, pb: 1}}>
                    <Button variant="contained" color="primary" onClick={onBack} sx={{alignSelf: 'flex-start'}}>
                        닫기
                    </Button>
                </Box>
                <Typography variant="h4" gutterBottom>
                    {item.name}
                </Typography>
                <Typography variant="body1" sx={{whiteSpace: 'pre-line'}}>
                    {item.description}
                </Typography>
                <Typography variant="body2">
                    <strong>주최:</strong> {item.host}
                </Typography>
                <Typography variant="body2">
                    <strong>장소:</strong> {item.location}
                </Typography>
                <Typography variant="body2">
                    <strong>대회 시작일:</strong> {moment(item.eventStartDate).format('YYYY. M. D')}
                </Typography>
                <Typography variant="body2">
                    <strong>모집 시작일:</strong> {moment(item.regStartDate).format('YYYY. M. D')}
                </Typography>
                <Typography variant="body2">
                    <strong>모집 종료일:</strong> {moment(item.regEndDate).format('YYYY. M. D')}
                </Typography>
                <Typography variant="body2">
                    <strong>참가비:</strong> {item.fee}원
                </Typography>
                <Typography variant="body2">
                    <strong>링크:</strong> <Link href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</Link>
                </Typography>
                <Box mt={2} pb={10}>
                    <Typography variant="h6" gutterBottom>이미지:</Typography>
                    <Box display="flex" flexWrap="wrap" gap={2}>
                        {item.imgs.map((img, index) => (
                            <img key={index} src={img} alt={`img-${index}`} style={{width: "100%", maxWidth: "200px", borderRadius: "8px"}} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </motion.div>
    );
};

export default CompetitionDetailView;