import { articleList } from "@/data/articles";
import ArticleItem from "@/components/shared/ArticleItem";
import Link from "next/link";

export default function Article() {
    // id: 5 - Tin tức Công nghệ
    const techNews = articleList
                        .find(article => article.id === 5)
                        ?.list.slice(0, 5) || [];
    
    // id: 19 - Chuyên trang Khuyến mãi
    const promoNews = articleList
                        .find(article => article.id === 19)
                        ?.list.slice(0, 5) || [];
    
    return(
        ( techNews.length > 0 || promoNews.length > 0) && (
        <div className="home-article-container bg-white rounded-[24px] p-6 my-8">
            {techNews && 
                <div className="mb-8 promotion-news-group">
                    <div className="flex items-center justify-between flex-wrap mb-4 leading-9 gap-4 text-16 font-600">
                        <h2 className="text-[28px] m-0 text-[#004BA4] leading-9"> Chuyên trang Khuyến mãi </h2>
                        <Link href="/tin-khuyen-mai" className="text-[#0678DB]"> Xem tất cả <i className="bx bx-chevron-right align-middle ml-[-2px] mt-[-1px] text-18"></i>  </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-6">                          
                        { 
                            techNews.map( (item:any) => (
                                <ArticleItem key={item.id} item={item} />
                            ))
                        }                     
                    </div>
                </div>
            }

            {promoNews &&
                <div>
                    <div className="flex items-center justify-between flex-wrap mb-4 leading-9 gap-4 text-16 font-600">
                        <h2 className="text-[28px] m-0 text-[#004BA4] leading-9"> Tin tức Công nghệ </h2>
                        <Link href="/tin-cong-nghe" className="text-[#0678DB]"> Xem tất cả <i className="bx bx-chevron-right align-middle ml-[-2px] mt-[-1px] text-18"></i>  </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                        { 
                            promoNews.map( (item:any) => (
                                <ArticleItem key={item.id} item={item} />
                            ))
                        }  
                    </div>
                </div>
            }
        </div>
        )
    )
}