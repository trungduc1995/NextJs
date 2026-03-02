'use client';

import { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';


export default function FancyboxWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        NativeFancybox.bind('[data-fancybox]', {
            // Options
        });

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return <>{children}</>;
}