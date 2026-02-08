
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  customDesign?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  initials: string;
}
