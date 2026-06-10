'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import CharmPreview from '@/components/CharmPreview';
import { useProfile } from '@/contexts/ProfileContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { mockOrders } from '@/lib/mock-data';
import { formatPrice, getMaterialDisplayName, getSizeDisplayName, getShapeDisplayName } from '@/lib/charms';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Phone, Moon, Sun, Package, Heart, Check, PackageCheck, Truck } from 'lucide-react';

export default function Profile() {
  const { profile, updateProfile } = useProfile();
  const { favorites } = useFavorites();
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pb-safe md:pb-0">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <User className="w-8 h-8 text-amber-700" />
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900">
                My Profile
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Personal Info */}
            <TabsContent value="personal" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl font-semibold text-gray-900">
                    Personal Information
                  </h2>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditMode(!editMode);
                      if (editMode) handleSave();
                    }}
                  >
                    {editMode ? 'Save' : 'Edit'}
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <User className="w-4 h-4" />
                      <span>Full Name</span>
                    </label>
                    <Input
                      value={profile.fullName}
                      onChange={(e) => updateProfile({ fullName: e.target.value })}
                      disabled={!editMode}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </label>
                    <Input
                      type="email"
                      value={profile.email}
                      onChange={(e) => updateProfile({ email: e.target.value })}
                      disabled={!editMode}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4" />
                      <span>Phone</span>
                    </label>
                    <Input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => updateProfile({ phone: e.target.value })}
                      disabled={!editMode}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Saved Designs */}
            <TabsContent value="saved" className="mt-8">
              {favorites.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 bg-stone-50 rounded-2xl"
                >
                  <Heart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                    No saved designs
                  </h3>
                  <p className="text-gray-600">
                    Start designing and save your favorites here
                  </p>
                </motion.div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {favorites.map((design, index) => (
                    <motion.div
                      key={design.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl p-4 mb-4 flex items-center justify-center">
                        <CharmPreview design={design} size={150} />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                          {getShapeDisplayName(design.shape)}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs text-gray-600 bg-stone-100 px-2 py-1 rounded-full">
                            {getMaterialDisplayName(design.material)}
                          </span>
                          <span className="text-xs text-gray-600 bg-stone-100 px-2 py-1 rounded-full">
                            {getSizeDisplayName(design.size)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Orders */}
            <TabsContent value="orders" className="mt-8">
              <div className="space-y-6">
                {mockOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-gray-900">
                          {order.orderNumber}
                        </h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'shipped'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="flex-shrink-0 bg-gradient-to-br from-stone-50 to-stone-100 rounded-lg p-2 w-16 h-16 flex items-center justify-center">
                            <CharmPreview design={item} size={50} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">
                              {getShapeDisplayName(item.shape)}
                            </p>
                            <p className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="font-medium text-gray-900">
                            {formatPrice(item.totalPrice)}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          {order.status === 'completed' && <Check className="w-4 h-4 text-green-600" />}
                          {order.status === 'shipped' && <Truck className="w-4 h-4 text-blue-600" />}
                          {order.status === 'processing' && <Package className="w-4 h-4 text-amber-600" />}
                          <span>
                            {order.status === 'completed' && 'Delivered'}
                            {order.status === 'shipped' && 'In Transit'}
                            {order.status === 'processing' && 'Processing'}
                          </span>
                        </div>
                      </div>
                      <p className="font-serif text-lg font-bold text-gray-900">
                        Total: {formatPrice(order.total)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
              >
                <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">
                  Settings
                </h2>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Moon className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Dark Mode</p>
                      <p className="text-sm text-gray-600">Switch to dark theme</p>
                    </div>
                  </div>
                  <Switch
                    checked={profile.darkMode}
                    onCheckedChange={(checked) => updateProfile({ darkMode: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive order updates and offers</p>
                    </div>
                  </div>
                  <Switch
                    checked={profile.notifications}
                    onCheckedChange={(checked) => updateProfile({ notifications: checked })}
                  />
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}