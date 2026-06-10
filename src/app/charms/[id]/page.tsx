'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import CharmPreview from '@/components/CharmPreview';
import ImageUploader from '@/components/ImageUploader';
import ImageEditor from '@/components/ImageEditor';
import MaterialSelector from '@/components/MaterialSelector';
import SizeSelector from '@/components/SizeSelector';
import QuantitySelector from '@/components/QuantitySelector';
import PriceCalculator from '@/components/PriceCalculator';
import FavoriteButton from '@/components/FavoriteButton';
import { CharmMaterial, CharmSize, CharmDesign } from '@/types';
import { getShapeDisplayName, generateId, calculateCharmPrice } from '@/lib/charms';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';

export default function CharmDesigner() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();

  const [shape, setShape] = useState<'circle' | 'heart' | 'oval' | 'square' | 'star' | 'flower' | 'butterfly'>(
    (params.id as any) || 'circle'
  );
  const [material, setMaterial] = useState<CharmMaterial>('silver');
  const [size, setSize] = useState<CharmSize>('medium');
  const [quantity, setQuantity] = useState(1);
  const [imageData, setImageData] = useState<string>('');
  const [imageSettings, setImageSettings] = useState({
    scale: 1,
    rotation: 0,
    x: 0,
    y: 0,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const design: CharmDesign = {
    id: generateId(),
    shape,
    material,
    size,
    imageData,
    imageSettings,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const favId = `${shape}-${material}-${size}-${imageData ? 'with-image' : 'without-image'}`;
  const isFav = isFavorite(favId);

  useEffect(() => {
    if (params.id && ['circle', 'heart', 'oval', 'square', 'star', 'flower', 'butterfly'].includes(params.id as string)) {
      setShape(params.id as any);
    }
  }, [params.id]);

  const handleImageSelect = (data: string) => {
    setImageData(data);
    setImageSettings({ scale: 1, rotation: 0, x: 0, y: 0 });
  };

  const handleAddToCart = () => {
    addToCart(design, quantity);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  const handleToggleFavorite = () => {
    if (isFav) {
      removeFromFavorites(favId);
    } else {
      const favDesign = { ...design, id: favId };
      addToFavorites(favDesign);
    }
  };

  const totalPrice = calculateCharmPrice(shape, material, size, quantity);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-safe md:pb-0">
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
            <span>Back to Charms</span>
          </button>
        </div>
      </div>

      {/* Designer */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Preview - Desktop: Left, Mobile: Top */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="sticky top-24">
                <div className="rounded-3xl p-8 md:p-12 shadow-inner" style={{ background: 'linear-gradient(135deg, #f4f1e2 0%, #e8d0b4 100%)' }}>
                  <div className="flex items-center justify-center">
                    <CharmPreview design={design} size={350} />
                  </div>
                </div>

                {/* Quick actions on mobile */}
                <div className="mt-6 flex justify-center space-x-4 lg:hidden">
                  <FavoriteButton
                    isFavorite={isFav}
                    onToggle={handleToggleFavorite}
                    size="lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* Controls - Desktop: Right, Mobile: Bottom */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-8"
            >
              {/* Title */}
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: '#0e0a0e' }}>
                  {getShapeDisplayName(shape)}
                </h1>
                <p style={{ color: '#5f5f5f' }}>
                  Customize your perfect charm with your favorite photo
                </p>
              </div>

              {/* Tabs - Only two tabs: Customize & Material */}
              <Tabs defaultValue="customize" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="customize">Customize</TabsTrigger>
                  <TabsTrigger value="material">Material</TabsTrigger>
                </TabsList>

                {/* Customize Tab - No shape selector, PNG only, no size selector */}
                <TabsContent value="customize" className="space-y-6 mt-6">
                  {/* Image Upload - PNG only */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-semibold" style={{ color: '#0e0a0e' }}>Your Photo</h3>
                    <p className="text-sm" style={{ color: '#5f5f5f' }}>Please upload a PNG image with transparent background</p>
                    <ImageUploader
                      onImageSelect={handleImageSelect}
                      currentImage={imageData}
                      className="h-48"
                    />
                  </div>

                  {/* Image Editor */}
                  {imageData && (
                    <div className="space-y-3">
                      <h3 className="font-serif text-lg font-semibold" style={{ color: '#0e0a0e' }}>Adjust Your Photo</h3>
                      <ImageEditor
                        imageData={imageData}
                        settings={imageSettings}
                        onChange={setImageSettings}
                      />
                    </div>
                  )}
                </TabsContent>

                {/* Material Tab */}
                <TabsContent value="material" className="mt-6">
                  <MaterialSelector selected={material} onChange={setMaterial} />
                </TabsContent>
              </Tabs>

              {/* Quantity & Price */}
              <div className="space-y-6 pt-6 border-t" style={{ borderColor: '#e8d0b4' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium" style={{ color: '#0e0a0e' }}>Quantity</p>
                    <p className="text-sm" style={{ color: '#5f5f5f' }}>Select pack size</p>
                  </div>
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                </div>

                <PriceCalculator
                  shape={shape}
                  material={material}
                  size={size}
                  quantity={quantity}
                />
              </div>

              {/* Actions */}
              <div className="space-y-4 pt-6 border-t" style={{ borderColor: '#e8d0b4' }}>
                <Button
                  onClick={handleAddToCart}
                  disabled={!imageData}
                  className="w-full h-14 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ backgroundColor: '#0e0a0e', color: '#f4f1e2' }}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                <div className="hidden lg:flex items-center justify-center space-x-4">
                  <FavoriteButton
                    isFavorite={isFav}
                    onToggle={handleToggleFavorite}
                  />
                  <p className="text-sm" style={{ color: '#5f5f5f' }}>Save design for later</p>
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
                Your custom charm has been added to your cart.
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