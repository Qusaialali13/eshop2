"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoProps {
  title?: string;
  className?: string;
}

const VideoComponent: React.FC<VideoProps> = ({
  title = "Our Story",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative rounded-3xl overflow-hidden shadow-xl ${className}`}
      style={{ backgroundColor: "#e8d0b4" }}
    >
      {/* Video Placeholder */}
      <div className="aspect-video w-full flex items-center justify-center relative">
        {/* Background Looping Video */}
        <video
          src="/assets/NOMADLINKS_BRACELET_SILVER.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

       

        {/* Play Button */}
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ backgroundColor: "#a48355" }}
        >
          <Play className="w-8 h-8 ml-1" style={{ color: "#f4f1e2" }} />
        </motion.button> */}

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
          <p
            className="font-serif text-xl font-semibold"
            style={{ color: "#f4f1e2" }}
          >
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoComponent;
