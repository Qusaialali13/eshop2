'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoProps {
  title?: string;
  className?: string;
}

const VideoComponent: React.FC<VideoProps> = ({ title = 'Our Story', className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative rounded-3xl overflow-hidden shadow-xl ${className}`}
      style={{ backgroundColor: '#e8d0b4' }}
    >
      {/* Video Placeholder */}
      <div className="aspect-video w-full flex items-center justify-center relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#a48355" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Play Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: '#a48355' }}
        >
          <Play className="w-8 h-8 ml-1" style={{ color: '#f4f1e2' }} />
        </motion.button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
          <p className="font-serif text-xl font-semibold" style={{ color: '#f4f1e2' }}>
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoComponent;