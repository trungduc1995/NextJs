import type { Metadata } from "next";

export function metadataBySlug(result: any): Metadata {

    switch (result.type) {
        case "product_category":
            return {
                title: result.data.title,
                description: stripHtml(result.data.summary),
                openGraph: {
                    type: 'website',
                    images: [
                        result.data.big_image
                    ],
                },
            };

        case "product_detail":
            return {
                title: result.data.productName,
                description: stripHtml(result.data.productSummary),
                openGraph: {
                    type: 'website',
                    images: [
                        result.data.productImage.large.replace('/250_', '/')
                    ],
                },
            };

        case "article_home":
            return {
                title: "Tin tức",
                description: "Tin tức mới nhất",
                openGraph: {
                    type: 'article',
                    images: [
                        result.data.productImage.large.replace('/250_', '/')
                    ]
                }
            };

        case "article_category":
            return {
                title: result.data.title,
                description: stripHtml(result.data.summary),
                openGraph: {
                    type: 'article',
                    images: [
                        result.data.thumbnail
                    ]
                }
            };

        case "article_detail":
            return {
                title: result.data.title,
                description: result.data.meta_description,
                openGraph: {
                    type: 'article',
                }
            };

        case "job_detail":
            return {
                title: result.data.title,
                description: result.data.meta_description,
                openGraph: {
                    type: 'article',
                }
            };

        case "designer_detail":
            return {
                title: result.data.title,
                description: result.data.meta_description,
                openGraph: {
                    type: 'website',
                }
            };

        default:
            
            return {
                title: result.meta_title || "Local PC",
                description: result.data.meta_description || "",
                openGraph: {
                    type: 'website',
                    images: [
                        '/images/logo.png'
                    ],
                }
            };
    }
}


function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, '');
}
