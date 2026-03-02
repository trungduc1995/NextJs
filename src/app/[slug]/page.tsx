import { renderBySlug } from "./renderBySlug";
import { metadataBySlug } from "./metadataBySlug";
import { findBySlug } from "@/lib/slug/slugMap";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LayoutTypeSetter from "@/components/layout/LayoutTypeSetter"
import { SLUG_CONFIG } from "./slugConfig";


export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const result = await findBySlug(slug);
    
    return metadataBySlug(result);
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
    const { slug }  = await params;
    const result    = await findBySlug(slug);
    if (!result) notFound();

    const config = SLUG_CONFIG[result.type];
    if (!config) notFound();

    return (
        <LayoutTypeSetter layout={config.layout}>
            {renderBySlug(result)}
        </LayoutTypeSetter>
    );
}