import Link from "next/link";
import ArticleItem from "@/components/shared/ArticleItem";

export default function ArticleCategories({ item, data }: any) {

    const firstItem = data[0];
    const itemList = data.slice(1, 5);

    return (
        <div className="article-category-container" id={`js-category-${item.id}`} key={item.id}>
            <div className="container">
                <div className="group-title flex flex-wrap items-center justify-between gap-4 mb-4 lg:mb-6">
                    <div className="flex items-center gap-2 lg:gap-3">
                        <h2 className="m-0 font-600 text-[#004BA4] text-20 leading-6 lg:leading-10 lg:text-[32px]">
                            {item.title}
                        </h2>

                        <Link href={item.url}
                            className="bx bx-chevron-right border-[1.5px] border-[#0677DB4D] rounded-full w-5 lg:w-8 h-5 lg:h-8 flex items-center justify-center text-[#0678DB] text-18 lg:text-[24px] hover:bg-[#0678DB] hover:text-white"
                        ></Link>
                    </div>

                    <div className="w-full lg:w-auto flex gap-2 leading-[30px] text-[#0678DB] font-600 text-16 overflow-auto whitespace-nowrap no-scroll">
                        {item.children.map((child: any) =>
                            <Link className="bg-[#EAF1FF] px-2 rounded-[30px] hover:bg-[#0678DB] hover:text-white"
                                href={child.url}
                                key={child.id}
                            >
                                {child.title}
                            </Link>
                        )}
                    </div>
                </div>

                {!data || data.length === 0 ?
                    (
                        <p className="text-center font-600 uppercase mt-10 text-20"> Tin tức đang cập nhật ... ! </p>
                    ) : (
                        <div className="article-category-holder grid lg:grid-cols-2 gap-5 lg:gap-8">
                            <div className="first-item">
                                <ArticleItem item={firstItem} />
                            </div>

                            <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                {itemList.map((item: any) =>
                                    <ArticleItem
                                        item={item}
                                        key={item.id}
                                    />
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}