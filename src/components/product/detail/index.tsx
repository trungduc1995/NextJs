import parse from 'html-react-parser';
import { formatPrice } from "@/lib/utils";

import ProductImage from "./images";
import Static from "./static";
import ProductDescription from "./description"
import Comment from "./comments";
import Review from "./reviews";
import ProductSpec from "./specifications";
import Article from "./articles";
import ProductPrice from "./price";
import ProductOffer from "./offer";
import Buttons from "./buttons";
import ProductSummary from "./summary";
import ScrollToReviewButton from "./buttons/ScrollToReviewButton";
import ProductTab from "./products";

import { ReviewData } from "@/data/reviews";

export default async function ProductDetail({ slug }: any) {

    const imageList = {
        productImage    : slug.productImage, 
        imageCollection : slug.imageCollection
    }

    const priceData = {
        price       : slug.price,
        marketPrice : slug.marketPrice,
        deal_list   : slug.deal_list,
        price_off   : slug.price_off,
        sale_rules  : slug.sale_rules,
        hasVAT      : slug.hasVAT,
        warranty    : slug.warranty,
        quantity    : slug.quantity
    }

    return (
        <>
            <div className="product-detail-page container">
                <div className="pd-info-container static bg-white rounded-[24px] p-6 mb-6">
                    <h1 className="leading-8 text-[#004BA4] text-24 mb-6 font-600">
                        {slug.productName}
                    </h1>

                    <div className="gap-6 flex flex-wrap items-start leading-[18px]">
                        <div className="col-left-group w-[424px] sticky top-[90px]">
                            <ProductImage data={imageList} />
                        </div>

                        <div className="col-middle-group w-[464px]">

                            <div className="pb-3 mb-3 border-b border-[#DEE4EC] flex flex-wrap items-center gap-2">                                
                                <ScrollToReviewButton 
                                    avgRate={ReviewData.summary.avgRate}
                                    total={ReviewData.summary.total}
                                />

                                <i className="w-[1px] h-4 bg-[#DEE4EC]" />

                                <p className="m-0">
                                    Lượt xem: 
                                    <span className="text-[#004BA4] font-500">{formatPrice(slug.visit) }</span>
                                </p>

                                <i className="w-[1px] h-4 bg-[#DEE4EC]" />

                                <p className="m-0">
                                    Tình trạng: 
                                    { slug.quantity > 0
                                        ? parse('<span class="font-500 text-[#00AD4F]">Còn hàng</span>')
                                        : parse('<span class="font-500 red">Liên hệ</span>')
                                    }
                                </p>
                            </div>
                            
                            { slug.productSummary &&
                                <ProductSummary item={slug.productSummary} />
                            }

                            <ProductPrice item={priceData} />
                            
                            <ProductOffer item={slug.specialOffer}/>                            

                            <Buttons item={slug.productId} />

                            <p className="m-0 flex items-center gap-3 text-16 leading-[22px]">
                                <i className="icons icon-truck-2 !w-6" />
                                <span> Miễn phí giao hàng trên toàn quốc </span>
                            </p>
                        </div>

                        <div className="col-right-group w-[264px] sticky top-[90px]">
                            <Static />
                        </div>
                    </div>
                </div>

                <div className="pd-content-container flex flex-wrap items-baseline gap-6">
                    <div className="col-left w-[784px]">
                        { slug.productDescription && 
                            <ProductDescription 
                                name={slug.productName} 
                                description={slug.productDescription} 
                            />
                        }
                        
                        <div className="pd-comment-container bg-white mb-6 p-8 pt-6 rounded-[24px] text-16 leading-[22px]" id="js-comment-container">
                            <p className="leading-[31px] font-600 text-24 mb-4 pb-4">
                                Đánh giá và bình luận
                            </p>

                            <Review item={ReviewData}/>

                            <Comment />
                        </div>
                    </div>
                    
                    <div className="col-right w-[440px]">
                        {slug.productSpec && 
                            <ProductSpec item={slug.productSpec} />
                        }
                        
                        { slug.related['article-article'].length > 0 && 
                            <Article item={ slug.related['article-article'] } />
                        }
                    </div>
                </div>

                {/* Sản phẩm tương tự + Sản phẩm đã xem */}
                <ProductTab item={slug.related} />                
            </div>

        </>
    );
}
