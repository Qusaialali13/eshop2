'use client';

import { motion } from 'framer-motion';
import { formatPrice, calculateCharmPrice } from '@/lib/charms';
import { CharmShape, CharmMaterial, CharmSize } from '@/types';

interface PriceCalculatorProps {
  shape: CharmShape;
  material: CharmMaterial;
  size: CharmSize;
  quantity: number;
  className?: string;
}

const PriceCalculator: React.FC<PriceCalculatorProps> = ({
  shape,
  material,
  size,
  quantity,
  className = '',
}) => {
  const unitPrice = calculateCharmPrice(shape, material, size, 1);
  const totalPrice = calculateCharmPrice(shape, material, size, quantity);

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Unit Price</span>
        <span className="font-medium text-gray-900">{formatPrice(unitPrice)}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Quantity</span>
        <span className="font-medium text-gray-900">{quantity}</span>
      </div>
      <div className="pt-2 border-t border-gray-200">
        <motion.div
          key={totalPrice}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          className="flex items-center justify-between"
        >
          <span className="text-gray-900 font-serif text-lg">Total</span>
          <span className="text-gray-900 font-serif text-2xl font-bold" style={{ color: '#D4A574' }}>
            {formatPrice(totalPrice)}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default PriceCalculator;