'use client';

import { ReactNode } from 'react';
import { useTooltip } from '../../hooks/useTooltip';

export default function TooltipProvider({
    children,
}: {
    children: ReactNode;
}) {
    useTooltip();

    return (
        <>
            {children}
        </>
    );
}
