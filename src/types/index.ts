// Charm shape types
export type CharmShape = 'circle' | 'square' | 'couple';

// Material types
export type CharmMaterial = 'silver' | 'gold' | 'rose-gold';

// Size types
export type CharmSize = 'small' | 'medium' | 'large';

// Price configuration
export interface CharmPrice {
  shape: CharmShape;
  material: CharmMaterial;
  size: CharmSize;
  basePrice: number;
  materialMultiplier: number;
  sizeMultiplier: number;
}

// Charm design interface
export interface CharmDesign {
  id: string;
  shape: CharmShape;
  material: CharmMaterial;
  size: CharmSize;
  imageData?: string;
  imageSettings: {
    scale: number;
    rotation: number;
    x: number;
    y: number;
  };
  createdAt: number;
  updatedAt: number;
}

// Cart item interface
export interface CartItem extends CharmDesign {
  quantity: number;
  totalPrice: number;
}

// Order interface (mock)
export interface MockOrder {
  id: string;
  orderNumber: string;
  date: string;
  status: 'completed' | 'processing' | 'shipped';
  items: CartItem[];
  total: number;
  shipping: number;
}

// Profile interface
export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  notifications: boolean;
  darkMode: boolean;
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

// Sample charm design interface
export interface SampleDesign {
  id: string;
  image: string;
  shape: CharmShape;
  material: CharmMaterial;
  caption: string;
}

// Newsletter subscription interface
export interface NewsletterSubscription {
  email: string;
  subscribedAt: number;
}