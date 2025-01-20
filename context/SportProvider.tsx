"use client";
import React, { createContext, useContext, useState } from "react";

type Sport = "hiking" | "cycling";

interface SportContextValue {
    sport: Sport;
    setSport: (sport: Sport) => void;
}

const SportContext = createContext<SportContextValue | undefined>(undefined);

export function SportProvider({ children }: { children: React.ReactNode }) {
    const [sport, setSport] = useState<Sport>("hiking"); // 기본값 "등산"

    return (
        <SportContext.Provider value={{ sport, setSport }}>
            {children}
        </SportContext.Provider>
    );
}

export function useSport() {
    const context = useContext(SportContext);
    if (!context) {
        throw new Error("useSport 훅은 SportProvider 안에서만 사용 가능합니다.");
    }
    return context;
}