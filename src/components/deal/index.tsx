'use client';
import { dealList } from "@/data/deals"

import { useMemo } from "react";
import { usePagination } from "@/hooks/usePagination";
import ButtonShowMore from "@/components/shared/ProductShowMore";
import DealItemType2 from "@/components/deal/DealItemType2"


export default function DealPage() {

    const data = useMemo(() => {
        return dealList.flatMap((item: any) => item.list);
    }, []);

    const {
        currentData,
        hasMore,
        loadMore,
        total
    } = usePagination(data);

    return (
        <div className="deal-page container">
            <div className="text-center mb-4">
                <img src="https://hoanghapccdn.com/media/lib/09-07-2024/hoanghapc-deal-hot.jpg" alt="DEAL" width={1600} height={490} className="deal-featured-image" style={{ width: '100%', borderRadius: 12 }} />
            </div>


            <div className="product-holder grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-8 mb-6 relative min-h-[300px]">
                {currentData.map((item: any) => (
                    <DealItemType2 key={item.id} item={item} />
                ))}
            </div>

            {hasMore &&
                <ButtonShowMore
                    onClick={loadMore}
                    displayCount={currentData.length}
                    total={total}
                />
            }
        </div>

    )
}