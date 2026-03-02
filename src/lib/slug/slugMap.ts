import { resolveArticlePage } from "./resolveArticlePage";
import { resolveProductPage } from "./resolveProductPage";
import { resolveJobPage } from "./resolveJobPage";
import { resolveDesignerPage } from "./resolveDesignerPage";

export type SlugResult =
    | ReturnType<typeof resolveArticlePage>
    | ReturnType<typeof resolveProductPage>
    | ReturnType<typeof resolveJobPage>
    | ReturnType<typeof resolveDesignerPage>;

export function findBySlug(slug?: string): SlugResult | null {
    
    if (!slug || slug.trim() === '') {
        return null;
    }    
    

    // PRODUCT
    const product = resolveProductPage(slug);
    if (product) return product;

    // ARTICLE
    const article = resolveArticlePage(slug);
    if (article) return article;

    // Job
    const job = resolveJobPage(slug);
    if (job) return job;

    // Designer Tool
    const designer = resolveDesignerPage(slug);
    if (designer) return designer;

    // 404
    return null;
}