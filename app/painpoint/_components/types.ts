export interface PainPoint {
    id: string;
    name: string;
    causeAndSolution: PainCauseAndSolution[];
}

export interface PainCauseAndSolution {
    cause: string;
    solution: string;
}

export interface PainPointGroup {
    id: string;
    name: string;     // 예: '어깨', '허리' 등
    x: string;        // '50%' 같이 이미지 내에서의 위치
    y: string;        // '20%' 같이 이미지 내에서의 위치
    painPoints: PainPoint[];
}