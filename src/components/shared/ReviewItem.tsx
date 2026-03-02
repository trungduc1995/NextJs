import { formatDate } from "@/lib/utils";

export default function ReviewItem({ item }: any) {

    return (
        <div className="last:border-0 border-b border-[#DDDDDD] py-5">
            <div className="flex items-center gap-2 mb-2">
                <b className="font-600 capitalize">
                    {item.user_name.split(' -')[0]}
                </b>
                <i className="bxr bxs-radio-circle text-[7px] text-[#6B7280]" />
                <span className="text-[#6B7280]"> {formatDate(item.post_time)} </span>
            </div>

            <div className="flex flex-wrap gap-3">
                <i className={`star star-${item.rate} scale-[0.8] ml-[-7px]`} />
                <div className="w-[calc(100%-98px)]"> {item.content} </div>
            </div>
        </div>
    )
}