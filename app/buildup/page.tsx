"use client";

import React, {useState} from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import moment from 'moment';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";
import { sendGTMEvent } from '@next/third-parties/google'

import {competitionData} from "@/data/granfondo";

const ResponsiveDetailView: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        sendGTMEvent({
            event: 'expand_competition_item',
            category: 'competition',
            action: 'toggle',
            label: id.toString(),
        });
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <Box>
        </Box>
    );
}

export default ResponsiveDetailView;