import React, { useState } from 'react';
import Image from 'next/image';
import { PainPointGroup } from './types';
import PainPointModal from './PainPointModal';

interface HumanBodyProps {
    painPointGroups: PainPointGroup[];
}

const HumanBody: React.FC<HumanBodyProps> = ({ painPointGroups }) => {
    const [selectedGroup, setSelectedGroup] = useState<PainPointGroup | null>(null);

    const handleClickPainPointGroup = (group: PainPointGroup) => {
        setSelectedGroup(group);
    };

    const handleCloseModal = () => {
        setSelectedGroup(null);
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100vh', // 브라우저 전체 높이
            padding: '40px 0 70px;'
        }}>
            {/* 예시용 인체 그림 */}
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
        </div>
    );
};

export default HumanBody;