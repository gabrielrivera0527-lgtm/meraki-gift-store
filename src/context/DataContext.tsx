
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product, Testimonial } from '../../types';

interface DataContextType {
    products: Product[];
    testimonials: Testimonial[];
    loading: boolean;
    error: string | null;
}

const defaultContext: DataContextType = {
    products: [],
    testimonials: [],
    loading: true,
    error: null,
};

export const DataContext = createContext<DataContextType>(defaultContext);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/db.json');
                if (!response.ok) {
                    throw new Error('Failed to load data');
                }
                const data = await response.json();
                setProducts(data.products || []);
                setTestimonials(data.testimonials || []);
                setError(null);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Error al cargar datos. Por favor intenta más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ products, testimonials, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};
