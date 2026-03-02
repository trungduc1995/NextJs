import type { ProductItemProps } from "../types/product"

import { 
    calculateDiscount, 
    formatTextList 
} from "../lib/utils";


export function useProductItem(item: ProductItemProps) {
    const productId     = Number(item.productId);    
    const quantity      = Number(item.quantity);
    const price         = Number(item.price);
    const marketPrice   = Number(item.marketPrice);
    const discount      = calculateDiscount(price, marketPrice);    
    const productUrl    = item.productUrl;
    const productImage  = item.productImage.large;
    const productName   = item.productName;
    const specialOffer = item.specialOffer.all[0]?.title ?? null;
    const displayOffer = specialOffer
        ? formatTextList(specialOffer)
        : null;

    const warranty      = item.warranty;
    const productSummary = item.productSummary;
    const displaySummary = formatTextList(item.productSummary)

    return {
        productId,
        productUrl,
        productImage,
        productName,
        quantity,
        price,
        marketPrice,
        discount,
        specialOffer, displayOffer,
        warranty,
        productSummary, displaySummary,
    };
}
