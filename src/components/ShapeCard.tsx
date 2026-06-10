'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CharmShape, CharmMaterial } from '@/types';
import { getShapeDisplayName, formatPrice, calculateCharmPrice } from '@/lib/charms';
import ShapeSVG from './ShapeSVG';
import { Button } from '@/components/ui/button';

interface ShapeCardProps {
  shape: CharmShape;
  basePrice?: number;
}

const ShapeCard: React.FC<ShapeCardProps> = ({ shape, basePrice }) => {
  const material: CharmMaterial = 'silver';
  const size: 'small' | 'medium' | 'large' = 'medium';
  const price = calculateCharmPrice(shape, material, size);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Preview */}
        <div className="relative p-8 flex items-center justify-center min-h-64" style={{ background: 'linear-gradient(135deg, #f4f1e2 0%, #e8d0b4 100%)' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <ShapeSVG shape={shape} material={material} size={180} />
          </motion.div>
          {/* Quick view badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#FFFFFF', color: '#0e0a0e' }}>
              Quick View
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#0e0a0e' }}>
            {getShapeDisplayName(shape)}
          </h3>
          <p className="text-sm mb-4" style={{ color: '#5f5f5f' }}>
            Classic elegance, personalized with your precious memories.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-serif font-semibold" style={{ color: '#a48355' }}>
                {formatPrice(price)}
              </p>
              <p className="text-xs mt-1" style={{ color: '#5f5f5f' }}>Starting from</p>
            </div>
            <Link href={`/charms/${shape}`}>
              <Button className="px-6 transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}>
                Customize
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ShapeCard;