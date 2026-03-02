"use client";

import { useEffect } from "react";
import { useLayout, LayoutType } from "./LayoutContext";

export default function LayoutTypeSetter({
    layout,
    children,
}: {
    layout: LayoutType;
    children: React.ReactNode;
}) {
    const { setLayout } = useLayout();

    useEffect(() => {
        setLayout(layout);
    }, [layout, setLayout]);

    return <>{children}</>;
}
