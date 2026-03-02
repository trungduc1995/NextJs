'use client';
import { CartData } from '@/data/cart';

/* ================= TYPES ================= */

export interface CartItem {
    id: string;
    item_id: string;
    item_type: 'product';
    item_info: {
        id: number; // productId thật
        priceUnit: string;
        marketPrice: number;
        hasVAt: number;
        weight: number;
    };
    in_cart: {
        quantity: number;
        buyer_note: string;
        price: number;
        total_price: number;
        weight: number;
    };
}

const CART_CHANGE_EVENT = 'cart-changed';

/* ================= HELPERS ================= */

function notifyCartChange() {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event(CART_CHANGE_EVENT));
    }
}

/* ================= CORE ================= */

/**
 * 1. Lấy danh sách sản phẩm trong giỏ
 */
export function getCartItems(): CartItem[] {
    return Array.isArray((CartData as any)?.data)
        ? (CartData as any).data
        : [];
}


/**
 * 2. Kiểm tra sản phẩm đã có trong giỏ hay chưa
 */
export function isProductInCart(productId: number): boolean {
    return getCartItems().some(
        item => item.item_info?.id === productId
    );
}

/**
 * 3. Add sản phẩm vào giỏ (CHỈ CHECK – KHÔNG LƯU)
 */
export function addProductToCart(
    productId: number,
    quantity: number = 1
): { success: boolean; message: string; isNew: boolean } {

    if (isProductInCart(productId)) {
        return {
            success: false,
            message: 'Sản phẩm đã tồn tại trong giỏ hàng',
            isNew: false
        };
    }

    /**
     * 👉 await cartApi.add({ productId, quantity })
     */

    notifyCartChange();

    return {
        success: true,
        message: 'Đã thêm sản phẩm vào giỏ hàng',
        isNew: true
    };
}

/**
 * 4. Tăng số lượng
 */
export function increaseQuantity(productId: number): boolean {
    if (!isProductInCart(productId)) return false;

    /**
     * await cartApi.increase(productId)
     */
    notifyCartChange();
    return true;
}

/**
 * 5. Giảm số lượng
 */
export function decreaseQuantity(productId: number): boolean {
    const item = getCartItems().find(
        i => i.item_info.id === productId
    );

    if (!item || item.in_cart.quantity <= 1) return false;

    /**
     * await cartApi.decrease(productId)
     */
    notifyCartChange();
    return true;
}

/**
 * 6. Update số lượng trực tiếp
 */
export function updateQuantity(
    productId: number,
    quantity: number
): boolean {
    if (quantity < 1 || !isProductInCart(productId)) return false;

    /**
     * await cartApi.update(productId, quantity)
     */
    notifyCartChange();
    return true;
}

/**
 * 7. Xóa 1 sản phẩm khỏi giỏ
 */
export function removeProductFromCart(productId: number): boolean {
    if (!isProductInCart(productId)) return false;

    /**
     * await cartApi.remove(productId)
     */
    notifyCartChange();
    return true;
}

/**
 * 8. Xóa toàn bộ giỏ hàng
 */
export function clearCart(): boolean {
    if (!getCartItems().length) return false;

    /**
     * await cartApi.clear()
     */
    notifyCartChange();
    return true;
}

/**
 * 9. Lấy số lượng sản phẩm trong giỏ
 */
export function getProductQuantity(productId: number): number {
    return (
        getCartItems().find(
            item => item.item_info.id === productId
        )?.in_cart.quantity ?? 0
    );
}

/* ================= EXPORT ================= */

export { CART_CHANGE_EVENT };
