// app/[slug]/slugConfig.ts
import ProductCategory from "@/components/product/category";
import ProductDetail from "@/components/product/detail";
import ArticleCategory from "@/components/article/category";
import ArticleDetail from "@/components/article/detail";
import ArticleHome from "@/components/article/home";
import JobDetail from "@/components/recruit/Detail";
import DesignerDetail from "@/components/designer-tool/Detail";

export type SlugLayout = "main" | "static";

export const SLUG_CONFIG: 
Record<string,{
    layout: SlugLayout;
    render: (data: any) => JSX.Element;
}> = 
{
    product_category: {
        layout: "main",
        render: (data) => <ProductCategory slug={data} />,
    },
    product_detail: {
        layout: "main",
        render: (data) => <ProductDetail slug={data} />,
    },
    article_home: {
        layout: "main",
        render: () => <ArticleHome />,
    },
    article_category: {
        layout: "main",
        render: (data) => <ArticleCategory slug={data} />,
    },
    article_detail: {
        layout: "main",
        render: (data) => <ArticleDetail slug={data} />,
    },
    designer_detail: {
        layout: "main",
        render: (data) => <DesignerDetail slug={data} />,
    },    
    job_detail: {
        layout: "static",
        render: (data) => <JobDetail slug={data} />,
    },
    
};
