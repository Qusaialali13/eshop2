'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import MobileNavbar from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import VideoComponent from '@/components/VideoComponent';
import ShapeSVG from '@/components/ShapeSVG';
import { Gem, Award, Heart, Users, Sparkles, Upload, Wand2, Hammer, Package, ChevronRight } from 'lucide-react';

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'How long does it take to receive my custom charm?',
      a: 'Standard production time is 3-5 business days, plus shipping. Express options are available for urgent orders.',
    },
    {
      q: 'What photo format and quality do you need?',
      a: 'We accept PNG format only. For best results, use high-resolution photos (minimum 300 DPI) with good lighting.',
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
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FAFAFA' }}>
      <Navbar />

      {/* Brand Story */}
      <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <VideoComponent title="Our Story" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold" style={{ color: '#000000' }}>
                Born from Love
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>
                LuxCharms was founded with a simple yet powerful idea: everyone deserves to wear their most precious memories close to their heart. What started as a small workshop in New York has grown into a beloved brand serving customers worldwide.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>
                Each charm we create is more than just jewelry—it's a story, a moment frozen in time, a connection to what matters most. From family portraits to pet photos, wedding memories to milestone celebrations, we help you preserve life's beautiful moments in exquisite detail.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Exceptional Craftsmanship
            </h2>
            <p className="text-xl" style={{ color: '#666666' }} max-w-2xl mx-auto>
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
                className="rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                  <item.icon className="w-8 h-8" style={{ color: '#D4A574' }} />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4" style={{ color: '#000000' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#666666' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl font-bold" style={{ color: '#000000' }}>
                Premium Materials
              </h2>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-semibold" style={{ color: '#C0C0C0' }}>Sterling Silver</h3>
                  <p style={{ color: '#666666' }}>925 sterling silver, renowned for its durability and brilliant shine. Hypoallergenic and perfect for everyday wear.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-semibold" style={{ color: '#FFD700' }}>18K Gold</h3>
                  <p style={{ color: '#666666' }}>Luxurious 18K gold plating over premium silver base. Rich, warm tone that develops a beautiful patina over time.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-semibold" style={{ color: '#B76E79' }}>18K Rose Gold</h3>
                  <p style={{ color: '#666666' }}>Romantic rose gold finish with copper alloy. Blends classic elegance with modern sophistication.</p>
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
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                    <ShapeSVG shape="circle" material="silver" size={120} />
                  </div>
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                    <ShapeSVG shape="heart" material="rose-gold" size={120} />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                    <ShapeSVG shape="star" material="gold" size={120} />
                  </div>
                  <div className="rounded-2xl p-8 flex items-center justify-center" style={{ backgroundColor: '#FAFAFA' }}>
                    <ShapeSVG shape="flower" material="silver" size={120} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Charms Are Made - Stepper Design */}
      <section className="py-20" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              How Your Charm Is Made
            </h2>
            <p className="text-xl" style={{ color: '#AAAAAA' }} max-w-2xl mx-auto>
              From your photo to a precious keepsake
            </p>
          </motion.div>

          {/* Horizontal Stepper */}
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5" style={{ backgroundColor: 'rgba(212, 165, 116, 0.3)' }} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Upload Photo', desc: 'You upload your favorite photo in high resolution', icon: Upload },
                { step: '02', title: 'Customize', desc: 'Choose shape, material, and perfect the positioning', icon: Wand2 },
                { step: '03', title: 'Craft', desc: 'Our artisans craft your charm with precision and care', icon: Hammer },
                { step: '04', title: 'Deliver', desc: 'Your custom charm arrives beautifully packaged', icon: Package },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Circle with icon */}
                  <div className="relative mx-auto w-20 h-20 mb-4">
                    <div className="absolute inset-0 rounded-full flex items-center justify-center" style={{ backgroundColor: '#D4A574' }}>
                      <item.icon className="w-10 h-10" style={{ color: '#FFFFFF' }} strokeWidth={1.5} />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#FAFAFA', color: '#000000' }}>
                      {item.step}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{ color: '#AAAAAA', fontSize: '0.875rem', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ backgroundColor: '#FAFAFA' }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <h3 className="font-serif text-xl font-semibold" style={{ color: '#000000' }}>
                    {faq.q}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: '#D4A574' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#D4A574' }} />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6" style={{ color: '#666666' }}>
                    {faq.a}
                  </div>
                </motion.div>
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