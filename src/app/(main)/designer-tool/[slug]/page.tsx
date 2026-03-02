import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findBySlug } from "@/lib/slug/slugMap";
import { metadataBySlug } from "@/app/[slug]/metadataBySlug";
import { SLUG_CONFIG } from "@/app/[slug]/slugConfig";
import { renderBySlug } from "@/app/[slug]/renderBySlug";
import LayoutTypeSetter from "@/components/layout/LayoutTypeSetter"


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
        <LayoutTypeSetter layout="main">
            {renderBySlug(result)}
        </LayoutTypeSetter>
    );

}