'use client';
import parse from "html-react-parser";
import { useSearchParams } from 'next/navigation';
import { productCategory } from "@/data/products/productCategory";
import { productList } from "@/data/products/productList";
import { usePagination } from "@/hooks/usePagination";
import ButtonShowMore from "@/components/shared/ProductShowMore";
import ProductFilter from "@/components/product/category/filter";
import SortByCollection from "@/components/product/category/sort";
import ProductItem from "@/components/shared/ProductItem";
import { useMemo } from "react";


export default function ProductSearch() {
    const searchParams = useSearchParams();
    const search_query = searchParams.get('q') || "";

    const totalProduct = useMemo(() => {
        return productList.flatMap((item: any) => item.list);
    }, []);

    const filterData = useMemo(() => {
        return totalProduct.filter((item: any) =>
            item.productName?.trim()
                .toLowerCase()
                .includes(search_query.trim().toLowerCase())
        );
    }, [totalProduct, search_query]);

    const {
        currentData,
        hasMore,
        loadMore,
        total
    } = usePagination(filterData);

    return (
        <div className="product-page container">
            <h1 className="text-[#004BA4] text-[32px] leading-10 mb-4 font-600">
                Tìm kiếm sản phẩm: "{search_query}"
            </h1>

            {currentData.length == 0
                ? parse(`
                    <div class="text-center py-20">
                        <p class="text-22 font-500">
                            Rất tiếc, chúng tôi không tìm thấy kết quả của "${search_query}"
                        </p>

                        <div class="text-left" style="border:solid 1px #ccc; max-width:500px; margin:auto; padding:20px;">
                            <p class="text-center"><b>Để tìm được kết quả chính xác hơn, xin vui lòng</b></p>
                            <ul>
                                <li>Kiểm tra lại chính tả của từ khóa đã nhập</li>
                                <li>Thử lại bằng từ khóa khác</li>
                                <li>Thử lại bằng các từ khóa tổng quát hơn</li>
                                <li>Thử lại bằng các từ khóa ngắn gọn hơn</li>
                            </ul>
                        </div>
                    </div>
                `) : (
                    <div className="product-page-content flex flex-wrap items-start gap-4 mb-5">
                        <div className="col-left-group w-[264px] rounded-[16px] bg-white p-4 pb-6">
                            <ProductFilter data={productCategory} />
                        </div>

                        <div className="col-right-group w-[968px]">
                            <div className="box-item rounded-[24px] bg-white px-6 pt-4 pb-8 mb-4">

                                <SortByCollection 
                                    sort={productCategory.current_category.sort_by_collection} 
                                    total={total} 
                                />

                                <div className="product-holder grid grid-cols-4 gap-x-5 gap-y-8 mb-6">
                                    {currentData.map((item: any) => (
                                        <ProductItem key={item.id} item={item} />
                                    ))}
                                </div>

                                {hasMore &&
                                    <ButtonShowMore
                                        onClick={loadMore}
                                        displayCount={currentData.length}
                                        total={total}
                                    />
                                }
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}