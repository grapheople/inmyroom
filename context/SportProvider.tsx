"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SportContextValue {
    sport: string;
    setSport: (sport: string) => void;
}

const SportContext = createContext<SportContextValue | undefined>(undefined);

export function SportProvider({ children }: { children: React.ReactNode }) {
    const [sport, setSport] = useState<string>("home");

    useEffect(() => {
        // 클라이언트 환경 확인
        if (typeof window !== "undefined") {
            const path = window.location.pathname;
            if (path.split("/").length > 1) {
                const sport = path.split("/")[1];
                if (sport === "hiking") {
                    setSport("hiking");
                } else if (sport === "cycling") {
                    setSport("cycling");
                } else {
                    setSport("home");
                }
            }
        }
    }, []);

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