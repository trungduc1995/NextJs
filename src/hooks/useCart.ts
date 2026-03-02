'use client';
import { toast } from 'sonner';
import { useEffect, useState, useCallback } from 'react';
import {
    getCartItems,
    addProductToCart,
    removeProductFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    CART_CHANGE_EVENT,
    type CartItem,
} from '../services/cart';
import { useRouter } from 'next/navigation';


export function useCart() {
    const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
    const router = useRouter();

    // Load cart lần đầu
    useEffect(() => {
        setCartItems(getCartItems());
    }, []);


    useEffect(() => {
        const handleCartChange = () => {
            setCartItems(getCartItems());
        };

        window.addEventListener(CART_CHANGE_EVENT, handleCartChange);

        window.addEventListener('storage', (e) => {
            if (e.key === 'cart_products') {
                handleCartChange();
            }
        });

        return () => {
            window.removeEventListener(CART_CHANGE_EVENT, handleCartChange);
            window.removeEventListener('storage', handleCartChange);
        };
    }, []);

    const refresh = useCallback(() => {
        setCartItems(getCartItems());
    }, []);

    const addToCart = useCallback((productId: number, quantity: number = 1, redirect = '') => {
        const result = addProductToCart(productId, quantity);        

        if (result?.success) {
            toast.success('Đã thêm vào giỏ hàng', {
                description: result.message,
                duration: 2500,
            });

            if (redirect) {
                router.push(redirect);
            }

            return result;
        }

        toast.error('Thêm sản phẩm thất bại', {
            description: result?.message || 'Vui lòng thử lại',
        });

        return result;
    }, []);

    const removeFromCart = useCallback((productId: number) => {
        removeProductFromCart(productId);        
    }, []);

    const increase = useCallback((productId: number) => {
        const success = increaseQuantity(productId);        
        return success;
    }, []);

    const decrease = useCallback((productId: number) => {
        const success = decreaseQuantity(productId);
        if (!success) {
            console.log('Số lượng tối thiểu: 1');
        }

        return success;
    }, []);

    const updateQty = useCallback((productId: number, cartQuantity: number) => {
        const success = updateQuantity(productId, cartQuantity);
        if (!success) {
            console.log('Số lượng phải lớn hơn hoặc bằng 1');
        }

        return success;
    }, []);

    const clear = useCallback(() => {
        clearCart();

    }, []);

    const isInCart = useCallback(
        (productId: number) => cartItems?.some(item => item.item_info.id === productId) ?? false,
        [cartItems]
    );

    const getQuantity = useCallback(
        (productId: number) => {
            return cartItems?.find(item => item.item_info.id === productId)?.in_cart.quantity ?? 0;
        },
        [cartItems]
    );

    const totalItems = cartItems?.reduce((sum, item) => sum + item.in_cart.quantity, 0) ?? 0;

    return {
        cartItems: cartItems ?? [],
        cartCount: cartItems?.length ?? 0,
        totalItems,
        loading: cartItems === null,
        addToCart,
        removeFromCart,
        increaseQuantity: increase,
        decreaseQuantity: decrease,
        updateQuantity: updateQty,
        clear,
        isInCart,
        getQuantity,
        refresh,
    };
}