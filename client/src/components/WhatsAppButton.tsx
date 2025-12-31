/**
 * WhatsApp Floating Button - Desert Night Campfire Theme
 * Fixed floating button for quick WhatsApp contact
 * Features: Pulse animation, hover effects
 */

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/962778111010?text=مرحباً، أريد الاستفسار عن FullStack BootCamp"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
      aria-label="تواصل معنا عبر WhatsApp"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      
      {/* Icon */}
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
    </motion.a>
  );
}
