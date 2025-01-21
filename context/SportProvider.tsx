"use client";
import React, {createContext, useContext, useState, useEffect} from "react";


interface SportContextValue {
    sport: string;
    setSport: (sport: string) => void;
}

const SportContext = createContext<SportContextValue | undefined>(undefined);

export function SportProvider({children}: { children: React.ReactNode }) {
    const [sport, setSport] = useState<string>(() => {
        const path = window.location.pathname.split('/')[1];
        if (path === "hiking") return "hiking";
        if (path === "cycling") return "cycling";
        return "home";
    });

    return (
        <SportContext.Provider value={{sport, setSport}}>
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