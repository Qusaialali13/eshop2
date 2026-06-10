'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Check, ArrowLeft, Heart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import FavoriteButton from '@/components/FavoriteButton';
import QuantitySelector from '@/components/QuantitySelector';
import PriceCalculator from '@/components/PriceCalculator';

type BraceletColor = 'silver' | 'gold' | 'rose-gold';

interface Bracelet {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

const bracelets: Bracelet[] = [
  {
    id: 'classic-silver',
    name: 'Classic Chain',
    basePrice: 89,
    description: 'Elegant bracelet perfect for your custom charms',
  },
  {
    id: 'gold-plated',
    name: 'Gold Link',
    basePrice: 129,
    description: 'Luxurious 18K gold plated over sterling silver',
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold Charm',
    basePrice: 119,
    description: 'Romantic rose gold bracelet with charm holder',
  },
  {
    id: 'silver-bangle',
    name: 'Silver Bangle',
    basePrice: 99,
    description: 'Minimalist sterling silver bangle',
  },
  {
    id: 'gold-tennis',
    name: 'Gold Tennis',
    basePrice: 159,
    description: 'Classic tennis bracelet in gold plating',
  },
  {
    id: 'rose-pendant',
    name: 'Rose Pendant',
    basePrice: 139,
    description: 'Delicate rose gold bracelet with pendant',
  },
];

const colors: { value: BraceletColor; name: string; priceMultiplier: number; colorCode: string; icon: string }[] = [
  { value: 'silver', name: 'Sterling Silver', priceMultiplier: 1, colorCode: '#C0C0C0', icon: '🔗' },
  { value: 'gold', name: '18K Gold', priceMultiplier: 1.3, colorCode: '#FFD700', icon: '✨' },
  { value: 'rose-gold', name: '18K Rose Gold', priceMultiplier: 1.25, colorCode: '#B76E79', icon: '💫' },
];

const sizes = ['16', '17', '18', '19', '20'];

export default function BraceletCustomizer() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();

  const [selectedColor, setSelectedColor] = useState<BraceletColor>('silver');
  const [selectedSize, setSelectedSize] = useState<string>('18');
  const [quantity, setQuantity] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const bracelet = bracelets.find((b) => b.id === params.id);

  if (!bracelet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4" style={{ color: '#0e0a0e' }}>Bracelet not found</h1>
          <Button onClick={() => router.push('/bracelets')} style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
            Back to Bracelets
          </Button>
        </div>
      </div>
    );
  }

  const selectedColorData = colors.find(c => c.value === selectedColor);
  const totalPrice = Math.round(bracelet.basePrice * selectedColorData!.priceMultiplier * quantity);
  const favId = `bracelet-${bracelet.id}-${selectedColor}-${selectedSize}`;
  const isFav = isFavorite(favId);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addToCart(
      {
        id: `${bracelet.id}-${selectedColor}-size${selectedSize}`,
        shape: 'circle' as any,
        material: selectedColor,
        size: 'medium',
        imageData: '',
        imageSettings: { scale: 1, rotation: 0, x: 0, y: 0 },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      quantity
    );

    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  const handleToggleFavorite = () => {
    if (isFav) {
      removeFromFavorites(favId);
    } else {
      addToFavorites({
        id: favId,
        shape: 'circle' as any,
        material: selectedColor,
        size: 'medium',
        imageData: '',
        imageSettings: { scale: 1, rotation: 0, x: 0, y: 0 },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, #f4f1e2 0%, #FFFFFF 100%)' }}>
      <Navbar />

      {/* Full-width Header with Preview */}
      <div className="pt-20 pb-8 md:pb-12" style={{ background: 'linear-gradient(135deg, #0e0a0e 0%, #1a1518 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 transition-colors mb-6"
            style={{ color: '#e8d0b4' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a48355'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e8d0b4'}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Bracelets</span>
          </button>

          {/* Header Content */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
              style={{ color: '#f4f1e2' }}
            >
              {bracelet.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg"
              style={{ color: '#5f5f5f' }}
            >
              Customize your bracelet in 3 simple steps
            </motion.p>
          </div>

          {/* Large Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, rgba(244, 241, 226, 0.15) 0%, rgba(232, 208, 180, 0.1) 100%)', border: '1px solid rgba(232, 208, 180, 0.2)' }}>
              <div className="flex items-center justify-center">
                <motion.div
                  key={selectedColor}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-9xl"
                >
                  {selectedColorData?.icon}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Designer Controls */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Step 1: Choose Color */}
            <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e8d0b4' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#0e0a0e' }}>Select Color</h3>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <motion.button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          selectedColor === color.value ? 'scale-105' : ''
                        }`}
                        style={{
                          backgroundColor: selectedColor === color.value ? color.colorCode : '#f4f1e2',
                          color: selectedColor === color.value ? '#FFFFFF' : '#0e0a0e',
                          border: selectedColor === color.value ? 'none' : '2px solid #e8d0b4',
                        }}
                      >
                        {color.icon}
                        <div className="text-sm mt-1">{color.name}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Choose Size */}
            <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e8d0b4' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: '#0e0a0e' }}>Select Size (cm)</h3>
                  <div className="flex gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex-1 py-4 rounded-xl font-serif text-lg font-semibold transition-all duration-300 ${
                          selectedSize === size ? 'scale-105' : ''
                        }`}
                        style={{
                          backgroundColor: selectedSize === size ? '#a48355' : '#f4f1e2',
                          color: selectedSize === size ? '#FFFFFF' : '#0e0a0e',
                          border: selectedSize === size ? 'none' : '2px solid #e8d0b4',
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Quantity & Price */}
            <div className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e8d0b4' }}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}>
                  3
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="font-serif text-xl font-semibold" style={{ color: '#0e0a0e' }}>Quantity & Price</h3>
                  <div>
                    <p className="text-sm mb-3" style={{ color: '#5f5f5f' }}>Select quantity:</p>
                    <QuantitySelector value={quantity} onChange={setQuantity} />
                  </div>
                  <div className="pt-4 border-t" style={{ borderColor: '#e8d0b4' }}>
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: '#5f5f5f' }}>{selectedColorData?.name}</span>
                      <span className="font-medium" style={{ color: '#0e0a0e' }}>${Math.round(bracelet.basePrice * selectedColorData!.priceMultiplier)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span style={{ color: '#5f5f5f' }}>Quantity</span>
                      <span className="font-medium" style={{ color: '#0e0a0e' }}>{quantity}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2" style={{ borderColor: '#a48355' }}>
                      <span className="font-serif text-2xl font-bold" style={{ color: '#0e0a0e' }}>Total</span>
                      <span className="font-serif text-2xl font-bold" style={{ color: '#a48355' }}>${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex-1 h-12 text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: '#a48355', color: '#FFFFFF' }}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>

              <Button
                onClick={handleToggleFavorite}
                className="flex-1 h-12 text-base transition-all duration-300 hover:scale-105"
                variant="outline"
                style={{ borderColor: '#a48355', color: '#a48355' }}
              >
                {isFav ? '♥ Saved' : '♡ Save for Later'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="rounded-2xl p-8 max-w-md w-full text-center"
              style={{ backgroundColor: '#FFFFFF' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                <Check className="w-8 h-8" style={{ color: '#a48355' }} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2" style={{ color: '#0e0a0e' }}>
                Added to Cart!
              </h3>
              <p className="mb-6" style={{ color: '#5f5f5f' }}>
                Your {selectedColorData?.name} bracelet has been added to your cart.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1"
                  style={{ borderColor: '#a48355', color: '#a48355' }}
                >
                  Continue Shopping
                </Button>
                <Button
                  onClick={() => {
                    setShowSuccessModal(false);
                    router.push('/cart');
                  }}
                  className="flex-1 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}
                >
                  View Cart
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <MobileNavbar />
    </div>
  );
}