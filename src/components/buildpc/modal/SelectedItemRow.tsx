'use client';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
interface Props {
    product: any;
    rowId: number;
    onRemove: (rowId: number) => void;
    onQuantityChange: (rowId: number, quantity: number) => void;
    onEdit: (rowId: number) => void;
}

export default function SelectedItemRow({
    product,
    rowId,
    onRemove,
    onQuantityChange,
    onEdit
}: Props) {

    return (
        <div className="contain-item-drive">

            <a href={product.url} target="_blank" className="item-img">
                <img src={product.image} alt={product.name} />
            </a>

            <div className="item-text">

                <div className="item-left">
                    <a href={product.url} target="_blank" className="item-name">
                        {product.name}
                    </a>

                    <p>
                        <span className="font-500">- Kho hàng:</span>
                        {product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
                    </p>

                    <p>
                        <span className="font-500">- Bảo hành:</span>
                        {product.warranty || "—"}
                    </p>
                </div>

                <div className="item-right">

                    <div className="item-quantity-group">
                        <b>{product.price.toLocaleString()}</b>

                        <div className="flex items-center" style={{ display: "flex", gap: "10px" }}>
                            <span>x</span>

                            <input
                                type="number" 
                                className="item-quantity"
                                value={product.quantity}
                                min={1}
                                max={50}
                                onChange={(e) =>
                                    onQuantityChange(rowId, Number(e.target.value))
                                }
                            />

                            <span>=</span>
                        </div>

                        <b className="item-price">
                            {(product.price * product.quantity).toLocaleString()}
                        </b>
                    </div>

                    <div className="item-button-group">
                        <button
                            type="button"
                            className="btn-action_seclect show-popup_select bx bx-edit"                            
                            onClick={(e) => {
                                e.preventDefault();

                                onEdit(rowId);

                                Fancybox.show([
                                    {
                                        src: "#js-modal-popup",
                                        type: "inline",
                                    },
                                ]);
                            }}
                        />

                        <button
                            type="button"
                            title="Xóa"
                            className="btn-action_seclect delete_select bx bx-trash remove-item"
                            onClick={() => onRemove(rowId)}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}