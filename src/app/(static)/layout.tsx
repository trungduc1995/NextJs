import type { ReactNode } from 'react';
import LayoutTypeSetter from "@/components/layout/LayoutTypeSetter";

import '@/styles/static_page.css';
import '@/styles/tuyen_dung.css';

export default function StaticLayout({ children }: { children: ReactNode }) {

    return (
        <>  
            <LayoutTypeSetter layout="static">
                {children}
            </LayoutTypeSetter>
        </>
    );
}