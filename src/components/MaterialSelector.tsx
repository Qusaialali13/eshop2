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
      <h3 className="font-serif text-lg font-semibold" style={{ color: '#0e0a0e' }}>Material</h3>
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
                  ? 'border-[#a48355]'
                  : 'border-[#e8d0b4] hover:border-[#a48355]'
              }`}
              style={{ backgroundColor: isSelected ? '#f4f1e2' : '#FFFFFF' }}
            >
              {/* Color swatch */}
              <div
                className="w-12 h-12 rounded-full mx-auto mb-2 shadow-inner"
                style={{
                  background: `linear-gradient(135deg, ${getMaterialColor(material)} 0%, ${getMaterialColor(material)}dd 100%)`,
                }}
              />
              {/* Name */}
              <p className="text-sm font-medium text-center mb-1" style={{ color: '#0e0a0e' }}>
                {getMaterialDisplayName(material).split(' ')[0]}
              </p>
              <p className="text-xs text-center" style={{ color: '#5f5f5f' }}>
                {getMaterialDisplayName(material).split(' ').slice(1).join(' ')}
              </p>
              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
                >
                  <Check className="w-3 h-3" />
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