import { productCategory } from "@/data/products/productCategory";
import { productList } from "@/data/products/productList";

import ProductFilter from "./filter";
import Static from "./static";
import FAQ from "./faq";
import Banner from "./banner";
import SortByCollection from "./sort";
import ProductList from "./productList";


export default function ProductCategory({ slug }: any) {
    
    const { name,
            id,
            sort_by_collection,
            static_html,
            extend
        } = productCategory.current_category;
    
    const productsFilter = productList.find(item => item.id === id)?.list || [];
    const total = productsFilter?.length;

    return(
        <div className="product-page container">
            <h1 className="text-[#004BA4] text-[32px] leading-10 mb-4 font-600">
                {name}   
            </h1>

            <div className="product-page-content flex flex-wrap items-start gap-4 mb-5">
                <div className="col-left-group w-[264px] rounded-[16px] bg-white p-4 pb-6">
                    <ProductFilter data={productCategory} />
                </div>

                <div className="col-right-group w-[968px]">
                    <div className="box-item rounded-[24px] bg-white px-6 pt-4 pb-8 mb-4">
                        <Banner id={id} />

                        <SortByCollection sort={sort_by_collection} total={total} />
                        
                        <ProductList id={id} />
                    </div>

                    {static_html && 
                        <Static data={static_html} />
                    }
                </div>
            </div>

            { extend &&
                <FAQ faq={extend.faq} />
            }
        </div>
    )
}