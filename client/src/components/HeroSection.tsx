/**
 * Hero Section - Desert Night Campfire Theme
 * Full-screen hero with animated background and countdown timer
 * Features: Parallax effect, floating tech icons, glass morphism cards
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Calendar, Clock, Users } from "lucide-react";

// Countdown target date (set to a future date)
const TARGET_DATE = new Date("2026-01-25T00:00:00");

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = TARGET_DATE.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    const element = document.querySelector("#register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]" />
      </div>

      {/* Animated Stars Overlay */}
      <div className="absolute inset-0 stars-bg opacity-30" />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="gradient-text">FullStack</span>{" "}
              <span className="font-['Poppins']">BootCamp</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-cyan-400 font-semibold mb-6 text-glow-cyan">
              من أول كود لبناء تطبيق كامل
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            لا نظريات مملة - ابدأ من اليوم الأول بمشاريع حقيقية، وطبق كل ما تتعلمه مباشرة.
            في نهاية البرنامج ستملك تطبيق متكامل مع نتائج حقيقية وأرقام قابلة للقياس.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="glass-light rounded-xl px-6 py-4 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-cyan-400" />
              <div className="text-right">
                <p className="text-white font-bold text-xl font-['Poppins']">14</p>
                <p className="text-white/60 text-sm">أسبوع</p>
              </div>
            </div>
            <div className="glass-light rounded-xl px-6 py-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-cyan-400" />
              <div className="text-right">
                <p className="text-white font-bold text-xl font-['Poppins']">160</p>
                <p className="text-white/60 text-sm">ساعة تدريبية</p>
              </div>
            </div>
            <div className="glass-light rounded-xl px-6 py-4 flex items-center gap-3">
              <Users className="w-6 h-6 text-cyan-400" />
              <div className="text-right">
                <p className="text-white font-bold text-xl font-['Poppins']">16+</p>
                <p className="text-white/60 text-sm">سنة خبرة المدربين</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              onClick={scrollToRegister}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold text-lg px-10 py-6 rounded-xl glow-cyan pulse-glow"
            >
              ابدأ الآن - سجل مجاناً
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-semibold text-lg px-10 py-6 rounded-xl bg-transparent"
            >
              تحميل Outline البرنامج
            </Button>
          </motion.div>

          {/* Countdown Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">انطلاق المخيم</span>
            </div>
            <p className="text-white text-2xl sm:text-3xl font-bold mb-6 font-['Poppins']">
              25 يناير 2026
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-3 sm:gap-6">
              {[
                { value: timeLeft.seconds, label: "ثانية" },
                { value: timeLeft.minutes, label: "دقيقة" },
                { value: timeLeft.hours, label: "ساعة" },
                { value: timeLeft.days, label: "يوم" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="glass-light rounded-xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center mb-2">
                    <span className="text-2xl sm:text-4xl font-bold text-white font-['Poppins']">
                      {String(item.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-white/60 text-xs sm:text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
