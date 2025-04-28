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
    Dialog,
    IconButton,
} from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image';
import {display} from "@mui/system";

interface MaintenanceItem {
    id: string;
    label: string;
    imgUrl?: string;
    explain?: string;
    icon?: React.ElementType;
    children?: MaintenanceItem[];
}

const roots: MaintenanceItem[] = [
    {
        id: 'tools',
        label: '시마노 구동계 주요 토크값 리스트',
        icon: HandymanIcon,
    },
    {
        id: 'rearDerailleur',
        label: '뒷변속기',
        children: [
            {
                id: 'bracketAxle',
                label: '마운팅 스크류',
                explain: '8~10 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/rear_derailer.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvcmVhcl9kZXJhaWxlci5wbmciLCJpYXQiOjE3NDU4NDcxMDIsImV4cCI6MTkwMzUyNzEwMn0.NEH0gMZRN01GcKzohbcnSXcPUhvzEZ131IVDzr1HQLU'
            },
            {
                id: 'mountingScrew',
                label: '브래킷 액슬',
                explain: '8~10 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/rear_derailer.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvcmVhcl9kZXJhaWxlci5wbmciLCJpYXQiOjE3NDU4NDcxMDIsImV4cCI6MTkwMzUyNzEwMn0.NEH0gMZRN01GcKzohbcnSXcPUhvzEZ131IVDzr1HQLU'
            },
            {
                id: 'retainingScrew',
                label: '리테이닝 스크류',
                explain: '0.9~1.2 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/rear_derailer2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvcmVhcl9kZXJhaWxlcjIucG5nIiwiaWF0IjoxNzQ1ODQ3MjU4LCJleHAiOjE5MDM1MjcyNTh9.FTR-g6mTXuvKGlCzRqSgvigoQ4kHeGkxidXZMtS7Xts'
            },
            {
                id: 'pulleys',
                label: '텐션/가이드 풀리',
                explain: '2.5~5 Nm',
                imgUrl:
                    'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/pulleys.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvcHVsbGV5cy5wbmciLCJpYXQiOjE3NDU4NDQxMjUsImV4cCI6MTc3NzM4MDEyNX0.28Nvdho0eOprzUtmwCT5HHrQ19i37oFUpvt1-3HfO1A',
            },
        ],
    },
    {
        id: 'frontDerailleur',
        label: '앞변속기',
        children: [
            {
                id: 'mount',
                label: '마운트 볼트',
                explain: '5~7 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/front_derailer.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvZnJvbnRfZGVyYWlsZXIucG5nIiwiaWF0IjoxNzQ1ODQ1MDE0LCJleHAiOjE3NzczODEwMTR9.AelC66sJCslFbHEJuNt1hx1swziR9sJCpsUF-llfDj8'
            },
        ],
    },
    {
        id: 'crank',
        label: '크랭크셋',
        children: [
            {
                id: 'mountingScrew',
                label: '크랭크 마운팅 스크류',
                explain: '0.7~1.5 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/crank.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvY3JhbmsucG5nIiwiaWF0IjoxNzQ1ODQ2NjcxLCJleHAiOjE5MDM1MjY2NzF9.d7EMXbhmr2ysCUyz5hl6kPtkBdmXoXE-MnfiT7giD04'
            },
            {
                id: 'fixingScrew',
                label: '크랭크 픽싱 볼트',
                explain: '12~14 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/crank.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvY3JhbmsucG5nIiwiaWF0IjoxNzQ1ODQ2NjcxLCJleHAiOjE5MDM1MjY2NzF9.d7EMXbhmr2ysCUyz5hl6kPtkBdmXoXE-MnfiT7giD04'
            },
            {
                id: 'mountingScrew',
                label: '체인링 픽싱 볼트',
                explain: '듀라에이스 7~8Nm / 105 12~16Nm',
            },
        ],
    },
    {
        id: 'discCaliper',
        label: '유압 디스크 캘리퍼',
        children: [
            {
                id: 'caliperMountingScrew',
                label: '캘리퍼 마운트 볼트 / 마운트 브래킷',
                explain: '6~8 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/break1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvYnJlYWsxLnBuZyIsImlhdCI6MTc0NTg0NzQxNCwiZXhwIjoxOTAzNTI3NDE0fQ.DlqwtZk_xHUelVqk2T5Bt8C1-0PG8jyHQ0eanaQLI30'
            },
            {
                id: 'bleedScrew',
                label: '블리드 스크류',
                explain: '4~6 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/break1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvYnJlYWsxLnBuZyIsImlhdCI6MTc0NTg0NzQxNCwiZXhwIjoxOTAzNTI3NDE0fQ.DlqwtZk_xHUelVqk2T5Bt8C1-0PG8jyHQ0eanaQLI30'
            },
            {
                id: 'flareNut',
                label: '플레어 너트',
                explain: '5~6 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/break1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvYnJlYWsxLnBuZyIsImlhdCI6MTc0NTg0NzQxNCwiZXhwIjoxOTAzNTI3NDE0fQ.DlqwtZk_xHUelVqk2T5Bt8C1-0PG8jyHQ0eanaQLI30'
            },
            {
                id: 'bleedNipple',
                label: '블리드 니플',
                explain: '4~7 Nm',
                imgUrl: 'https://mrlyfaibilizunhhcbia.supabase.co/storage/v1/object/sign/graphy/maintenance/break2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAzM2ZhNTlmLTcxODUtNDM0MS04N2JmLTRjNjQ3YTJmODZmOCJ9.eyJ1cmwiOiJncmFwaHkvbWFpbnRlbmFuY2UvYnJlYWsyLnBuZyIsImlhdCI6MTc0NTg0NzU4MCwiZXhwIjoxOTAzNTI3NTgwfQ.EzggerlGp33Yl8hXlcjn0fh12Vlg64JDIlID0cpuADA'
            },

        ],
    },
];

