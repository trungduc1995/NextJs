import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { VideoData } from "@/data/articles/Video";

export default function Video( {item} : any ) {
    const { total, list } = VideoData;
    const [active, setActive] = useState<number | null>(null);
    const [url, setUrl] = useState<string>("");

    // set video mặc định
    useEffect(() => {
        if (list?.length > 0) {
            setActive(list[0].id);
            setUrl(list[0].video_code);
        }
    }, [list]);

    const videoId = useMemo(() => {
        if (!url) return null;

        // https://www.youtube.com/watch?v=xxxx
        if (url.includes('v=')) {
            return url.split('v=')[1].split('&')[0];
        }

        // https://youtu.be/xxxx
        if (url.includes('youtu.be/')) {
            return url.split('youtu.be/')[1].split('?')[0];
        }

        return null;
    }, [url]);

    return (list.length > 0 &&
        <div className="article-video-container lg:flex flex-wrap gap-4 mt-16">
            <div className="lg:w-[732px] video-holder">
                {videoId && (
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allowFullScreen
                    />
                )}
            </div>

            <div className="lg:w-[calc(100%-748px)] rounded-[16px] overflow-hidden bg-[#EAF1FF]">
                <p className="group-title m-0 text-white flex items-center gap-2 lg:gap-3 font-600 p-[8px_12px] leading-[18px] lg:text-[20px] lg:leading-6 lg:p-[12px_16px] bg-[linear-gradient(180.3deg,#259AFF_-18.56%,#114CDD_100.92%)]">
                    <i className="w-[18px] h-[18px] lg:w-6 lg:h-6 lazy bg-no-repeat bg-center bg-[length:100%_100%]"
                        style={{ backgroundImage: 'url(/images/icon-playlist.png)' }}
                    />
                    <Link href={item[0].url}> Trending video </Link>
                </p>

                <div className="h-[385px] p-4 pr-1 relative">
                    <div className="h-full overflow-auto flex flex-col gap-4">
                        {list.map((item: any) =>
                            <button type="button"
                                key={item.id}
                                onClick={() => {
                                    setActive(item.id);
                                    setUrl(item.video_code)
                                }}
                                className={`video-item text-left 
                                    ${active === item.id ? 'color-main' : ''} 
                                `}
                            >
                                <span className="video-img">
                                    <img
                                        src={item.image.original}
                                        alt={item.title}
                                        width={120}
                                        height={66}
                                    />
                                </span>

                                <p className="video-title m-0">
                                    <span>{item.title}</span>
                                </p>
                            </button>
                        )}
                    </div>
                    <div className="gradient-overlay"></div>
                </div>
            </div>
        </div>
    )
}