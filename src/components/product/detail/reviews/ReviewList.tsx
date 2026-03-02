'use client';
import { useShowMore } from "@/hooks/useShowMore"
import ReviewItem from "@/components/shared/ReviewItem";
import ShowMoreButton from "@/components/shared/ButtonShowMore"

export default function ReviewList({ item }: any) {
    
    const { displayData, hasMore, loadMore } = useShowMore(item, 5);
 
    return (
        <>
            {  displayData.map((item:any) => 
                <ReviewItem key={item.id} item={item} />
            )}            

            { hasMore && 
                <ShowMoreButton onClick={loadMore} />
            }
        </>
    )
}