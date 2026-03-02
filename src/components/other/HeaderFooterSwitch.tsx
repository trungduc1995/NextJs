"use client";

import { useLayout } from "@/components/layout/LayoutContext";
import Header from "./header";
import Footer from "./footer";
import OtherHeader from "./otherHeader";
import OtherFooter from "./otherFooter";

export default function HeaderFooterSwitch({ children }: any) {
    const { layout } = useLayout();

    const isStatic = layout === "static";

    return (
        <>
            {isStatic ? <OtherHeader /> : <Header />}
            {children}
            {isStatic ? <OtherFooter /> : <Footer />}
        </>
    );
}
