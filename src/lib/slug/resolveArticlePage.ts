// src/lib/articlePage.ts
import { categories } from "@/data/categories";
import { articleList } from "@/data/articles";
import { ArticleDetail } from "@/data/articleDetail"

export type ArticleResult =
    | { type: "article_home"; data: any }
    | { type: "article_category"; data: any }
    | { type: "article_detail"; data: { slug: string } };

export function resolveArticlePage(slug: string): ArticleResult | null {
    const url = "/" + slug;

    // HOME
    if (url === "/tin-tuc") {
        return { 
            type: "article_home", 
            data : null
        };
    }

    // CATEGORY
    const { article, job, video } = categories.article.all_category;
    const allCategories = [...article, ...job, ...video];

    for (const parent of allCategories) {
        if (parent.url === url) {
            return {
                type: "article_category",
                data: parent
            };
        }

        for (const child of parent.children ?? []) {
            if (child.url === url) {
                return {
                    type: "article_category",
                    data: child
                };
            }
        }
    }


    // DETAIL
    const detail = articleList
                        .flatMap(article => article.list)
                        .find((a: any) => a.url === url);
    if(detail) {
        const data = {
            ...detail,
            content     : ArticleDetail.content,
            author      : ArticleDetail.author,
            image_list  : ArticleDetail.image_list,
            related     : ArticleDetail.related,
            tag_list    : ArticleDetail.tag_list,
        }

        return {
            type: "article_detail",
            data
        };
    }

    return null;
}
