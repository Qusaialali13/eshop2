import { CharmShape, CharmMaterial, CharmSize, CharmPrice } from '@/types';

// Base prices for each shape
const SHAPE_BASE_PRICES: Record<CharmShape, number> = {
  circle: 29,
  square: 30,
  couple: 45,
};

// Material multipliers
const MATERIAL_MULTIPLIERS: Record<CharmMaterial, number> = {
  silver: 1,
  gold: 1.5,
  'rose-gold': 1.6,
};

// Size multipliers
const SIZE_MULTIPLIERS: Record<CharmSize, number> = {
  small: 1,
  medium: 1.2,
  large: 1.4,
};

// Calculate price based on shape, material, and size
export const calculateCharmPrice = (
  shape: CharmShape,
  material: CharmMaterial,
  size: CharmSize,
  quantity: number = 1
): number => {
  const basePrice = SHAPE_BASE_PRICES[shape];
  const materialMultiplier = MATERIAL_MULTIPLIERS[material];
  const sizeMultiplier = SIZE_MULTIPLIERS[size];
  const totalPrice = basePrice * materialMultiplier * sizeMultiplier * quantity;
  return Math.round(totalPrice);
};

// Get material display name
export const getMaterialDisplayName = (material: CharmMaterial): string => {
  const names: Record<CharmMaterial, string> = {
    silver: 'Sterling Silver',
    gold: '18K Gold',
    'rose-gold': '18K Rose Gold',
  };
  return names[material];
};

// Get size display name
export const getSizeDisplayName = (size: CharmSize): string => {
  const names: Record<CharmSize, string> = {
    small: 'Small (20mm)',
    medium: 'Medium (25mm)',
    large: 'Large (30mm)',
  };
  return names[size];
};

// Get shape display name
export const getShapeDisplayName = (shape: CharmShape): string => {
  const names: Record<CharmShape, string> = {
    circle: 'Circle Charm',
    square: 'Square Charm',
    couple: 'Couple Charm',
  };
  return names[shape];
};

// Get material color for display
export const getMaterialColor = (material: CharmMaterial): string => {
  const colors: Record<CharmMaterial, string> = {
    silver: '#C0C0C0',
    gold: '#D4AF37',
    'rose-gold': '#B76E79',
  };
  return colors[material];
};

// Format price
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Calculate shipping estimate
export const calculateShipping = (subtotal: number): number => {
  if (subtotal >= 100) return 0;
  return 9.99;
};

// Calculate order total
export const calculateOrderTotal = (subtotal: number): number => {
  const shipping = calculateShipping(subtotal);
  return subtotal + shipping;
};

// Get charm shapes list
export const getAllShapes = (): CharmShape[] => {
  return ['circle', 'square', 'couple'];
};

// Get materials list
export const getAllMaterials = (): CharmMaterial[] => {
  return ['silver', 'gold', 'rose-gold'];
};

// Get sizes list
export const getAllSizes = (): CharmSize[] => {
  return ['small', 'medium', 'large'];
};