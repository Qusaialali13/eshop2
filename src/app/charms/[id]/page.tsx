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
import { CharmShape, CharmMaterial, CharmSize, CharmDesign } from '@/types';
import { getShapeDisplayName, generateId, calculateCharmPrice } from '@/lib/charms';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function CharmDesigner() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();

  const [shape, setShape] = useState<CharmShape>((params.id as CharmShape) || 'circle');
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
      setShape(params.id as CharmShape);
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
      toast({ title: 'Removed from favorites' });
    } else {
      const favDesign = { ...design, id: favId };
      addToFavorites(favDesign);
      toast({ title: 'Added to favorites' });
    }
  };

  const totalPrice = calculateCharmPrice(shape, material, size, quantity);

  return (
    <div className="min-h-screen flex flex-col bg-white pb-safe md:pb-0">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-amber-700 transition-colors"
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
                <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-3xl p-8 md:p-12 shadow-inner">
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
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {getShapeDisplayName(shape)}
                </h1>
                <p className="text-gray-600">
                  Customize your perfect charm with your favorite photo
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="customize" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="customize">Customize</TabsTrigger>
                  <TabsTrigger value="material">Material</TabsTrigger>
                  <TabsTrigger value="size">Size</TabsTrigger>
                </TabsList>

                {/* Customize Tab */}
                <TabsContent value="customize" className="space-y-6 mt-6">
                  {/* Shape Selector */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Shape</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {(['circle', 'heart', 'oval', 'square', 'star', 'flower', 'butterfly'] as CharmShape[]).map((s) => (
                        <button
                          key={s}
                          onClick={() => setShape(s)}
                          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                            shape === s
                              ? 'border-amber-600 bg-amber-50'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="w-12 h-12 mx-auto">
                            <svg viewBox="0 0 100 100">
                              <rect width="100" height="100" fill="none" />
                              <circle cx="50" cy="50" r={s === 'square' ? 40 : 35} fill={s === shape ? '#b45309' : '#e5e7eb'} />
                            </svg>
                          </div>
                          <p className="text-xs text-center mt-1 capitalize">{s}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-lg font-semibold text-gray-900">Your Photo</h3>
                    <ImageUploader
                      onImageSelect={handleImageSelect}
                      currentImage={imageData}
                      className="h-48"
                    />
                  </div>

                  {/* Image Editor */}
                  {imageData && (
                    <div className="space-y-3">
                      <h3 className="font-serif text-lg font-semibold text-gray-900">Adjust Your Photo</h3>
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

                {/* Size Tab */}
                <TabsContent value="size" className="mt-6">
                  <SizeSelector selected={size} onChange={setSize} />
                </TabsContent>
              </Tabs>

              {/* Quantity & Price */}
              <div className="space-y-6 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Quantity</p>
                    <p className="text-sm text-gray-500">Max 10 per order</p>
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
              <div className="space-y-4 pt-6 border-t">
                <Button
                  onClick={handleAddToCart}
                  disabled={!imageData}
                  className="w-full h-14 text-lg bg-gray-900 hover:bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>

                <div className="hidden lg:flex items-center justify-center space-x-4">
                  <FavoriteButton
                    isFavorite={isFav}
                    onToggle={handleToggleFavorite}
                  />
                  <p className="text-sm text-gray-600">Save design for later</p>
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
              className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                Added to Cart!
              </h3>
              <p className="text-gray-600 mb-6">
                Your custom charm has been added to your cart.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1"
                >
                  Continue Shopping
                </Button>
                <Button
                  onClick={() => {
                    setShowSuccessModal(false);
                    router.push('/cart');
                  }}
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
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