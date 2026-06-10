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
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {QUANTITIES.map((qty) => (
        <motion.button
          key={qty}
          onClick={() => onChange(qty)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-2 py-2 font-semibold text-lg transition-all duration-300 relative ${
            value === qty
              ? 'scale-105'
              : 'hover:scale-105'
          }`}
          style={{
            color: value === qty ? '#a48355' : '#0e0a0e',
          }}
        >
          {qty}
          {value === qty && (
            <motion.div
              layoutId="underline"
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ backgroundColor: '#a48355' }}
              initial={false}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default QuantitySelector;