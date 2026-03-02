import { DesignerToolDetail } from "@/data/designer-tool/Detail";

export function resolveDesignerPage(slug: string) {    
    
    const data = DesignerToolDetail.find(
        (item) => item.item_info.url_index === slug
    );

    if (!data) return null;
    
    return {
        type: "designer_detail",
        data,
    };
}
