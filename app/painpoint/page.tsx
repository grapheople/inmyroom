'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PainPointGroup } from './_components/types';
import PainPointModal from './_components/PainPointModal';
import Box from "@mui/material/Box";

const painPointGroups: PainPointGroup[] = [
    {
        "id": "head",
        "name": "머리",
        "x": "50%",
        "y": "5%",
        "painPoints": [
            {
                "id": "headache",
                "name": "머리 통증",
                "causeAndSolution": [
                    {
                        "cause": "헬멧 무게로 인한 목·어깨 근육 긴장",
                        "solution": "가벼운 헬멧 사용 및 스트랩 압박 조절"
                    },
                    {
                        "cause": "과도하게 숙인 자세로 머리와 경추 정렬이 틀어짐",
                        "solution": "수시로 수분 및 탄수화물 보충"
                    },
                    {
                        "cause": "라이딩 중 탈수 또는 저혈당 상태",
                        "solution": "목·어깨 스트레칭을 자주 실시"
                    }
                ]
            }
        ]
    },
    {
        "id": "neck",
        "name": "목(경추)",
        "x": "50%",
        "y": "15%",
        "painPoints": [
            {
                "id": "neck",
                "name": "목·경추 통증",
                "causeAndSolution": [
                    {
                        "cause": "핸들바가 너무 낮아 목이 과도하게 뒤로 젖혀짐",
                        "solution": "핸들바 높이를 조절해 허리·목 무리 최소화"
                    },
                    {
                        "cause": "장시간 전방 주시로 인한 목 근육 피로",
                        "solution": "주기적으로 목·어깨 돌리기(스트레칭)"
                    },
                    {
                        "cause": "코어·상체 근력 부족으로 승모근에만 하중 집중",
                        "solution": "승모근·목 주변 근력 강화(가벼운 덤벨 슈러그 등)"
                    }
                ]
            }
        ]
    },
    {
        "id": "shoulder",
        "name": "어깨",
        "x": "30%",
        "y": "20%",
        "painPoints": [
            {
                "id": "shoulder",
                "name": "어깨 통증",
                "causeAndSolution": [
                    {
                        "cause": "과도하게 숙인 자세로 어깨 근육 긴장",
                        "solution": "핸들바 높이·폭·각도 재조정 (어깨 부담 최소화)"
                    },
                    {
                        "cause": "핸들바 그립·각도가 체형에 맞지 않아 어깨에 부담",
                        "solution": "회전근개 스트레칭 및 가벼운 어깨 강화 운동"
                    },
                    {
                        "cause": "팔·어깨 근력이 약해 쉽게 피로 누적",
                        "solution": "라이딩 중간에 잠깐씩 일어서거나 팔 돌리기"
                    },
                    {
                        "cause": "한쪽으로 비틀어진 자세 유지 혹은 체중 쏠림",
                        "solution": "주기적으로 어깨 스트레칭으로 근육 긴장 완화"
                    }
                ]
            }
        ]
    },
    {
        "id": "upper-back",
        "name": "상부 등(흉추)",
        "x": "60%",
        "y": "23%",
        "painPoints": [
            {
                "id": "upper-back",
                "name": "등(흉추) 통증",
                "causeAndSolution": [
                    {
                        "cause": "등을 장시간 굽힌 채 고정하여 근육 경직",
                        "solution": "수시로 등 스트레칭(가슴 열기, 흉추 롤링 등)"
                    },
                    {
                        "cause": "호흡이 얕아지면서 상체 전반 피로 증가",
                        "solution": "어깨·등 근력 강화(능형근, 승모근 운동)"
                    },
                    {
                        "cause": "코어·등 근력 부족으로 자세 유지 어려움",
                        "solution": "라이딩 자세 교정(어깨 내리고, 등을 덜 구부리기)"
                    }
                ]
            }
        ]
    },
    {
        "id": "lower-back",
        "name": "허리(요추)",
        "x": "50%",
        "y": "45%",
        "painPoints": [
            {
                "id": "lower-back",
                "name": "허리(요추) 통증",
                "causeAndSolution": [
                    {
                        "cause": "안장·핸들바 간 거리(리치)가 과도하여 허리 과신전",
                        "solution": "전문 샵에서 피팅받아 안장 높이/리치 최적화"
                    },
                    {
                        "cause": "코어 근력 부족으로 척추 지지 불안정",
                        "solution": "복근·척추기립근 강화 (플랭크, 백 익스텐션 등)"
                    },
                    {
                        "cause": "장시간 동일 자세 유지로 근육 피로 누적",
                        "solution": "중간중간 허리를 펴거나 댄싱 자세로 긴장 완화"
                    }
                ]
            }
        ]
    },
    {
        "id": "pelvis",
        "name": "골반(장요근, 둔근)",
        "x": "65%",
        "y": "50%",
        "painPoints": [
            {
                "id": "pelvis",
                "name": "골반·장요근 통증",
                "causeAndSolution": [
                    {
                        "cause": "안장 높이/각도가 맞지 않아 페달링 각도 부자연스러움",
                        "solution": "안장 세팅 재조정 (전후/높이 적절히)"
                    },
                    {
                        "cause": "장요근이 짧아져 골반이 당겨지는 현상",
                        "solution": "장요근 스트레칭 (런지, 하프 니링 등)"
                    },
                    {
                        "cause": "둔근 약화로 골반이 안정적이지 않음",
                        "solution": "둔근 강화 운동 (힙 쓰러스트, 스쿼트 등)"
                    }
                ]
            }
        ]
    },
    {
        "id": "buttock",
        "name": "엉덩이(좌골)",
        "x": "38%",
        "y": "50%",
        "painPoints": [
            {
                "id": "buttock",
                "name": "좌골 부위 통증",
                "causeAndSolution": [
                    {
                        "cause": "안장 폭이 좌골 간격에 맞지 않음",
                        "solution": "좌골 폭 측정 후 적합한 안장 선택"
                    },
                    {
                        "cause": "안장 각도가 과도하게 앞/뒤로 기울어져 압박",
                        "solution": "안장 각도 수평에 가깝게 조정"
                    },
                    {
                        "cause": "장시간 라이딩으로 좌골부 지속 자극",
                        "solution": "패드가 좋은 빕숏 착용, 1~2시간 간격으로 일어서 휴식"
                    }
                ]
            }
        ]
    },
    {
        "id": "thighs",
        "name": "허벅지(대퇴)",
        "x": "65%",
        "y": "60%",
        "painPoints": [
            {
                "id": "thighs",
                "name": "대퇴사두근·햄스트링 통증",
                "causeAndSolution": [
                    {
                        "cause": "너무 무거운 기어로 페달링하여 근육 피로 증가",
                        "solution": "적당한 기어 사용(케이던스 80~100rpm 권장)"
                    },
                    {
                        "cause": "대퇴 전면·후면 근육이 균형 잡히지 않음",
                        "solution": "전후면 근력 균형(스쿼트, 런지, 레그컬, 레그익스텐션)"
                    },
                    {
                        "cause": "장시간 고강도 라이딩으로 근육 과부하",
                        "solution": "라이딩 전·후 스트레칭(특히 햄스트링)"
                    }
                ]
            }
        ]
    },
    {
        "id": "knee",
        "name": "무릎",
        "x": "35%",
        "y": "76%",
        "painPoints": [
            {
                "id": "knee",
                "name": "무릎 통증",
                "causeAndSolution": [
                    {
                        "cause": "안장 높이가 맞지 않아 무릎 굴곡 과다",
                        "solution": "페달 최하점에서 무릎이 약 25~35도 굽혀지도록 세팅"
                    },
                    {
                        "cause": "무거운 기어 사용으로 무릎 연골 압박",
                        "solution": "가벼운 기어로 페달 회전수(케이던스) 높이기"
                    },
                    {
                        "cause": "클릿 세팅 불량으로 무릎 축이 어긋남",
                        "solution": "클릿 위치를 발볼 중앙에 맞추고 무릎 정렬 확인"
                    },
                    {
                        "cause": "체중이 한쪽 다리에 쏠리는 비대칭 페달링",
                        "solution": "자전거 세팅 점검으로 페달링 축 맞추기"
                    },
                    {
                        "cause": "대퇴사두근, 햄스트링 근력 불균형",
                        "solution": "대퇴·햄스트링 근력 강화 (스쿼트, 런지 등)"
                    },
                    {
                        "cause": "장시간 라이딩으로 무릎 주변 조직 피로 누적",
                        "solution": "무릎 통증 시 즉시 휴식 및 스트레칭"
                    }
                ]
            }
        ]
    },
    {
        "id": "calf",
        "name": "종아리",
        "x": "64%",
        "y": "80%",
        "painPoints": [
            {
                "id": "calf",
                "name": "종아리 통증",
                "causeAndSolution": [
                    {
                        "cause": "페달링 시 발끝으로만 미는 습관",
                        "solution": "발 전체로 페달링하도록 교정"
                    },
                    {
                        "cause": "과도한 무거운 기어로 종아리에 무리",
                        "solution": "가벼운 기어 사용해 케이던스 높이기"
                    },
                    {
                        "cause": "종아리 근육(비복근, 가자미근) 유연성 부족",
                        "solution": "라이딩 후 종아리 스트레칭, 폼롤러 활용"
                    },
                    {
                        "cause": "신발·클릿 세팅이 맞지 않아 한쪽에 과부하",
                        "solution": "클릿 위치 조절 후 재점검"
                    },
                    {
                        "cause": "오랜 라이딩으로 근육 경직",
                        "solution": "충분한 휴식과 종아리 마사지"
                    }
                ]
            }
        ]
    },
    {
        "id": "ankle-foot",
        "name": "발목·발",
        "x": "35%",
        "y": "95%",
        "painPoints": [
            {
                "id": "ankle-foot",
                "name": "발목·발 통증",
                "causeAndSolution": [
                    {
                        "cause": "클릿 슈즈 세팅 불량으로 발목이 비틀림",
                        "solution": "클릿 위치를 발볼 중앙에 맞춰 틀어지지 않게 조정"
                    },
                    {
                        "cause": "신발 사이즈가 맞지 않아 발바닥 압박",
                        "solution": "본인 발 형태에 맞는 인솔, 적절한 신발 사이즈 선택"
                    },
                    {
                        "cause": "발목 과도한 굴곡으로 족저근막 자극",
                        "solution": "중간중간 발가락 스트레칭, 발목 돌리기"
                    },
                    {
                        "cause": "장시간 라이딩으로 발바닥 피로 누적",
                        "solution": "케이던스를 높여 발목 부담 완화"
                    },
                    {
                        "cause": "무거운 기어 사용 시 발목에 부하 집중",
                        "solution": "라이딩 후 발목·발 마사지, 충분한 휴식"
                    }
                ]
            }
        ]
    }
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
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                minWidth: "150px",
                height: `calc(100vh - 64px)`,
                paddingTop: "20px",
                paddingBottom: "20px",
            }}
        >
            {/* 실제 이미지를 감싸는 컨테이너를 하나 더 두어,
      이미지 크기만큼 'position: relative' 영역을 만든다. */}
            <div
                style={{
                    position: "absolute",
                    height: "90%",
                }}
            >
                <img
                    src="/human-body.webp"
                    alt="인체 이미지"
                    style={{
                        minWidth: "150px",
                        height: "100%",     // 세로도 컨테이너에 맞춤
                        objectFit: "contain",
                        display: "block",   // 이미지 사이 빈 공간 제거
                        margin: "0 auto",   // 중앙 정렬
                    }}
                />

                {/* 포인트(동그라미) 표시 */}
                {painPointGroups.map((group) => (
                    <div
                        key={group.id}
                        onClick={() => handleClickPainPointGroup(group)}
                        style={{
                            position: "absolute",
                            left: group.x,   // 예: "50%"
                            top: group.y,    // 예: "20%"
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            border: "2px solid rgba(255, 0, 0, 0.7)",
                            backgroundColor: "rgba(255, 0, 0, 0.3)",
                            transform: "translate(-50%, -50%)",
                            cursor: "pointer",
                        }}
                    />
                ))}
            </div>

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