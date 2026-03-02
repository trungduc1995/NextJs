import { Toaster } from "sonner";
import TooltipProvider from "@/components/providers/TooltipProvider";
import HeaderFooterSwitch from "@/components/other/HeaderFooterSwitch";
import { LayoutProvider } from "@/components/layout/LayoutContext";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body>
                <LayoutProvider>
                    <HeaderFooterSwitch>
                        <TooltipProvider>{children}</TooltipProvider>
                    </HeaderFooterSwitch>

                    <Toaster position="top-right" closeButton richColors />
                </LayoutProvider>
            </body>
        </html>
    );
}
