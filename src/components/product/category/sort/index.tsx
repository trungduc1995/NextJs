'use client';
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';

export default function SortByCollection({
    sort,
    total
} : any ) {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const fullUrl = `${pathname}?${searchParams.toString()}`;

    return (
        <div className="sort-group flex flex-wrap items-center justify-between gap-4 text-16 leading-[22px] border-b border-[#DEE4EC] pb-3 mb-5">
            <p className="m-0"> Tổng {total} sản phẩm </p>

            {sort.length > 0 &&
                <div className="flex items-center gap-3">
                    <p className="m-0"> Lọc theo: </p>

                    <div className="group relative border border-[#D6DAE1] whitespace-nowrap leading-[38px] rounded-[30px] px-4 min-w-[170px]">
                        <p className="m-0 flex items-center justify-between cursor-pointer">
                            <span> Lựa chọn </span>
                            <i className="bx bx-chevron-down text-[#A0A5AC] text-18 transition-all group-hover:rotate-[-180deg]" />
                        </p>

                        <div className="absolute shadow border bg-white opacity-0 z-[-1] right-0 top-[100%] whitespace-nowrap transition group-hover:opacity-100 group-hover:z-[5] leading-[22px] p-1 border border-[#D6DAE1] rounded-[12px] w-full">
                            {
                                sort.map( (item:any) => (
                                    <Link                                         
                                        className={`${fullUrl.includes('sort=' + item.key) ? 'bg-[#F2F2F2]' : ''} block p-[6px_8px] rounded-[8px] mb-[1px] hover:bg-[#F2F2F2]`}
                                        key={item.key}
                                        href={item.url}
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}