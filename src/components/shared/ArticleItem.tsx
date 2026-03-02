import Link from "next/link";
import { formatArticleTime } from "@/lib/utils";

export default function ArticleItem({ item }: any) {
    
    if (!item) return null;

    const url  = item.external_url || item.url;
    const time = item.article_time || item.lastUpdate;

    return (
        <>
            <div className="art-item" data-id={item.id}>
                <Link href={url} className="art-img" 
                    {...(item.external_url ? { 
                        target: "_blank", 
                        rel: "noopener noreferrer" 
                    } : {})}
                >
                    <img src={item.image.original} 
                         alt={item.title} 
                         width={100} 
                         height={100} />
                </Link>

                <div className="art-text">
                    <Link href={url} className="art-title" 
                        {...(item.external_url ? { 
                            target: "_blank", 
                            rel: "noopener noreferrer" 
                        } : {})}
                    >
                        <h3> {item.title} </h3>
                    </Link>

                    <div className="art-summary">
                        {item.summary}
                    </div>

                    <div className="art-time">
                        <i className='bx bx-calendar-alt text-16 text-[#A0A5AC]'></i>
                        <time> 
                            { formatArticleTime(time) }
                        </time>

                        { item.create_by_name && (
                            <>
                            <i className="w-[1.5px] h-[12px] bg-[#A0A5AC]"></i>
                            <span> {item.create_by_name} </span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}