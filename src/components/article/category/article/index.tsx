import Link from "next/link";
import { categories } from "@/data/categories";
import { articleList } from "@/data/articles/index";
import { useShowMore } from "@/hooks/useShowMore"
import ShowMoreButton from "@/components/shared/ButtonShowMore"
import ArticleItem from "@/components/shared/ArticleItem";

export default function ArticleList({ slug }: any) {

    const { article } = categories.article.all_category;
    const categoryList = slug.children?.length > 0 ? slug.children : article

    const articleData = articleList.find((item: any) => item.id === slug.id)?.list || [];
    const { displayData, hasMore, loadMore } = useShowMore(articleData, 12);

    return (
        <>
            <div className="article-categories-group bg-[#F5F8FF] flex justify-between relative overflow-auto whitespace-nowrap uppercase font-500 leading-[18px] text-[#828282] gap-5 lg:gap-1 no-scroll border-b border-[#C5CBD8]">
                {categoryList.map((item: any) => (
                    <Link className={`${item.id === slug.id ? 'active' : ''}`}
                        href={item.url}
                        key={item.id}
                    > {item.title} </Link>
                ))}
            </div>

            {displayData.length == 0
                ? (<p className="text-center font-600 uppercase mt-10 text-20"> Tin tức đang cập nhật ... ! </p>)
                : (
                    <>
                        <div className="article-holder grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-6 my-5">
                            {displayData.map((item: any) =>
                                <ArticleItem
                                    key={item.id}
                                    item={item}
                                />
                            )}
                        </div>

                        {hasMore &&
                            <ShowMoreButton onClick={loadMore} />
                        }
                    </>
                )}
        </>
    )
}