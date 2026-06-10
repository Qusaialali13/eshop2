'use client';

import { CharmSize } from '@/types';
import { getSizeDisplayName } from '@/lib/charms';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface SizeSelectorProps {
  selected: CharmSize;
  onChange: (size: CharmSize) => void;
  className?: string;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ selected, onChange, className = '' }) => {
  const sizes: CharmSize[] = ['small', 'medium', 'large'];

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-serif text-lg font-semibold text-gray-900">Size</h3>
      <div className="grid grid-cols-3 gap-3">
        {sizes.map((size) => {
          const isSelected = selected === size;
          const sizeLabel = getSizeDisplayName(size);
          const [name, dimension] = sizeLabel.split(' (');
          const sizeValue = dimension?.replace(')', '');

          return (
            <motion.button
              key={size}
              onClick={() => onChange(size)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              {/* Size indicator */}
              <div className="flex items-center justify-center mb-2">
                <div
                  className="rounded-full border-2 border-gray-300 bg-gray-50"
                  style={{
                    width: size === 'small' ? 24 : size === 'medium' ? 32 : 40,
                    height: size === 'small' ? 24 : size === 'medium' ? 32 : 40,
                  }}
                />
              </div>
              {/* Name */}
              <p className="text-sm font-medium text-gray-900 text-center capitalize">
                {name}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {sizeValue}
              </p>
              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 bg-amber-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;