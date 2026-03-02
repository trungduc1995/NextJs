// components/layout/LayoutContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

export type LayoutType = "main" | "static";

const LayoutContext = createContext<{
    layout: LayoutType;
    setLayout: (v: LayoutType) => void;
}>({
    layout: "main",
    setLayout: () => { },
});

export function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [layout, setLayout] = useState<LayoutType>("main");

    return (
        <LayoutContext.Provider value={{ layout, setLayout }}>
            {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
    return useContext(LayoutContext);
}
