'use client';

import { motion } from 'framer-motion';
import { CharmDesign } from '@/types';
import ShapeSVG from './ShapeSVG';

interface CharmPreviewProps {
  design: CharmDesign;
  size?: number;
  showControls?: boolean;
  showImage?: boolean;
  className?: string;
}

const CharmPreview: React.FC<CharmPreviewProps> = ({
  design,
  size = 300,
  showControls = false,
  showImage = true,
  className = ''
}) => {
  const { shape, material, imageData, imageSettings } = design;

  const shapeMaskPath = (() => {
    switch (shape) {
      case 'circle':
        return `M ${size / 2} ${0} A ${size / 2 - 20} ${size / 2 - 20} 0 1 1 ${size / 2} ${size - 0} A ${size / 2 - 20} ${size / 2 - 20} 0 1 1 ${size / 2} ${0} Z`;
      case 'square':
        const cornerRadius = size * 0.08;
        return `M ${20 + cornerRadius} ${20}
          L ${size - 20 - cornerRadius} ${20}
          Q ${size - 20} ${20} ${size - 20} ${20 + cornerRadius}
          L ${size - 20} ${size - 20 - cornerRadius}
          Q ${size - 20} ${size - 20} ${size - 20 - cornerRadius} ${size - 20}
          L ${20 + cornerRadius} ${size - 20}
          Q ${20} ${size - 20} ${20} ${size - 20 - cornerRadius}
          L ${20} ${20 + cornerRadius}
          Q ${20} ${20} ${20 + cornerRadius} ${20} Z`;
    
      default:
        return '';
    }
  })();

  return (
    <div className={`relative ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="drop-shadow-2xl">
        <defs>
          <mask id={`charm-mask-${design.id}`}>
            <rect width={size} height={size} fill="white" />
            <path d={shapeMaskPath} fill="black" />
          </mask>
          <clipPath id={`charm-clip-${design.id}`}>
            <path d={shapeMaskPath} />
          </clipPath>
        </defs>

        {/* Metal border frame */}
        <ShapeSVG shape={shape} material={material} size={size} />

        {/* Image content */}
        {showImage && imageData && (
          <g
            mask={`url(#charm-mask-${design.id})`}
            transform={`translate(${size / 2}, ${size / 2}) rotate(${imageSettings.rotation}) scale(${imageSettings.scale}) translate(${-size / 2 + imageSettings.x}, ${-size / 2 + imageSettings.y})`}
          >
            <image
              href={imageData}
              x={0}
              y={0}
              width={size}
              height={size}
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        )}

        {/* Inner highlight overlay */}
        {showImage && imageData && (
          <g mask={`url(#charm-mask-${design.id})`}>
            <ellipse
              cx={size * 0.25}
              cy={size * 0.25}
              rx={size * 0.4}
              ry={size * 0.4}
              fill="url(#shine-overlay)"
              opacity="0.15"
            />
            <defs>
              <radialGradient id="shine-overlay">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </g>
        )}
      </svg>
    </div>
  );
};

export default CharmPreview;