'use client';
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import { useShowMore } from "@/hooks/useShowMore"
import { VideoData } from "@/data/articles/Video";
import ShowMoreButton from "@/components/shared/ButtonShowMore"

export default function VideoList() {

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {});
        return () => Fancybox.destroy();
    }, []);
      
    const { displayData, hasMore, loadMore } = useShowMore(VideoData.list, 12);
 
    return (
        <>
            {displayData.length == 0
                ? (<p className="text-center font-600 uppercase mt-10 text-20"> Tin tức đang cập nhật ... ! </p>)
                : (
                    <>
                        <div className="article-holder article-video-holder grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-6 my-5">
                            {
                                displayData.map((item: any) =>
                                    <a
                                        key={item.id}
                                        href={item.video_code}
                                        data-fancybox=""
                                        className="video-item"
                                        rel="nofollow"
                                    >
                                        <span className="item-img">
                                            <img
                                                src={item.image.original}
                                                alt={item.title}
                                                width={120}
                                                height={66}
                                            />
                                            <i className="bx bxs-play-circle" />
                                        </span>

                                        <span className="item-title">
                                            {item.title}
                                        </span>
                                    </a>
                                )
                            }
                        </div>
                        
                        { hasMore && 
                            <ShowMoreButton onClick={loadMore} />
                        }
                    </>
                )}
        </>
    )
}