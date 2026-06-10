'use client';

import { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImageUploaderProps {
  onImageSelect: (imageData: string) => void;
  currentImage?: string;
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, currentImage, className = '' }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageSelect(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onImageSelect(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [onImageSelect]);

  const handleRemove = useCallback(() => {
    onImageSelect('');
  }, [onImageSelect]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        {currentImage ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            <img
              src={currentImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
            <Button
              onClick={handleRemove}
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
            >
              <X className="w-4 h-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border border-dashed rounded-xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
              isDragging
                ? 'border-amber-600 bg-amber-50'
                : 'border-amber-400 hover:border-amber-500 hover:bg-amber-50/50'
            }`}
            style={{ borderColor: isDragging ? '#a48355' : 'rgba(164, 131, 85, 0.5)', borderWidth: '1px' }}
          >
            <div className="flex flex-col items-center space-y-3 text-center p-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(164, 131, 85, 0.15)' }}
              >
                <Upload className="w-6 h-6" style={{ color: '#a48355' }} />
              </motion.div>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: '#0e0a0e' }}>
                  Drop PNG image here
                </p>
                <p className="text-xs" style={{ color: '#5f5f5f' }}>
                  or click to browse
                </p>
              </div>
              <input
                type="file"
                accept="image/png"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Upload PNG image"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageUploader;