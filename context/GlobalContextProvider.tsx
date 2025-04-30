"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface GlobalContextValue {
    sport: string;
    setSport: (sport: string) => void;
    selectedLanguage: string;
    setSelectedLanguage: (selectedLanguage: string) => void;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
    const [sport, setSport] = useState<string>("cycling");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("한국어");


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
                    setSport("cycling");
                }
            }
        }
    }, []);

    return (
        <GlobalContext.Provider value={{ sport, setSport, selectedLanguage, setSelectedLanguage }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useSport 훅은 SportProvider 안에서만 사용 가능합니다.");
    }
    return context;
}