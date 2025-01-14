'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PainPointGroup } from './_components/types';
import PainPointModal from './_components/PainPointModal';
import Box from "@mui/material/Box";

const painPointGroups: PainPointGroup[] = [
    {
        id: 'shoulder',
        name: '어깨',
        x: '50%',
        y: '20%',
        painPoints: [
            {
                name: '회전근개염',
                cause: '장시간 컴퓨터 사용으로 인한 근육 긴장',
                solution: '목/어깨 스트레칭, 자세 교정, 가벼운 운동',
            },
            {
                name: '삼각근염',
                cause: '스마트폰 장시간 사용으로 인한 라운드숄더',
                solution: '가슴/어깨 폼롤러 마사지, 휴식 시간 확보',
            },
        ],
    },
    {
        id: 'lower_back',
        name: '허리',
        x: '50%',
        y: '60%',
        painPoints: [
            {
                name: '요통',
                cause: '잘못된 자세나 과도한 중량 운동으로 발생하는 요통',
                solution: '코어 근력 강화, 허리 스트레칭, 전문의 상담',
            },
            {
                name: '허리 통증',
                cause: '장시간 앉아서 일함으로써 발생하는 만성 허리 통증',
                solution: '30분~1시간마다 가벼운 스트레칭, 등받이 쿠션 사용',
            },
        ],
    },
];

const HumanBody: React.FC = () => {
    const [selectedGroup, setSelectedGroup] = useState<PainPointGroup | null>(null);

    const handleClickPainPointGroup = (group: PainPointGroup) => {
        setSelectedGroup(group);
    };

    const handleCloseModal = () => {
        setSelectedGroup(null);
    };

    return (
        <Box sx={{
            position: "relative",
            width: "100%",
            height: `calc(100vh - 64px)`,
            paddingTop: "20px",
            paddingBottom: "20px",
        }}>
            <img
                src="/human-body.webp"
                alt="인체 이미지"
                style={
                    {
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }
                }
            />

            {/* 각 그룹(동그라미) 표시 */}
            {painPointGroups.map((group) => (
                <div
                    key={group.id}
                    onClick={() => handleClickPainPointGroup(group)}
                    style={{
                        position: 'absolute',
                        left: group.x,
                        top: group.y,
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 0, 0, 0.7)',
                        transform: 'translate(-50%, -50%)',
                        cursor: 'pointer',
                    }}
                />
            ))}

            {/* 모달 */}
            <PainPointModal
                isOpen={!!selectedGroup}
                onClose={handleCloseModal}
                title={selectedGroup?.name || ''}
                painPoints={selectedGroup?.painPoints || []}
            />
        </Box>
    );
};

export default HumanBody;