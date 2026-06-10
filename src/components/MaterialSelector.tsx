'use client';

import { CharmMaterial } from '@/types';
import { getMaterialDisplayName, getMaterialColor } from '@/lib/charms';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface MaterialSelectorProps {
  selected: CharmMaterial;
  onChange: (material: CharmMaterial) => void;
  className?: string;
}

const MaterialSelector: React.FC<MaterialSelectorProps> = ({ selected, onChange, className = '' }) => {
  const materials: CharmMaterial[] = ['silver', 'gold', 'rose-gold'];

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-serif text-lg font-semibold text-gray-900">Material</h3>
      <div className="grid grid-cols-3 gap-3">
        {materials.map((material) => {
          const isSelected = selected === material;
          return (
            <motion.button
              key={material}
              onClick={() => onChange(material)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-amber-600 bg-amber-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              {/* Color swatch */}
              <div
                className="w-12 h-12 rounded-full mx-auto mb-2 shadow-inner"
                style={{
                  background: `linear-gradient(135deg, ${getMaterialColor(material)} 0%, ${getMaterialColor(material)}dd 100%)`,
                }}
              />
              {/* Name */}
              <p className="text-sm font-medium text-gray-900 text-center mb-1">
                {getMaterialDisplayName(material).split(' ')[0]}
              </p>
              <p className="text-xs text-gray-500 text-center">
                {getMaterialDisplayName(material).split(' ').slice(1).join(' ')}
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

export default MaterialSelector;