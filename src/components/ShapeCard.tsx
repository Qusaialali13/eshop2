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
      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(212,165,116,0.3)' }}>
        {/* Preview */}
        <div className="relative p-8 flex items-center justify-center min-h-64" style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <ShapeSVG shape={shape} material={material} size={180} />
          </motion.div>
          {/* Quick view badge */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
              Quick View
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#000000' }}>
            {getShapeDisplayName(shape)}
          </h3>
          <p className="text-sm mb-4" style={{ color: '#666666' }}>
            Classic elegance, personalized with your precious memories.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-serif font-semibold" style={{ color: '#D4A574' }}>
                {formatPrice(price)}
              </p>
              <p className="text-xs mt-1" style={{ color: '#666666' }}>Starting from</p>
            </div>
            <Link href={`/charms/${shape}`}>
              <Button className="px-6 transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#D4A574', color: '#ffffff' }}>
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