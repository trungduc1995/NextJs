import { formatPrice, renderSummary } from "@/lib/utils";

export default function DesignerItem({ item }: any) {
    return (
        <div className="p-item">
            <a href={item.productUrl} className="p-img">
                <img src={item.productImage.large}
                    alt={item.productName}
                    width={250}
                    height={250}
                />
            </a>

            <div className="p-text">
                <a href={item.productUrl} className="p-name">
                    <h3> {item.productName} </h3>
                </a>

                <div className="p-price-group">
                    <p className="p-price">
                        {item.price > 0
                            ? formatPrice(item.price) + 'đ'
                            : 'Liên hệ'
                        }
                    </p>

                    {Number(item.price_off) > 0 &&
                        <>
                            <del> {formatPrice(item.marketPrice)} đ </del>
                            <span className="p-discount"> -{item.price_off}% </span>
                        </>
                    }
                </div>

                {item.productSummary &&
                    <div className="p-summary">
                        {renderSummary(item.productSummary)}
                    </div>
                }
            </div>
        </div>
    )
}