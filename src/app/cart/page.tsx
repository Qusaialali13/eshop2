'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import CharmPreview from '@/components/CharmPreview';
import { useCart } from '@/contexts/CartContext';
import { formatPrice, getMaterialDisplayName, getSizeDisplayName, getShapeDisplayName, calculateShipping, calculateOrderTotal } from '@/lib/charms';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Trash2, Plus, Minus, Check, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const subtotal = getCartTotal();
  const shipping = calculateShipping(subtotal);
  const total = calculateOrderTotal(subtotal);

  const handleCheckout = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      clearCart();
      router.push('/');
    }, 3000);
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
              <ShoppingBag className="w-8 h-8" style={{ color: '#D4A574' }} />
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900">
                Shopping Cart
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              {cart.length === 0 ? 'Your cart is empty' : `${cart.length} item${cart.length > 1 ? 's' : ''} in your cart`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cart.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                <ShoppingBag className="w-12 h-12 text-gray-400" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Start designing your custom charms and add them to your cart.
              </p>
              <Button
                onClick={() => router.push('/charms')}
                style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              >
                Start Shopping
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    style={{ border: '1px solid rgba(212,165,116,0.2)' }}
                  >
                    <div className="flex gap-6">
                      {/* Preview */}
                      <div className="flex-shrink-0 rounded-xl p-4 w-32 h-32 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)' }}>
                        <CharmPreview design={item} size={100} showImage={false} />
                      </div>

                      {/* Details */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-serif text-xl font-semibold text-gray-900">
                            {getShapeDisplayName(item.shape)}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="text-xs text-gray-600 px-2 py-1 rounded-full" style={{ backgroundColor: '#FAFAFA' }}>
                              {getMaterialDisplayName(item.material)}
                            </span>
                            <span className="text-xs text-gray-600 px-2 py-1 rounded-full" style={{ backgroundColor: '#FAFAFA' }}>
                              {getSizeDisplayName(item.size)}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= 10}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="font-serif text-xl font-bold text-gray-900">
                              {formatPrice(item.totalPrice)}
                            </p>
                            <p className="text-sm text-gray-500">
                              {formatPrice(item.totalPrice / item.quantity)} each
                            </p>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sm text-red-600 hover:text-red-700 flex items-center space-x-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Clear Cart */}
                {cart.length > 1 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-600 hover:text-red-600 transition-colors"
                  >
                    Clear Cart
                  </button>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-2xl p-6 sticky top-24"
                  style={{ backgroundColor: '#FAFAFA' }}
                >
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? (
                          <span className="text-green-600">FREE</span>
                        ) : (
                          formatPrice(shipping)
                        )}
                      </span>
                    </div>
                    {shipping > 0 && (
                      <p className="text-xs text-gray-500">
                        Add {formatPrice(100 - subtotal)} more for free shipping
                      </p>
                    )}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span className="font-serif text-xl font-semibold text-gray-900">Total</span>
                        <span className="font-serif text-2xl font-bold" style={{ color: '#D4A574' }}>
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleCheckout}
                    className="w-full mt-6 h-14 text-lg"
                    style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
                  >
                    Checkout
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Secure checkout • Free returns • 30-day guarantee
                  </p>
                </motion.div>
              </div>
            </div>
          )}
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4A574' }}>
                <Check className="w-8 h-8" style={{ color: '#FFFFFF' }} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                Order Placed!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for your order! You will receive a confirmation email shortly.
              </p>
              <Button
                onClick={() => {
                  setShowSuccessModal(false);
                  router.push('/');
                }}
                className="w-full"
                style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
              >
                Continue Shopping
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <MobileNavbar />
    </div>
  );
}