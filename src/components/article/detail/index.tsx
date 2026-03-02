'use client';
import Link from "next/link";
import parse from "html-react-parser";
import { useEffect } from 'react';
import { formatArticleTime } from "@/lib/utils";
import ArticleItem from "@/components/shared/ArticleItem";

export default function ArticleDetail({ slug }: any) {
    useEffect(() => {
        document.body.style.background = '#ffffff';
    }, []);

    const time = slug.article_time || slug.lastUpdate;

    return (
        <>
            <link href="https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css" rel="stylesheet" />

            <div className="container !mt-8 mt-6">
                <div className="article-detail-page max-w-[824px] m-auto my-8">
                    <Link
                        href=""
                        target="_blank"
                        rel="nofollow"
                        className="table border border-[#76BBFF80] rounded-[30px] bg-[#EAF1FF] px-5 leading-8 mb-3"
                    >
                        <span className="text-[#004BA4]"> Hoàng Hà PC trên </span>
                        <span className="text-[#4285F4]">G</span>
                        <span className="text-[#EA4335]">o</span>
                        <span className="text-[#FBBC05]">o</span>
                        <span className="text-[#4285F4]">g</span>
                        <span className="text-[#34A853]">l</span>
                        <span className="text-[#EA4335]">e</span>
                        <span className="text-[#5F6368]"> News </span>
                    </Link>

                    <h1 className="font-600 text-[#004BA4] text-20 leading-6 lg:leading-10 lg:text-[32px] mb-3">
                        {slug.title}
                    </h1>

                    <div className="lg:text-[16px] lg:leading-[22px] flex items-center gap-1 mb-6 lg:mb-8">
                        <i className="icons icon-time mr-1" />
                        <span> {formatArticleTime(time)} </span>
                        <span>|</span>
                        <a href="/author/mai-van-hoc"> {slug.author} </a>
                    </div>

                    <div className="article-content lg:leading-5 lg:text-[16px] text-justify">
                        {parse(slug.content)}
                    </div>

                    <div className="flex items-center flex-wrap lg:gap-[30px] gap-5 mb-8">
                        <p className="m-0">SHARE</p>
                        <div className="flex flex-wrap gap-2">
                            <Link
                                href=""
                                rel="nofollow"
                                target="_blank"
                                className="bx bx-share w-[42px] h-[42px] !flex items-center justify-center rounded-full bg-[#0678DB] text-white text-center text-[21px] transition-all duration-300 relative bottom-0 hover:bottom-[5px]"
                            ></Link>
                            <Link
                                href=""
                                rel="nofollow"
                                target="_blank"
                                className="bxl bx-facebook w-[42px] h-[42px] !flex items-center justify-center rounded-full bg-[#0678DB] text-white text-center text-[21px] transition-all duration-300 relative bottom-0 hover:bottom-[5px]"
                            ></Link>
                            <Link
                                href=""
                                rel="nofollow"
                                target="_blank"
                                className="bxl bx-youtube w-[42px] h-[42px] !flex items-center justify-center rounded-full bg-[#0678DB] text-white text-center text-[21px] transition-all duration-300 relative bottom-0 hover:bottom-[5px]"
                            ></Link>
                            <Link
                                href=""
                                rel="nofollow"
                                target="_blank"
                                className="bxl bx-instagram-alt w-[42px] h-[42px] !flex items-center justify-center rounded-full bg-[#0678DB] text-white text-center text-[21px] transition-all duration-300 relative bottom-0 hover:bottom-[5px]"
                            ></Link>
                            <Link
                                href=""
                                rel="nofollow"
                                target="_blank"
                                className="bxl bx-tiktok w-[42px] h-[42px] !flex items-center justify-center rounded-full bg-[#0678DB] text-white text-center text-[21px] transition-all duration-300 relative bottom-0 hover:bottom-[5px]"
                            ></Link>
                        </div>
                    </div>
                </div>

                {slug.related.article &&
                    <div className="mt-10 lg:mt-12">
                        <p className="font-600 text-[32px] leading-10 mb-6 lg:text-[40px] lg:leading-12 lg:mb-8">
                            Bài viết liên quan
                        </p>

                        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
                            {
                                slug.related.article.slice(0, 4).map((item: any) =>
                                    <ArticleItem
                                        item={item}
                                        key={item.id}
                                    />
                                )}
                        </div>
                    </div>
                }
            </div>
        </>

    )
}