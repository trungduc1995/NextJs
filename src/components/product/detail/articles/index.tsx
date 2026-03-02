import ArticleItem from "@/components/shared/ArticleItem"

export default function Article( {item} : any ) {
    return (
        <div className="pd-box-group bg-white mb-6 px-4 py-6 rounded-[24px]">
            <p className="text-20 font-600 mb-4"> Tin tức mới nhất </p>
            
            <div className="pd-article-holder flex flex-col gap-4">
                {
                    item.slice(0,5).map((item:any) => 
                        <ArticleItem key={item.id} item={item} />
                    )
                }
            </div>
        </div>
    )
}