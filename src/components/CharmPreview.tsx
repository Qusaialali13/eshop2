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
      case 'heart':
        return `M ${size / 2} ${size * 0.8}
          C ${size / 2} ${size * 0.65}, ${size * 0.15} ${size * 0.4}, ${size * 0.15} ${size * 0.25}
          C ${size * 0.15} ${size * 0.05}, ${size * 0.4} ${size * 0.05}, ${size / 2} ${size * 0.25}
          C ${size * 0.6} ${size * 0.05}, ${size * 0.85} ${size * 0.05}, ${size * 0.85} ${size * 0.25}
          C ${size * 0.85} ${size * 0.4}, ${size / 2} ${size * 0.65}, ${size / 2} ${size * 0.8} Z`;
      case 'oval':
        return `M ${size / 2} ${size * 0.2}
          A ${size / 2 - 20} ${size / 2.5 - 20} 0 1 1 ${size / 2} ${size * 0.8}
          A ${size / 2 - 20} ${size / 2.5 - 20} 0 1 1 ${size / 2} ${size * 0.2} Z`;
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
      case 'star':
        const outerRadius = size / 2 - 20;
        const innerRadius = size / 4;
        const points = [];
        for (let i = 0; i < 10; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (i * 36 - 90) * (Math.PI / 180);
          const x = size / 2 + radius * Math.cos(angle);
          const y = size / 2 + radius * Math.sin(angle);
          points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
        }
        return points.join(' ') + ' Z';
      case 'flower':
        const petalPaths = [];
        const cx = size / 2;
        const cy = size / 2;
        const petalCount = 6;
        const petalWidth = size * 0.25;
        const petalHeight = size * 0.35;
        
        for (let i = 0; i < petalCount; i++) {
          const angle = (i * 60) * (Math.PI / 180);
          const pcx = cx + Math.cos(angle) * petalWidth * 0.5;
          const pcy = cy + Math.sin(angle) * petalWidth * 0.5;
          petalPaths.push(`M ${pcx} ${pcy}
            m ${-petalWidth/2} ${-petalHeight/2}
            a ${petalWidth/2} ${petalHeight/2} 0 1 1 ${petalWidth} 0
            a ${petalWidth/2} ${petalHeight/2} 0 1 1 ${-petalWidth} 0`);
        }
        // Combine all petals into a single path
        return `M ${cx} ${cy} ${petalPaths.join(' ')} Z`;
      case 'butterfly':
        return `M ${size / 2} ${size / 2}
          L ${size * 0.1} ${size * 0.3}
          L ${size * 0.05} ${size * 0.5}
          L ${size * 0.25} ${size * 0.7}
          L ${size / 2} ${size * 0.75}
          L ${size * 0.75} ${size * 0.7}
          L ${size * 0.95} ${size * 0.5}
          L ${size * 0.9} ${size * 0.3}
          Z`;
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