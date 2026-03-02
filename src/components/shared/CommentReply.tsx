import { formatDate } from "@/lib/utils";
import parse from 'html-react-parser';

export default function CommentReply({ item }: any) {
    return (
        <div className="first:border-0 flex items-start gap-3 p-3 border-t border-[#D1D5DB]">
            <div className="w-10 h-10 rounded-full bg-[#9CA3AF] leading-10 text-center uppercase text-white font-600 overflow-hidden">
                { item.is_user_admin == 1 
                    ? parse(`<img src="images/avatar-admin.png" className="block w-full h-full"/>`)
                    : parse(`<span> ${item.user_name.substring(0,1)} </span>`)
                }
            </div>

            <div className="w-[calc(100%_-_52px)]">
                <div className="flex items-center gap-2 mb-1">
                    { item.is_user_admin == 1 
                        ? parse(`<span className="bg-[linear-gradient(70.1deg,#75798B_62.94%,#ADB5CD_100%)] text-white px-[6px] leading-[18px] rounded-[20px] font-500 text-10">Quản trị viên</span>`)
                        : parse(`<b className="capitalize"> ${item.user_name.split(' -')[0]} </b>`)
                    }
                    <i className="bxr bxs-radio-circle text-[7px] text-[#6B7280]" />
                    <span className="text-[#6B7280]"> {formatDate(item.post_time)} </span>
                </div>

                <div className="my-2" style={{ whiteSpace: "pre-line" }}> {item.content} </div>
            </div>
        </div>
    )
}