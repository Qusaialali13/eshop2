'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import CharmPreview from '@/components/CharmPreview';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, getMaterialDisplayName, getSizeDisplayName, getShapeDisplayName } from '@/lib/charms';
import { Button } from '@/components/ui/button';
import { Heart, Trash2, ShoppingBag, Edit, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Favorites() {
  const router = useRouter();
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (design: any) => {
    addToCart(design, 1);
  };

  const handleRemove = (id: string) => {
    removeFromFavorites(id);
  };

  const handleEdit = (design: any) => {
    router.push(`/charms/${design.shape}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pb-safe md:pb-0">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16" style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="w-8 h-8" style={{ color: '#D4A574', fill: '#D4A574' }} />
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900">
                Favorites
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              {favorites.length === 0
                ? 'Start saving your favorite charm designs'
                : `You have ${favorites.length} saved design${favorites.length > 1 ? 's' : ''}`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {favorites.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                <Heart className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                No favorites yet
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start designing your custom charms and save your favorites to view them later.
              </p>
              <Button
                onClick={() => router.push('/charms')}
                style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              >
                Start Designing
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((design, index) => (
                <motion.div
                  key={design.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                  style={{ border: '1px solid rgba(212,165,116,0.2)' }}
                >
                  {/* Preview */}
                  <div className="p-8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)' }}>
                    <CharmPreview design={design} size={200} showImage={false} />
                  </div>

                  {/* Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                        {getShapeDisplayName(design.shape)}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-600 px-3 py-1 rounded-full" style={{ backgroundColor: '#FAFAFA' }}>
                          {getMaterialDisplayName(design.material)}
                        </span>
                        <span className="text-sm text-gray-600 px-3 py-1 rounded-full" style={{ backgroundColor: '#FAFAFA' }}>
                          {getSizeDisplayName(design.size)}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleAddToCart(design)}
                        className="flex-1"
                        style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() => handleEdit(design)}
                        variant="outline"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        onClick={() => handleRemove(design.id)}
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}