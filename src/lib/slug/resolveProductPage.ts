// hoanghapc/src/lib/productPage.ts
import { categories } from "@/data/categories";
import { productList } from "@/data/products/productList";
import { productDetail } from "@/data/products/productDetail"

export type ProductResult =
    | { type: "product_category"; data: any }
    | { type: "product_detail"; data: any };

export function resolveProductPage(slug: string): ProductResult | null {
    const url = "/" + slug;

    // CATEGORY
    for (const parent of categories.product.all_category) {
        if (parent.url === url) {
            return { type: "product_category", data: parent };
        }

        for (const child of parent.children ?? []) {
            if (child.url === url) {
                return { type: "product_category", data: child };
            }
        }
    }

    // DETAIL
    const product = productList
                        .flatMap((item: any) => item.list)
                        .find((p: any) => p.productUrl === url);
    
    if (product) {
        const data = {
            ...product,
            productDescription : productDetail.productDescription,
            productSpec : productDetail.productSpec,
            related : productDetail.related
        }

        return {
            type: "product_detail",
            data
        };
    }

    return null;
}
