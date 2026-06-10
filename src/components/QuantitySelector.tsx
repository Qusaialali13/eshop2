'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const QUANTITIES = [1, 3, 6, 12, 24] as const;

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {QUANTITIES.map((qty) => (
        <motion.button
          key={qty}
          onClick={() => onChange(qty)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
            value === qty
              ? 'scale-105 shadow-lg'
              : 'hover:scale-102'
          }`}
          style={{
            backgroundColor: value === qty ? '#a48355' : '#f4f1e2',
            color: value === qty ? '#FFFFFF' : '#0e0a0e',
            border: value === qty ? 'none' : '2px solid #e8d0b4',
          }}
        >
          {qty}
        </motion.button>
      ))}
    </div>
  );
};

export default QuantitySelector;