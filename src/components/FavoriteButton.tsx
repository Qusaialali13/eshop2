'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggle,
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={className}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className={`${sizeClasses[size]} ${
          isFavorite ? 'border-red-400 bg-red-50 hover:bg-red-100' : ''
        }`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isFavorite ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <Heart className="w-5 h-5 text-red-500 fill-red-500" />
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isFavorite ? 0 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default FavoriteButton;