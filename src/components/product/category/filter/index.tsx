'use client';
import Link from "next/link";
import FilterItem from "./FilterItem";
import { normalizeKey } from "@/lib/utils";
import { useSearchParams } from 'next/navigation';

export default function ProductFilter({ data }: any) {

    const searchParams = useSearchParams();
    const hasFilter = searchParams.toString().length > 0;

    const {
        current_category,
        attribute_filter_list,
        brand_filter_list,
        price_filter_list
    } = data;

    const categoryList = current_category.children && current_category.children.length > 0
        ? current_category.children
        : current_category.same_parent_categories;

    return (
        <>
            <p className="uppercase font-500 text-center border text-[#0678DB] leading-10 border-[#114CDD] rounded-[8px] mb-6">
                Lọc sản phẩm
            </p>

            <div className="product-filter-group">
                {categoryList.length > 0 &&
                    <div className="filter-category-group text-18 leading-6 mb-6">
                        <p className="font-600 mb-3"> Danh mục </p>

                        <p className="leading-9 bg-[#F0F5FF] font-500 relative pl-6 mb-1">
                            <i className="bg-[#0678DB] w-1 absolute top-0 left-0 bottom-0" />
                            <span> Tất cả </span>
                        </p>

                        <div className="flex flex-col gap-1">
                            {
                                categoryList.map((category: any) => (
                                    <Link
                                        href={category.url}
                                        key={category.id}
                                        className="inline-flex items-start gap-1 py-[6px] hover:text-[#0678DB]"
                                    >
                                        <i className="bxr bx-chevrons-right leading-[inherit]"></i>
                                        <h2 className="inherit"> {category.title} </h2>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                }

                {price_filter_list && price_filter_list.length > 0 &&
                    <div className="filter-item-group leading-[22px] text-16 mb-6">
                        <p className="font-600 text-18 mb-3"> Khoảng giá </p>

                        <div className="filter-list">
                            {
                                price_filter_list.map((price: any) =>
                                    <FilterItem
                                        key={`${price.min}-${price.max}`}
                                        item={price}
                                    />
                                )
                            }
                        </div>
                    </div>
                }

                {brand_filter_list && brand_filter_list.length > 0 &&
                    <div className="filter-item-group leading-[22px] text-16 mb-6">
                        <p className="font-600 text-18 mb-3"> Thương hiệu </p>

                        <div className="filter-list">
                            {
                                brand_filter_list.map((brand: any) =>
                                    <FilterItem
                                        key={brand.id}
                                        item={brand}
                                    />
                                )
                            }
                        </div>
                    </div>
                }

                {attribute_filter_list && attribute_filter_list.length > 0 &&
                    attribute_filter_list.map((attr: any) =>
                        <div className="filter-item-group leading-[22px] text-16 mb-6"
                            key={normalizeKey(attr.name)}
                        >
                            <p className="font-600 text-18 mb-3"> {attr.name} </p>

                            <div className="filter-list">
                                {
                                    attr.value_list.map((item: any) =>
                                        <FilterItem
                                            key={item.id}
                                            item={item}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    )
                }

                {hasFilter &&
                    <Link href={current_category.request_path} className="block text-center uppercase bg-[linear-gradient(165.29deg,#259AFF_8.53%,#114CDD_93.19%)] text-white rounded-[30px] leading-5 text-16 font-500 p-[10px] mt-8">
                        Bỏ bộ lọc
                    </Link>
                }
            </div>
        </>
    )
}