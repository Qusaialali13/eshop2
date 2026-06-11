"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import Footer from "@/components/Footer";
import CharmPreview from "@/components/CharmPreview";
import ImageUploader from "@/components/ImageUploader";
import MaterialSelector from "@/components/MaterialSelector";
import SizeSelector from "@/components/SizeSelector";
import QuantitySelector from "@/components/QuantitySelector";
import PriceCalculator from "@/components/PriceCalculator";
import FavoriteButton from "@/components/FavoriteButton";
import { CharmMaterial, CharmSize, CharmDesign } from "@/types";
import {
  getShapeDisplayName,
  generateId,
  calculateCharmPrice,
} from "@/lib/charms";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, ShoppingBag } from "lucide-react";
import Image from "next/image";

const getCharmBackgroundImage = (
  shape: "circle" | "square",
  material: CharmMaterial,
): string => {
  const targetShape = shape;

  const mapping: Record<string, string> = {
    "gold-circle": "/assets/Charms/GOLD_CIRCLE_CHARMS.png",
    "gold-square": "/assets/Charms/GOLD_SQUARE_CHARMS.png",
    "rose-gold-circle": "/assets/Charms/ROSE_GOLD_CIRCLE_CHARMS.png",
    "rose-gold-square": "/assets/Charms/ROSE_GOLD_SQUARE_CHARMS.png",
    "silver-circle": "/assets/Charms/SILVER_CIRCLE_CHARMS.jpg",
    "silver-square": "/assets/Charms/SILVER_SQUARE_CHARMS.jpg",
  };

  const key = `${material}-${targetShape}`;
  return mapping[key] || "/assets/Charms/SILVER_CIRCLE_CHARMS.jpg";
};

export default function CharmDesigner() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { addToFavorites, isFavorite, removeFromFavorites } = useFavorites();

  const [shape, setShape] = useState<"circle" | "square">(
    (params.id as any) || "circle",
  );
  const [material, setMaterial] = useState<CharmMaterial>("silver");
  const [size, setSize] = useState<CharmSize>("medium");
  const [quantity, setQuantity] = useState(1);
  const [imageData, setImageData] = useState<string>("");
  const [imageSettings, setImageSettings] = useState({
    scale: 1,
    rotation: 0,
    x: 0,
    y: 0,
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const backgroundImageSrc = getCharmBackgroundImage(shape, material);

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

  const favId = `${shape}-${material}-${size}-${imageData ? "with-image" : "without-image"}`;
  const isFav = isFavorite(favId);

  useEffect(() => {
    if (params.id && ["circle", "square"].includes(params.id as string)) {
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
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)",
      }}
    >
      <Navbar />

      {/* Full-width Header with Preview */}
      <div
        className="pt-24 pb-8 md:pb-12"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 transition-colors mb-6"
            style={{ color: "#FAFAFA" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#FAFAFA")}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Charms</span>
          </button>

          {/* Header Content */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
              style={{ color: "#FFFFFF" }}
            >
              {getShapeDisplayName(shape)}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg"
              style={{ color: "#AAAAAA" }}
            >
              Design your perfect charm in 3 simple steps
            </motion.p>
          </div>

          {/* Large Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="rounded-3xl "
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(212,165,116,0.3)",
              }}
            >
              <div className="flex items-center justify-center relative w-[320px]  h-[320px] rounded-3xl overflow-hidden">
                {/* <CharmPreview design={design} size={320} /> */}
                <Image
                  width={180}
                  height={180}
                  alt={`${material} ${shape} charm base frame`}
                  src={backgroundImageSrc}
                  className="object-contain  inset-0 z-0 absolute w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Designer Controls */}
      <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Step 1: Upload Photo */}
            <div
              className="rounded-2xl p-6 shadow-sm"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(212,165,116,0.3)",
              }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#D4A574", color: "#FFFFFF" }}
                >
                  1
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3
                      className="font-serif text-xl font-semibold"
                      style={{ color: "#000000" }}
                    >
                      Upload Your Photo
                    </h3>
                    <p className="text-sm mt-1" style={{ color: "#666666" }}>
                      PNG format with transparent background • 1cm × 1cm size
                    </p>
                  </div>
                  <ImageUploader
                    onImageSelect={handleImageSelect}
                    currentImage={imageData}
                    className="h-36"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Choose Material */}
            <div
              className="rounded-2xl p-6 shadow-sm"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(212,165,116,0.3)",
              }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#D4A574", color: "#FFFFFF" }}
                >
                  2
                </div>
                <div className="flex-1">
                  <h3
                    className="font-serif text-xl font-semibold mb-4"
                    style={{ color: "#000000" }}
                  >
                    Select Material
                  </h3>
                  <MaterialSelector
                    selected={material}
                    onChange={setMaterial}
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Quantity & Price */}
            <div
              className="rounded-2xl p-6 shadow-sm"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(212,165,116,0.3)",
              }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: "#D4A574", color: "#FFFFFF" }}
                >
                  3
                </div>
                <div className="flex-1 space-y-4">
                  <h3
                    className="font-serif text-xl font-semibold"
                    style={{ color: "#000000" }}
                  >
                    Quantity & Price
                  </h3>
                  <div>
                    <p className="text-sm mb-3" style={{ color: "#666666" }}>
                      Select quantity:
                    </p>
                    <QuantitySelector value={quantity} onChange={setQuantity} />
                  </div>
                  <PriceCalculator
                    shape={shape}
                    material={material}
                    size={size}
                    quantity={quantity}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={handleAddToCart}
                disabled={!imageData}
                className="flex-1 h-12 text-base transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: "#D4A574", color: "#FFFFFF" }}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>

              <Button
                onClick={handleToggleFavorite}
                className="flex-1 h-12 text-base transition-all duration-300 hover:scale-105"
                variant="outline"
                style={{ borderColor: "#D4A574", color: "#D4A574" }}
              >
                {isFav ? "♥ Saved" : "♡ Save for Later"}
              </Button>
            </div>
          </motion.div>
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
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#FAFAFA" }}
              >
                <Check className="w-8 h-8" style={{ color: "#D4A574" }} />
              </div>
              <h3
                className="font-serif text-2xl font-bold mb-2"
                style={{ color: "#000000" }}
              >
                Added to Cart!
              </h3>
              <p className="mb-6" style={{ color: "#666666" }}>
                Your custom charm has been added to your cart.
              </p>
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSuccessModal(false)}
                  className="flex-1"
                  style={{ borderColor: "#D4A574", color: "#D4A574" }}
                >
                  Continue Shopping
                </Button>
                <Button
                  onClick={() => {
                    setShowSuccessModal(false);
                    router.push("/cart");
                  }}
                  className="flex-1 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
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
