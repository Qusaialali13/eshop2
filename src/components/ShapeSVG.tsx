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

      case 'heart':
        const heartPath = `M ${baseSize / 2} ${baseSize * 0.8}
          C ${baseSize / 2} ${baseSize * 0.65}, ${baseSize * 0.1} ${baseSize * 0.4}, ${baseSize * 0.1} ${baseSize * 0.25}
          C ${baseSize * 0.1} ${baseSize * 0.05}, ${baseSize * 0.35} ${baseSize * 0.05}, ${baseSize / 2} ${baseSize * 0.25}
          C ${baseSize * 0.65} ${baseSize * 0.05}, ${baseSize * 0.9} ${baseSize * 0.05}, ${baseSize * 0.9} ${baseSize * 0.25}
          C ${baseSize * 0.9} ${baseSize * 0.4}, ${baseSize / 2} ${baseSize * 0.65}, ${baseSize / 2} ${baseSize * 0.8} Z`;
        return (
          <>
            <path d={heartPath} fill="none" stroke={colors.dark} strokeWidth={8} />
            <path d={heartPath} fill="none" stroke={colors.light} strokeWidth={5} />
            <path d={heartPath} fill="none" stroke={colors.base} strokeWidth={10} transform="scale(0.92) translate(8, 8)" />
            <path d={heartPath} fill="none" stroke={colors.shimmer} strokeWidth={2} transform="scale(0.92) translate(8, 8)" />
          </>
        );

      case 'oval':
        return (
          <>
            <ellipse
              cx={baseSize / 2}
              cy={baseSize / 2}
              rx={baseSize / 2 - 6}
              ry={baseSize / 2.5 - 6}
              fill="none"
              stroke={colors.dark}
              strokeWidth={6}
            />
            <ellipse
              cx={baseSize / 2}
              cy={baseSize / 2}
              rx={baseSize / 2 - 6}
              ry={baseSize / 2.5 - 6}
              fill="none"
              stroke={colors.light}
              strokeWidth={4}
            />
            <ellipse
              cx={baseSize / 2}
              cy={baseSize / 2}
              rx={baseSize / 2 - 14}
              ry={baseSize / 2.5 - 14}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <ellipse
              cx={baseSize / 2}
              cy={baseSize / 2}
              rx={baseSize / 2 - 14}
              ry={baseSize / 2.5 - 14}
              fill="none"
              stroke={colors.shimmer}
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

      case 'star':
        const starPath = `M ${baseSize / 2} ${10}
          L ${baseSize * 0.61} ${baseSize * 0.38}
          L ${baseSize - 12} ${baseSize * 0.38}
          L ${baseSize * 0.68} ${baseSize * 0.62}
          L ${baseSize * 0.75} ${baseSize - 12}
          L ${baseSize / 2} ${baseSize * 0.75}
          L ${baseSize * 0.25} ${baseSize - 12}
          L ${baseSize * 0.32} ${baseSize * 0.62}
          L ${12} ${baseSize * 0.38}
          L ${baseSize * 0.39} ${baseSize * 0.38}
          Z`;
        return (
          <>
            <path d={starPath} fill="none" stroke={colors.dark} strokeWidth={8} />
            <path d={starPath} fill="none" stroke={colors.light} strokeWidth={5} />
            <path d={starPath} fill="none" stroke={colors.base} strokeWidth={10} transform="scale(0.9) translate(10, 10)" />
            <path d={starPath} fill="none" stroke={colors.shimmer} strokeWidth={2} transform="scale(0.9) translate(10, 10)" />
          </>
        );

      case 'flower':
        const petalCount = 6;
        const petalPaths = [];
        for (let i = 0; i < petalCount; i++) {
          const angle = (i * 60 * Math.PI) / 180;
          const cx = baseSize / 2 + Math.cos(angle) * (baseSize * 0.25);
          const cy = baseSize / 2 + Math.sin(angle) * (baseSize * 0.25);
          petalPaths.push(
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={baseSize * 0.2}
              ry={baseSize * 0.12}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
              transform={`rotate(${i * 60} ${cx} ${cy})`}
            />
          );
        }
        return (
          <>
            {petalPaths}
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize * 0.18}
              fill="none"
              stroke={colors.dark}
              strokeWidth={4}
            />
            <circle
              cx={baseSize / 2}
              cy={baseSize / 2}
              r={baseSize * 0.18}
              fill="none"
              stroke={colors.light}
              strokeWidth={2}
            />
          </>
        );

      case 'butterfly':
        return (
          <>
            {/* Left wings */}
            <path
              d={`M ${baseSize / 2} ${baseSize / 2}
                Q ${baseSize * 0.15} ${baseSize * 0.2} ${baseSize * 0.05} ${baseSize * 0.35}
                Q ${baseSize * 0.1} ${baseSize * 0.6} ${baseSize / 2} ${baseSize * 0.7}`}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <path
              d={`M ${baseSize / 2} ${baseSize * 0.55}
                Q ${baseSize * 0.25} ${baseSize * 0.75} ${baseSize * 0.15} ${baseSize * 0.9}
                Q ${baseSize * 0.3} ${baseSize * 0.85} ${baseSize / 2} ${baseSize * 0.8}`}
              fill="none"
              stroke={colors.base}
              strokeWidth={5}
            />
            {/* Right wings */}
            <path
              d={`M ${baseSize / 2} ${baseSize / 2}
                Q ${baseSize * 0.85} ${baseSize * 0.2} ${baseSize * 0.95} ${baseSize * 0.35}
                Q ${baseSize * 0.9} ${baseSize * 0.6} ${baseSize / 2} ${baseSize * 0.7}`}
              fill="none"
              stroke={colors.base}
              strokeWidth={6}
            />
            <path
              d={`M ${baseSize / 2} ${baseSize * 0.55}
                Q ${baseSize * 0.75} ${baseSize * 0.75} ${baseSize * 0.85} ${baseSize * 0.9}
                Q ${baseSize * 0.7} ${baseSize * 0.85} ${baseSize / 2} ${baseSize * 0.8}`}
              fill="none"
              stroke={colors.base}
              strokeWidth={5}
            />
            {/* Body */}
            <ellipse
              cx={baseSize / 2}
              cy={baseSize * 0.5}
              rx={4}
              ry={baseSize * 0.25}
              fill={colors.dark}
            />
            {/* Antennae */}
            <path
              d={`M ${baseSize / 2} ${baseSize * 0.25} Q ${baseSize * 0.4} ${baseSize * 0.1} ${baseSize * 0.35} ${baseSize * 0.15}`}
              fill="none"
              stroke={colors.dark}
              strokeWidth={2}
            />
            <path
              d={`M ${baseSize / 2} ${baseSize * 0.25} Q ${baseSize * 0.6} ${baseSize * 0.1} ${baseSize * 0.65} ${baseSize * 0.15}`}
              fill="none"
              stroke={colors.dark}
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