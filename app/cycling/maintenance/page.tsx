'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    Box,
    Typography,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Divider,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface TocItem {
    id: string;
    label: string;
    icon?: React.ElementType;
    children?: TocItem[];
}

const toc: TocItem[] = [
    {
        id: 'tools',
        label: '주요 토크값 리스트',
        icon: HandymanIcon,
        children: [
            { id: 'basic-tools', label: 'Basic Tool Kit' },
            { id: 'lubricants', label: 'Lubricants & Cleaners' },
            { id: 'workstand', label: 'Bike Workstand' },
        ],
    },
    {
        id: 'drivetrain',
        label: 'Drivetrain',
        icon: SettingsIcon,
        children: [
            { id: 'chain', label: 'Chain Care' },
            { id: 'cassette', label: 'Cassette & Freehub' },
            { id: 'derailleur', label: 'Derailleur Adjustment' },
        ],
    },
    {
        id: 'brakes',
        label: 'Brakes',
        icon: TuneIcon,
        children: [
            { id: 'rim-brakes', label: 'Rim Brakes' },
            { id: 'disc-brakes', label: 'Disc Brakes' },
        ],
    },
    {
        id: 'wheels',
        label: 'Wheels & Tires',
        icon: PedalBikeIcon,
        children: [
            { id: 'tire-pressure', label: 'Tire Pressure' },
            { id: 'spoke-tension', label: 'Spoke Tension & Truing' },
        ],
    },
    {
        id: 'cleaning',
        label: 'Cleaning & Lubrication',
        icon: CleaningServicesIcon,
        children: [
            { id: 'wash', label: 'Bike Wash' },
            { id: 'lube-points', label: 'Lubrication Points' },
        ],
    },
];

function TocList({ items }: { items: TocItem[] }) {
    const [open, setOpen] = useState<Record<string, boolean>>({});

    const toggle = (id: string) => setOpen((p) => ({ ...p, [id]: !p[id] }));

    return (
        <List disablePadding>
            {items.map(({ id, label, icon: Icon, children }) => {
                const hasChildren = Boolean(children?.length);
                return (
                    <React.Fragment key={id}>
                        {hasChildren ? (
                            <>
                                <ListItemButton onClick={() => toggle(id)}>
                                    {Icon && (
                                        <ListItemIcon>
                                            <Icon />
                                        </ListItemIcon>
                                    )}
                                    <ListItemText primary={label} />
                                    {open[id] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open[id]} timeout="auto" unmountOnExit>
                                    <TocList items={children!} />
                                </Collapse>
                            </>
                        ) : (
                            <Link href={`#${id}`} passHref legacyBehavior>
                                <ListItemButton component="a" sx={{ pl: 4 }}>
                                    {Icon && (
                                        <ListItemIcon>
                                            <Icon />
                                        </ListItemIcon>
                                    )}
                                    <ListItemText primary={label} />
                                </ListItemButton>
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </List>
    );
}

export default function ManualTOCPage() {
    return (
        <Box p={3} maxWidth="sm" mx="auto">
            <Divider sx={{ mb: 2 }} />
            <TocList items={toc} />
        </Box>
    );
}