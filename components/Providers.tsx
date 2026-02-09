"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Low Data Mode Context
interface LowDataModeContextType {
    lowDataMode: boolean;
    toggleLowDataMode: () => void;
}

const LowDataModeContext = createContext<LowDataModeContextType>({
    lowDataMode: false,
    toggleLowDataMode: () => { },
});

export function useLowDataMode() {
    return useContext(LowDataModeContext);
}

function LowDataModeProvider({ children }: { children: ReactNode }) {
    const [lowDataMode, setLowDataMode] = useState(false);

    useEffect(() => {
        // Load preference from localStorage
        const saved = localStorage.getItem("lowDataMode");
        if (saved === "true") {
            setLowDataMode(true);
        }
    }, []);

    useEffect(() => {
        // Apply/remove low-data-mode class to body
        if (lowDataMode) {
            document.body.classList.add("low-data-mode");
        } else {
            document.body.classList.remove("low-data-mode");
        }
        // Persist preference
        localStorage.setItem("lowDataMode", lowDataMode.toString());
    }, [lowDataMode]);

    const toggleLowDataMode = () => {
        setLowDataMode(prev => !prev);
    };

    return (
        <LowDataModeContext.Provider value={{ lowDataMode, toggleLowDataMode }}>
            {children}
        </LowDataModeContext.Provider>
    );
}

export function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <LowDataModeProvider>
                {children}
            </LowDataModeProvider>
        </SessionProvider>
    );
}
