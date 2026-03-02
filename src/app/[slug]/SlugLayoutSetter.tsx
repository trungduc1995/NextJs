'use client';

import { useEffect } from "react";
import { useLayout } from "../../components/layout/LayoutContext";

export default function SlugLayoutSetter({
    layout,
    children,
}: {
    layout: "main" | "static";
    children: React.ReactNode;
}) {
    const { setLayout } = useLayout();

    useEffect(() => {
        setLayout(layout);
    }, [layout, setLayout]);

    return <>{children}</>;
}
