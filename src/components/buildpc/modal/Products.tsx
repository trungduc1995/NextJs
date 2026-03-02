'use client';
import Link from "next/link";

export default function ProductItem({ item, rowId, onSelect }: any) {

    const handleSelect = () => {

        const productData = {
            id       : item.productId,
            name     : item.productName,
            url      : item.productUrl,
            price    : item.price,
            image    : item.productImage.large,
            quantity : 1,
            sku      : item.productSKU,
            warranty : item.warranty || ''
        };

        onSelect(productData);
    };


    return (
        <div className="p-item">
            <Link href={item.productUrl} className="item-img">
                <img
                    src={item.productImage.large}
                    alt={item.productName}
                    width={100}
                    height={100}
                />
            </Link>

            <div className="item-text">
                <Link href={item.productUrl} className="item-name">
                    {item.productName}
                </Link>

                {item.productSKU != 0 &&
                    <p className="item-info">
                        <span className="font-500">Mã SP: </span>
                        <span> {item.productSKU} </span>
                    </p>
                }

                {item.warranty &&
                    <p className="item-info">
                        <span className="font-500">Bảo hành: </span>
                        <span> {item.warranty} </span>
                    </p>
                }

                <p className="item-info">
                    <span className="font-500">Kho hàng: </span>
                    <span>
                        {item.quantity > 0 ? "Còn hàng" : "Hết hàng"}
                    </span>
                </p>

                <p className="p-price">
                    {item.price > 0
                        ? item.price.toLocaleString() + ' đ'
                        : "Liên hệ"
                    }
                </p>
            </div>

            <button
                onClick={handleSelect}
                className="btn-buy p-btn bx bx-plus bg-btn text-white rounded-full w-9 h-9 text-20"
            />
        </div>
    );
}