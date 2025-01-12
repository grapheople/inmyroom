import React from 'react';
import { Types } from './types';

interface PainPointModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    painPoints: Types[];
}

const PainPointModal: React.FC<PainPointModalProps> = ({
                                                           isOpen,
                                                           onClose,
                                                           title,
                                                           painPoints,
                                                       }) => {
    if (!isOpen) return null; // 모달이 닫혀있으면 렌더링하지 않음

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
            onClick={onClose} // 배경 클릭 시 모달 닫기
        >
            <div
                style={{
                    backgroundColor: '#fff',
                    padding: '2rem',
                    borderRadius: '8px',
                    width: '80%',
                    maxWidth: '500px',
                }}
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 배경 클릭 이벤트 버블링 방지
            >
                <h2 style={{ marginBottom: '1rem' }}>{title}</h2>

                {painPoints.map((point, index) => (
                    <div key={index} style={{marginBottom: '1rem'}}>
                        <p>
                            <strong>명칭 :</strong> {point.name}
                        </p>
                        <p>
                            <strong>통증 원인 :</strong> {point.cause}
                        </p>
                        <p>
                            <strong>해결 방법 :</strong> {point.solution}
                        </p>
                    </div>
                ))}

                <button onClick={onClose} style={{marginTop: '1rem'}}>
                닫기
                </button>
            </div>
        </div>
    );
};

export default PainPointModal;