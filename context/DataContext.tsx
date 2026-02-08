
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product, Testimonial } from '../constants'; // Fallback types if needed, or define here

export interface BaseProduct {
    id: string;
    name: string;
    price: number;
    baseImage: string; // Default/Front view
    maskImage?: string;
    overlayImage?: string; // Texture/Shadow layer (multiply/hard-light)
    availableColors?: string[]; // Hex codes for tinting
    views?: {
        id: string;
        name: string; // "Frente", "Espalda", etc.
        image: string;
        mask?: string;
        overlay?: string;
    }[];
    isMagicMug?: boolean; // Flag special feature
}

interface DataContextType {
    products: Product[];
    testimonials: Testimonial[];
    baseProducts: BaseProduct[];
    loading: boolean;
    error: string | null;
}

export const DataContext = createContext<DataContextType>({
    products: [],
    testimonials: [],
    baseProducts: [],
    loading: true,
    error: null,
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [baseProducts, setBaseProducts] = useState<BaseProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/db.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data.products || []);
                setTestimonials(data.testimonials || []);
                setBaseProducts(data.baseProducts || []);
                setLoading(false);
            } catch (err) {
                console.error('Error loading data:', err);
                setError('No se pudo cargar la información. Por favor intenta más tarde.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ products, testimonials, baseProducts, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};
