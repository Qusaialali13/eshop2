'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Heart, LayoutGrid } from 'lucide-react';

const MobileNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/charms', icon: LayoutGrid, label: 'Charms' },
    { href: '/favorites', icon: Heart, label: 'Favorites' },
    { href: '/cart', icon: ShoppingBag, label: 'Cart' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-md border-t"
      style={{ backgroundColor: '#f4f1e2', borderColor: 'rgba(164,131,85,0.15)' }}
    >
      <div className="flex items-center justify-around py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200"
              aria-label={item.label}
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                {isActive ? (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e8d0b4' }}>
                    <item.icon className="w-5 h-5" strokeWidth={1.5} style={{ color: '#a48355' }} />
                  </div>
                ) : (
                  <item.icon className="w-6 h-6" strokeWidth={1.5} style={{ color: '#0e0a0e' }} />
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: '#a48355' }}
                  />
                )}
              </motion.div>
              <span
                className="text-xs font-medium transition-colors"
                style={{ color: isActive ? '#a48355' : '#0e0a0e' }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileNavbar;