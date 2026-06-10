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
            className={`relative border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 ${
              isDragging
                ? 'border-amber-500 bg-amber-50'
                : 'border-gray-300 hover:border-amber-400 hover:bg-stone-50'
            }`}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center"
              >
                <Upload className="w-8 h-8 text-amber-700" />
              </motion.div>
              <div>
                <p className="font-medium text-gray-900 mb-1">
                  Drop your PNG image here
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  or click to browse
                </p>
                <p className="text-xs text-gray-400">
                  PNG format with transparent background
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Image size: 1cm × 1cm
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