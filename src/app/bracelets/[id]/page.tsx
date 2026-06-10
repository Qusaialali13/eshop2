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

interface Bracelet {
  id: string;
  name: string;
  description: string;
  price: number;
  material: string;
  image: string;
  fullDescription: string;
}

const bracelets: Bracelet[] = [
  {
    id: 'classic-silver',
    name: 'Classic Silver Chain',
    description: 'Elegant sterling silver chain bracelet',
    price: 89,
    material: 'Sterling Silver',
    image: '🔗',
    fullDescription: 'Experience timeless elegance with our Classic Silver Chain bracelet. Crafted from premium 925 sterling silver, this piece features a sophisticated link design that transitions seamlessly from day to night. The polished finish catches the light beautifully, making it a perfect standalone piece or an ideal canvas for your favorite charms.',
  },
  {
    id: 'gold-plated',
    name: 'Gold Plated Link',
    description: 'Luxurious 18K gold plated over sterling silver',
    price: 129,
    material: '18K Gold Plated',
    image: '✨',
    fullDescription: 'Indulge in luxury with our Gold Plated Link bracelet. Featuring 18K gold plating over premium sterling silver, this bracelet radiates warmth and sophistication. Each link is meticulously crafted and polished to perfection, creating a piece that exudes elegance and complements any style.',
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold Charm',
    description: 'Romantic rose gold bracelet with charm holder',
    price: 119,
    material: '18K Rose Gold',
    image: '💫',
    fullDescription: 'Embrace romance with our Rose Gold Charm bracelet. The warm blush tones of 18K rose gold plating create a feminine and modern aesthetic. Featuring a dedicated charm holder, this bracelet allows you to personalize your jewelry collection with your most meaningful charms.',
  },
  {
    id: 'silver-bangle',
    name: 'Silver Bangle',
    description: 'Minimalist sterling silver bangle',
    price: 99,
    material: 'Sterling Silver',
    image: '⭕',
    fullDescription: 'Discover understated elegance with our Silver Bangle. This minimalist design showcases the beauty of pure 925 sterling silver in its simplest form. The smooth, polished surface offers a contemporary look that stands alone beautifully or stacks effortlessly with other bracelets.',
  },
  {
    id: 'gold-tennis',
    name: 'Gold Tennis Bracelet',
    description: 'Classic tennis bracelet in gold plating',
    price: 159,
    material: '18K Gold Plated',
    image: '💎',
    fullDescription: 'Make a statement with our Gold Tennis Bracelet. This classic design features alternating cubic zirconia stones set in 18K gold-plated links. The brilliant stones catch light from every angle, creating a dazzling effect that transforms any outfit into something extraordinary.',
  },
  {
    id: 'rose-pendant',
    name: 'Rose Gold Pendant',
    description: 'Delicate rose gold bracelet with pendant',
    price: 139,
    material: '18K Rose Gold',
    image: '🌸',
    fullDescription: 'Add a touch of elegance to your collection with our Rose Gold Pendant bracelet. The delicate chain holds an exquisite pendant that adds movement and grace to the design. Crafted in warm 18K rose gold, this piece captures the essence of modern romance and timeless beauty.',
  },
];

export default function BraceletProduct() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
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

  const sizes = ['16', '17', '18'];
  const favId = `bracelet-${bracelet.id}`;
  const isFav = isFavorite(favId);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    addToCart(
      {
        id: `${bracelet.id}-size${selectedSize}`,
        shape: 'circle' as any,
        material: bracelet.material.toLowerCase() as any,
        size: 'medium',
        imageData: '',
        imageSettings: { scale: 1, rotation: 0, x: 0, y: 0 },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      1
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
        material: bracelet.material.toLowerCase() as any,
        size: 'medium',
        imageData: '',
        imageSettings: { scale: 1, rotation: 0, x: 0, y: 0 },
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 bg-white border-b" style={{ borderColor: '#e8d0b4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 transition-colors"
            style={{ color: '#5f5f5f' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a48355'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#5f5f5f'}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Bracelets</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="sticky top-24">
                <div className="rounded-3xl p-8 md:p-12" style={{ background: 'linear-gradient(135deg, #f4f1e2 0%, #e8d0b4 100%)' }}>
                  <motion.div 
                    className="flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-9xl">{bracelet.image}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <div>
                <p className="text-sm font-medium mb-2" style={{ color: '#a48355' }}>{bracelet.material}</p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e0a0e' }}>
                  {bracelet.name}
                </h1>
                <p className="text-2xl font-serif" style={{ color: '#a48355' }}>${bracelet.price}</p>
              </div>

              <p className="text-base leading-relaxed" style={{ color: '#5f5f5f' }}>
                {bracelet.fullDescription}
              </p>

              {/* Size Selection */}
              <div className="space-y-3 pt-4">
                <h3 className="font-serif text-lg font-semibold" style={{ color: '#0e0a0e' }}>
                  Select Size (cm)
                </h3>
                <div className="flex gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-4 rounded-xl font-serif text-lg font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? 'scale-105 shadow-lg'
                          : 'hover:scale-102'
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
                {selectedSize && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm"
                    style={{ color: '#a48355' }}
                  >
                    Selected: {selectedSize} cm
                  </motion.p>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-4 pt-6">
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className="w-full h-14 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                <div className="flex items-center justify-center space-x-4">
                  <FavoriteButton
                    isFavorite={isFav}
                    onToggle={handleToggleFavorite}
                  />
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Save for later</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="pt-6 border-t space-y-3" style={{ borderColor: '#e8d0b4' }}>
                <div className="flex justify-between">
                  <span style={{ color: '#5f5f5f' }}>Material</span>
                  <span className="font-medium" style={{ color: '#0e0a0e' }}>{bracelet.material}</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: '#5f5f5f' }}>Sizes Available</span>
                  <span className="font-medium" style={{ color: '#0e0a0e' }}>16, 17, 18 cm</span>
                </div>
              </div>
            </motion.div>
          </div>
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
                Your bracelet has been added to your cart.
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