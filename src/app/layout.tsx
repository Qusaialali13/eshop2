import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ProfileProvider } from "@/contexts/ProfileContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LuxCharms - Custom Photo Jewelry | Personalized Charms",
  description: "Transform your cherished memories into beautiful custom photo charms. Create personalized jewelry with your own photos in premium silver, gold, and rose gold.",
  keywords: ["custom jewelry", "photo charms", "personalized charms", "custom jewelry", "silver charms", "gold charms", "rose gold charms"],
  authors: [{ name: "LuxCharms" }],
  openGraph: {
    title: "LuxCharms - Custom Photo Jewelry",
    description: "Turn your favorite memories into beautiful charms",
    url: "https://luxcharms.com",
    siteName: "LuxCharms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LuxCharms - Custom Photo Jewelry",
    description: "Turn your favorite memories into beautiful charms",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-white text-gray-900`}
      >
        <ThemeProvider>
          <CartProvider>
            <FavoritesProvider>
              <ProfileProvider>
                {children}
                <Toaster />
              </ProfileProvider>
            </FavoritesProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
