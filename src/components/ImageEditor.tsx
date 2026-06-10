'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCw, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface ImageEditorProps {
  imageData: string;
  settings: {
    scale: number;
    rotation: number;
    x: number;
    y: number;
  };
  onChange: (settings: { scale: number; rotation: number; x: number; y: number }) => void;
  className?: string;
}

const ImageEditor: React.FC<ImageEditorProps> = ({ imageData, settings, onChange, className = '' }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - settings.x, y: e.clientY - settings.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    onChange({
      ...settings,
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (delta: number) => {
    const newScale = Math.max(0.5, Math.min(3, settings.scale + delta));
    onChange({ ...settings, scale: newScale });
  };

  const handleRotate = (delta: number) => {
    const newRotation = settings.rotation + delta;
    onChange({ ...settings, rotation: newRotation });
  };

  const handleReset = () => {
    onChange({ scale: 1, rotation: 0, x: 0, y: 0 });
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {/* Image Preview Area */}
      <div
        ref={containerRef}
        className="relative w-full aspect-square bg-stone-100 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img
          src={imageData}
          alt="Preview"
          className="w-full h-full object-contain select-none"
          style={{
            transform: `translate(${settings.x}px, ${settings.y}px) scale(${settings.scale}) rotate(${settings.rotation}deg)`,
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
          }}
          draggable={false}
        />
        {isDragging && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full border-2 border-amber-400 rounded-lg" />
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Scale Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Zoom</label>
            <span className="text-sm text-gray-500">{Math.round(settings.scale * 100)}%</span>
          </div>
          <Slider
            value={[settings.scale]}
            onValueChange={([value]) => onChange({ ...settings, scale: value })}
            min={0.5}
            max={3}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Rotation Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Rotation</label>
            <span className="text-sm text-gray-500">{settings.rotation}°</span>
          </div>
          <Slider
            value={[settings.rotation]}
            onValueChange={([value]) => onChange({ ...settings, rotation: value })}
            min={-180}
            max={180}
            step={5}
            className="w-full"
          />
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleZoom(-0.1)}
              disabled={settings.scale <= 0.5}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleZoom(0.1)}
              disabled={settings.scale >= 3}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleRotate(-15)}
            >
              <RotateCw className="w-4 h-4 -scale-x-100" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleRotate(15)}
            >
              <RotateCw className="w-4 h-4" />
            </Button>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={handleReset}
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;