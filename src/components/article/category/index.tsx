'use client';
import { useEffect } from 'react';
import ArticleList from "./article"
import VideoList from "./video";

export default function ArticleCategory({ slug }: any) {
    useEffect(() => {
        document.body.style.background = '#F5F8FF';
    }, []);

    const { type } = slug;

    return (
        <>  <h1 className="absolute top-[-999px] z-[-1]"> {slug.title} </h1>

            <div className="article-page container !mt-8 mt-6">
                {
                    type === 'article' 
                    && <ArticleList slug={slug} />
                }

                {
                    type === 'video' 
                    && <VideoList slug={slug} />
                }

            </div>
        </>

    )
}