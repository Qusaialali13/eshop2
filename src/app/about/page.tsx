'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import ShapeSVG from '@/components/ShapeSVG';
import { Gem, Award, Heart, Users, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Crafting timeless memories through custom photo charms since 2015. Each piece tells your unique story with elegance and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-white rounded-3xl p-12 shadow-xl">
                  <div className="flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <ShapeSVG shape="heart" material="gold" size={200} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold text-gray-900">
                Born from Love
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                LuxCharms was founded with a simple yet powerful idea: everyone deserves to wear their most precious memories close to their heart. What started as a small workshop in New York has grown into a beloved brand serving customers worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Each charm we create is more than just jewelry—it's a story, a moment frozen in time, a connection to what matters most. From family portraits to pet photos, wedding memories to milestone celebrations, we help you preserve life's beautiful moments in exquisite detail.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-amber-700">9+</p>
                  <p className="text-sm text-gray-500">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-amber-700">50K+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-amber-700">100K+</p>
                  <p className="text-sm text-gray-500">Charms Crafted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Exceptional Craftsmanship
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every charm is handcrafted with meticulous attention to detail
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Materials',
                desc: 'We use only the finest sterling silver, 18K gold, and rose gold for lasting beauty and durability.',
              },
              {
                icon: Gem,
                title: 'Precision Engineering',
                desc: 'Our state-of-the-art technology ensures every detail of your photo is captured with stunning clarity.',
              },
              {
                icon: Sparkles,
                title: 'Hand-Finished',
                desc: 'Each charm receives personal attention from our skilled artisans, ensuring perfection in every piece.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold text-gray-900">
                Premium Materials
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">Sterling Silver</h3>
                    <p className="text-gray-600">925 sterling silver, renowned for its durability and brilliant shine. Hypoallergenic and perfect for everyday wear.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">18K Gold</h3>
                    <p className="text-gray-600">Luxurious 18K gold plating over premium silver base. Rich, warm tone that develops a beautiful patina over time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex-shrink-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">18K Rose Gold</h3>
                    <p className="text-gray-600">Romantic rose gold finish with copper alloy. Blends classic elegance with modern sophistication.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-stone-50 rounded-2xl p-8 flex items-center justify-center">
                    <ShapeSVG shape="circle" material="silver" size={120} />
                  </div>
                  <div className="bg-stone-50 rounded-2xl p-8 flex items-center justify-center">
                    <ShapeSVG shape="heart" material="rose-gold" size={120} />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="bg-stone-50 rounded-2xl p-8 flex items-center justify-center">
                    <ShapeSVG shape="star" material="gold" size={120} />
                  </div>
                  <div className="bg-stone-50 rounded-2xl p-8 flex items-center justify-center">
                    <ShapeSVG shape="flower" material="silver" size={120} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Charms Are Made */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Your Charm Is Made
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From your photo to a precious keepsake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Upload Photo', desc: 'You upload your favorite photo in high resolution' },
              { step: '02', title: 'Customize', desc: 'Choose shape, material, and perfect the positioning' },
              { step: '03', title: 'Craft', desc: 'Our artisans craft your charm with precision and care' },
              { step: '04', title: 'Deliver', desc: 'Your custom charm arrives beautifully packaged' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-8xl font-serif font-bold text-amber-100 absolute -top-4 -left-2 -z-10">
                  {item.step}
                </div>
                <div className="bg-white rounded-2xl p-8 pt-12 shadow-sm">
                  <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How long does it take to receive my custom charm?',
                a: 'Standard production time is 3-5 business days, plus shipping. Express options are available for urgent orders.',
              },
              {
                q: 'What photo format and quality do you need?',
                a: 'We accept JPG and PNG formats. For best results, use high-resolution photos (minimum 300 DPI) with good lighting.',
              },
              {
                q: 'Are the charms waterproof?',
                a: 'Yes! Our charms are water-resistant and suitable for everyday wear. However, we recommend removing them before swimming or showering to maintain their beauty.',
              },
              {
                q: 'Can I return or exchange my custom charm?',
                a: 'Due to the personalized nature of our products, custom charms cannot be returned or exchanged unless there is a manufacturing defect.',
              },
              {
                q: 'Do you offer gift packaging?',
                a: 'Yes! All our charms come in elegant gift boxes. You can also add premium gift wrapping and personalized messages at checkout.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-50 rounded-2xl p-6"
              >
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileNavbar />
    </div>
  );
}