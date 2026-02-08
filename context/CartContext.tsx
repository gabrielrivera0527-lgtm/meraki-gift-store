
import React, { createContext, useContext, useState, useEffect } from 'react';

// Interfaces
export interface CartItem {
    id: string; // Unique ID for listing in cart
    productId: string; // ID referencing the product (base or catalog)
    name: string;
    price: number;
    quantity: number;
    image: string;
    isCustom: boolean;
    customDetails?: {
        baseProductId: string;
        uploadedImageName: string; // Just the name/reference, we don't store base64 in localstorage if possible, or keep it short
        designConfig: {
            scale: number;
            x: number;
            y: number;
            rotation: number;
        };
        previewImage?: string; // Optional: small preview data URL
    };
}

interface CartContextType {
    items: CartItem[];
    addItem: (item: Omit<CartItem, 'id'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    total: number;
    generateWhatsAppLink: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        try {
            const stored = localStorage.getItem('meraki_cart');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('meraki_cart', JSON.stringify(items));
    }, [items]);

    const addItem = (newItem: Omit<CartItem, 'id'>) => {
        setItems(prev => {
            // Check if same item exists (only for non-custom items)
            if (!newItem.isCustom) {
                const existing = prev.find(i => i.productId === newItem.productId && !i.isCustom);
                if (existing) {
                    return prev.map(i =>
                        i.id === existing.id
                            ? { ...i, quantity: i.quantity + newItem.quantity }
                            : i
                    );
                }
            }
            // Add new item with unique ID
            return [...prev, { ...newItem, id: Date.now().toString() + Math.random().toString(36).substr(2, 9) }];
        });
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity < 1) return;
        setItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const clearCart = () => setItems([]);

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const generateWhatsAppLink = () => {
        const phone = "50374446720";
        let message = "Hola, quiero confirmar este pedido:\n\n";

        items.forEach(item => {
            message += `• ${item.quantity}x ${item.name}`;
            if (item.isCustom) {
                message += ` (PERSONALIZADO)\n`;
                if (item.customDetails?.uploadedImageName) {
                    message += `   Diseño: ${item.customDetails.uploadedImageName}\n`;
                }
            } else {
                message += `\n`;
            }
            message += `   Precio: $${(item.price * item.quantity).toFixed(2)}\n\n`;
        });

        message += `Total: $${total.toFixed(2)}\n\n`;
        message += "Adjunto los diseños correspondientes para los productos personalizados.";

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, generateWhatsAppLink }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