/** Leaf item component that shows thumbnail & explain; enlarges image on click */
function LeafItem({ item, indent = 0 }: { item: MaintenanceItem; indent?: number }) {
    const [openImg, setOpenImg] = useState(false);

    const handleImgClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenImg(true);
    };

    const Icon = item.icon;

    return (
        <>
            <Link href={`#${item.id}`} passHref legacyBehavior>
                <ListItemButton component="a">
                    {Icon && (
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                    )}
                    <Box sx={{    display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {item.label}
                        </Typography>
                        {item.explain && (
                            <Typography variant="caption" color="text.secondary">
                                {item.explain}
                            </Typography>
                        )}
                        {item.imgUrl && (
                            <Box
                                onClick={handleImgClick}
                                sx={{ cursor: 'pointer' }}
                            >
                                <ImageIcon/>
                                <Typography variant="caption" color="text.secondary">
                                    이미지보기
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </ListItemButton>
            </Link>

            {/* Dialog for enlarged image */}
            {item.imgUrl && (
                <Dialog open={openImg} onClose={() => setOpenImg(false)} maxWidth="md">
                    <Box position="relative">
                        <IconButton
                            onClick={() => setOpenImg(false)}
                            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Box component="img" src={item.imgUrl} alt={item.label} sx={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Dialog>
            )}
        </>
    );
}

function TocList({ items, level = 0 }: { items: MaintenanceItem[]; level?: number }) {
    const [open, setOpen] = useState<Record<string, boolean>>({});

    const toggle = (id: string) => setOpen((p) => ({ ...p, [id]: !p[id] }));

    return (
        <List disablePadding>
            {items.map((item) => {
                const { id, label, icon: Icon, children } = item;
                const hasChildren = Boolean(children?.length);

                if (hasChildren) {
                    return (
                        <React.Fragment key={id}>
                            <ListItemButton onClick={() => toggle(id)} sx={{ pl: level * 2 }}>
                                {Icon && (
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                )}
                                <ListItemText primary={label} />
                                {open[id] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={open[id]} timeout="auto" unmountOnExit>
                                <TocList items={children!} level={level + 1} />
                            </Collapse>
                        </React.Fragment>
                    );
                }

                // Leaf node
                return <LeafItem key={id} item={item} indent={level} />;
            })}
        </List>
    );
}

export default function MaintenanceTOCPage() {
    return (
        <Box p={3} maxWidth="sm" mx="auto">
            <TocList items={roots} />
        </Box>
    );
}
