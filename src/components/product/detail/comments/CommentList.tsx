
'use client';
import { useShowMore } from "@/hooks/useShowMore"
import CommentItem from "@/components/shared/CommentItem"
import ShowMoreButton from "@/components/shared/ButtonShowMore"

export default function CommentList( {item}:any ) {
    const { displayData, hasMore, loadMore } = useShowMore(item, 5);
    
    return (
        <>
        <div>
            {displayData.map((comment: any) => (
                <CommentItem item={comment} key={comment.id} />
            ))}
        </div>

        {hasMore && 
            <ShowMoreButton onClick={loadMore}/>
        }
        </>
    )
}