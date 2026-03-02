'use client';
import parse from "html-react-parser";
import { productList } from "@/data/products/productList";
import ProductItem from "@/components/shared/ProductItem";

import { usePagination } from "@/hooks/usePagination";
import ButtonShowMore from "@/components/shared/ProductShowMore";


export default function ProductList({ id }: any) {

    const data = productList.find(item => item.id === id)?.list || [];
    
    const {
        currentData,
        hasMore,
        loadMore,
        total
    } = usePagination(data);

    return (
        <>
            {currentData.length == 0
                ? parse(`
                        <div class="text-center py-20">
                            <p class="text-20 font-700">Sản phẩm đang được cập nhật ...!</p>
                            <a href="/" class="color-main text-18"> Quay lại trang chủ </a>
                        </div>
                    `)
                : (
                    <div className="product-holder grid grid-cols-4 gap-x-5 gap-y-8 mb-6">
                        {currentData.map((item: any) => (
                            <ProductItem key={item.id} item={item} />
                        ))}
                    </div>
                )
            }            

            {hasMore &&
                <ButtonShowMore
                    onClick={loadMore}
                    displayCount={currentData.length}
                    total={total}
                />
            }
        </>
    )
}