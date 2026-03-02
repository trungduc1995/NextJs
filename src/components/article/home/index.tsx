'use client';
import Link from "next/link";
import { useEffect } from 'react';
import { articleList } from "@/data/articles";
import { categories } from "@/data/categories";
import useScrollSpy from "@/hooks/useScrollSpy";

import TopArticleList from "./TopArticleList";
import ArticleCategories from "./ArticleCategories";
import Video from "./Video"
import Tiktok from "./Tiktok";

export default function ArticleHome() {
    const {
        article,
        video 
    } = categories.article.all_category;

    const top_article_list = articleList
                            .flatMap(item => item.list)
                            .filter(item => item.is_featured == 1)
                            .slice(0, 10);

    useEffect(() => {
        document.body.style.background = '#F5F8FF';
    }, []);

    useScrollSpy({
        menuSelector: '.js-category-tab',
        offsetTop: 250,
        scrollOffset: 120,
    });

    return (
        <>
            <h1 className="absolute top-[-999px] z-[-1]"> tin tức </h1>

            <div className="article-page static">
                {top_article_list.length > 0 &&
                    <TopArticleList item={top_article_list} />
                }

                <div className="article-categories-group bg-[#F5F8FF] sticky top-[68px] lg:top-[76px] left-0 right-0 z-[2] pt-5">
                    <div className="container flex justify-between relative overflow-auto whitespace-nowrap uppercase font-500 leading-[18px] text-[#828282] gap-5 lg:gap-1 no-scroll border-b border-[#C5CBD8]">
                        {categories.article.all_category.article.map((item:any) => (
                            <Link className="js-category-tab"
                                href={`#js-category-${item.id}`}
                                key={item.id}                                
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    {article.map((item: any) =>{                        
                        const data = articleList.find(i => i.id === item.id)?.list || [];

                        return <ArticleCategories
                                    key={item.id}
                                    item={item}
                                    data={data}
                                />
                    })}
                </div>

                <div className="container">
                    {video.length > 0 &&
                        <Video item={video} />
                    }

                    <Tiktok />
                </div>
            </div>
        </>

    )
}