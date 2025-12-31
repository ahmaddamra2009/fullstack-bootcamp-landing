/**
 * Header Component - Desert Night Campfire Theme
 * Sticky navigation with glass morphism effect
 * RTL layout for Arabic content
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "البداية", href: "#hero" },
  { label: "لماذا مختلف", href: "#why-different" },
  { label: "المراحل", href: "#phases" },
  { label: "الأسئلة", href: "#faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg font-['Poppins']">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">CODERZ</span>
              <span className="text-cyan-400 text-[10px] leading-tight">For Software and Training</span>
            </div>
          </div>
          <div className="h-8 w-px bg-white/20 mx-2 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
              <span className="text-cyan-400 text-xs">⬡</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm leading-tight font-['Poppins']">FullStack</span>
              <span className="text-cyan-400/80 text-[10px] leading-tight font-['Poppins']">BootCamp</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 text-white/80 hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:00962778111010"
            className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            <span className="font-['Poppins']" dir="ltr">+962 7 7811 1010</span>
          </a>
          <Button
            onClick={() => scrollToSection("#register")}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold px-6 glow-cyan"
          >
            سجل الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-white/80 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors text-right"
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-white/10 my-2" />
              <a
                href="tel:00962778111010"
                className="flex items-center justify-center gap-2 text-white/80 py-2"
              >
                <Phone className="w-4 h-4" />
                <span className="font-['Poppins']" dir="ltr">+962 7 7811 1010</span>
              </a>
              <Button
                onClick={() => scrollToSection("#register")}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold w-full mt-2"
              >
                سجل الآن
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
