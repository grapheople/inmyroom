'use client';

import React from 'react';
import HumanBody from './_components/HumanBody';
import { PainPointGroup } from './_components/types';

const DUMMY_PAIN_POINT_GROUPS: PainPointGroup[] = [
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

export default function Home() {
    return (
        <main style={{ display: 'flex', justifyContent: 'center' }}>
            <HumanBody painPointGroups={DUMMY_PAIN_POINT_GROUPS} />
        </main>
    );
}