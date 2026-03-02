import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import Filter from "./Filter";
import ProductItem from "./Products"
import Sort from "./Sort";
import Paing from "./Paging";

export default function ModalContent({
    item,
    onSave
}: any) {
    if (!item) return null;

    const {
        id,
        attribute_filter_list,
        brand_filter_list,
        price_filter_list,
        sort_by_collection,
        paging_collection,
        product_list
    } = item;

    return (
        <div className="buildpc-popup">
            <div className="popup-select">
                <div className="popup-header">
                    <p>Chọn linh kiện</p>

                    <div className="popup-search-holder">
                        <input
                            type="text"
                            defaultValue=""
                            className="input-search"
                            placeholder="Nhập từ khóa cần tìm"
                        />

                        <button className="btn-search bg-linear rounded-full" id="js-buildpc-search-btn">
                            <i className="block !w-full !h-full icons icon-search" />
                        </button>
                    </div>

                    <div className="icon-menu-filter-mobile js-mobile-filter-btn bx bx-filter">
                        <i className="fas fa-filter" />
                        <span>Lọc</span>
                    </div>

                    <button className="bx bx-x btn-close" data-fancybox-close />
                </div>

                <div className="popup-main">
                    {product_list && product_list.length > 0 ?
                        (
                            <>
                                <div className="popup-filter-group">
                                    <p className="group-titlle"> Lọc sản phẩm </p>

                                    <Filter
                                        attributeFilter={attribute_filter_list}
                                        brandFilter={brand_filter_list}
                                        priceFilter={price_filter_list}
                                    />
                                </div>

                                <div className="popup-content-group">
                                    <div className="sort-paging-group">
                                        {sort_by_collection &&
                                            <Sort item={sort_by_collection} />
                                        }

                                        {paging_collection &&
                                            <Paing item={paging_collection} />
                                        }
                                    </div>

                                    <div className="popup-product-list">
                                        {product_list.map((product: any) => (
                                            <ProductItem
                                                key={product.id}
                                                rowId={id}
                                                item={product}
                                                onSelect={(selectedProduct: any) => {
                                                    onSave(id, selectedProduct);

                                                    Fancybox.close()
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p className="capitalize font-bold mt-5 text-center w-full">Không tìm thấy sản phẩm nào</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}