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
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Preview */}
        <div className="relative bg-gradient-to-br from-stone-50 to-stone-100 p-8 flex items-center justify-center min-h-64">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <ShapeSVG shape={shape} material={material} size={180} />
          </motion.div>
          {/* Quick view badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white/90 backdrop-blur-sm text-xs px-3 py-1 rounded-full font-medium text-gray-700">
              Quick View
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
            {getShapeDisplayName(shape)}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Classic elegance, personalized with your precious memories.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-serif font-semibold text-amber-700">
                {formatPrice(price)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Starting from</p>
            </div>
            <Link href={`/charms/${shape}`}>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
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