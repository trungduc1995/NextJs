import { calculateDiscount } from "../lib/utils";
import type { DealItemProps } from "../types/deal"

export function useDealItem(item: DealItemProps) {
    if (item.deal_time_left <= 0) return null;

    const productInfo = item.product_info;
    const price       = Number(item.price);
    const marketPrice = Number(productInfo.price);
    const discount    = calculateDiscount(price, marketPrice);

    const remain      = Number(item.quantity) - Number(item.sale_quantity);
    const saleRemainPercent = 100 - (Number(item.sale_quantity) / Number(item.quantity)) * 100;

    const specialOffer = productInfo?.specialOffer?.all?.[0]?.title ?? '';

    return {
        productInfo,
        price,
        marketPrice,
        discount,
        remain,
        saleRemainPercent,
        specialOffer,
    };
}
