import React from 'react';
import { CharmMaterial } from '@/types';

interface ShapeSVGProps {
  shape: string;
  material: CharmMaterial;
  size?: number;
  className?: string;
  children?: React.ReactNode;
}

const materialColors = {
  silver: {
    light: '#E8E8E8',
    base: '#C0C0C0',
    dark: '#A0A0A0',
    shimmer: '#F5F5F5',
  },
  gold: {
    light: '#F5E6A3',
    base: '#D4AF37',
    dark: '#B8960C',
    shimmer: '#FFF4C7',
  },
  'rose-gold': {
    light: '#E8B4B8',
    base: '#B76E79',
    dark: '#9A555F',
    shimmer: '#F5D5D9',
  },
};

const ShapeSVG: React.FC<ShapeSVGProps> = ({ shape, material, size = 200, className = '', children }) => {
  const colors = materialColors[material];
  const baseSize = size;

  const renderShape = () => {
    switch (shape) {
      case 'circle':
        return (
          <>
            {/* Outer ring */}
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize / 2 - 4}
              fill="none"
              stroke={colors.dark}
              strokeWidth={6}
            />
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize / 2 - 4}
              fill="none"
              stroke={colors.light}
              strokeWidth={4}
            />
            {/* Inner ring */}
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize / 2 - 12}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize / 2 - 12}
              fill="none"
              stroke={colors.shimmer}
              strokeWidth={2}
            />
            {/* Bezel */}
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize / 2 - 18}
              fill="none"
              stroke={colors.dark}
              strokeWidth={2}
            />
          </>
        );

      case 'square':
        const cornerRadius = baseSize * 0.1;
        return (
          <>
            <rect
              x={6}
              y={6}
              width={baseSize - 12}
              height={baseSize - 12}
              rx={cornerRadius}
              ry={cornerRadius}
              fill="none"
              stroke={colors.dark}
              strokeWidth={6}
            />
            <rect
              x={6}
              y={6}
              width={baseSize - 12}
              height={baseSize - 12}
              rx={cornerRadius}
              ry={cornerRadius}
              fill="none"
              stroke={colors.light}
              strokeWidth={4}
            />
            <rect
              x={14}
              y={14}
              width={baseSize - 28}
              height={baseSize - 28}
              rx={cornerRadius * 0.7}
              ry={cornerRadius * 0.7}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <rect
              x={14}
              y={14}
              width={baseSize - 28}
              height={baseSize - 28}
              rx={cornerRadius * 0.7}
              ry={cornerRadius * 0.7}
              fill="none"
              stroke={colors.shimmer}
              strokeWidth={2}
            />
          </>
        );

      case 'couple':
        // Two interlocking circles
        return (
          <>
            {/* First circle */}
            <circle
              cx={baseSize * 0.35}
              cy={baseSize / 2}
              r={baseSize * 0.28}
              fill="none"
              stroke={colors.dark}
              strokeWidth={6}
            />
            <circle
              cx={baseSize * 0.35}
              cy={baseSize / 2}
              r={baseSize * 0.28}
              fill="none"
              stroke={colors.light}
              strokeWidth={4}
            />
            <circle
              cx={baseSize * 0.35}
              cy={baseSize / 2}
              r={baseSize * 0.24}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <circle
              cx={baseSize * 0.35}
              cy={baseSize / 2}
              r={baseSize * 0.24}
              fill="none"
              stroke={colors.shimmer}
              strokeWidth={2}
            />
            {/* Second circle */}
            <circle
              cx={baseSize * 0.65}
              cy={baseSize / 2}
              r={baseSize * 0.28}
              fill="none"
              stroke={colors.dark}
              strokeWidth={6}
            />
            <circle
              cx={baseSize * 0.65}
              cy={baseSize / 2}
              r={baseSize * 0.28}
              fill="none"
              stroke={colors.light}
              strokeWidth={4}
            />
            <circle
              cx={baseSize * 0.65}
              cy={baseSize / 2}
              r={baseSize * 0.24}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <circle
              cx={baseSize * 0.65}
              cy={baseSize / 2}
              r={baseSize * 0.24}
              fill="none"
              stroke={colors.shimmer}
              strokeWidth={2}
            />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <svg
      width={baseSize}
      height={baseSize}
      viewBox={`0 0 ${baseSize} ${baseSize}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`shine-${material}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.shimmer} stopOpacity="0.4" />
          <stop offset="50%" stopColor={colors.shimmer} stopOpacity="0" />
          <stop offset="100%" stopColor={colors.shimmer} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {renderShape()}
      {children}
    </svg>
  );
};

export default ShapeSVG;