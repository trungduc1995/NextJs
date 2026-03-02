// app/[slug]/renderBySlug.tsx
import { SLUG_CONFIG } from "./slugConfig";
import { notFound } from "next/navigation";

export function renderBySlug(result: any) {
    const config = SLUG_CONFIG[result.type];    
    
    if (!config) notFound();

    return config.render(result.data);
}
