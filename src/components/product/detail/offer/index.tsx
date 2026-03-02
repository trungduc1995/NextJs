import { formatTextList } from "@/lib/utils"
import parse from 'html-react-parser';

export default function ProductOffer({ item }: any) {
    return (
        <>
            {item.specialOffer?.all.length > 0 &&
                <div className="pd-offer-group mb-4 bg-[linear-gradient(182.15deg,#FFA480_-18.44%,#EB0C23_60.76%)] p-1 pt-2 rounded-[8px]">
                    <div className="group-title font-600 text-white flex items-center leading-[22px] mb-2 px-2 text-16">
                        <i className="icons icon-gift mr-2 animation-tada -mt-1" />
                        <span> Quà tặng và ưu đãi kèm theo </span>
                    </div>

                    <div className="rounded-[8px] bg-[#FEF2F2] px-2 py-4">
                        {parse(formatTextList(item.specialOffer.all[0].title))}
                    </div>
                </div>
            }
        </>
    )
}