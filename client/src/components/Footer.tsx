/**
 * Footer Component - Desert Night Campfire Theme
 * Site footer with contact info and links
 * Features: Glass morphism, gradient accents, social links
 */

import { Phone, Globe, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] to-[#0a1628]" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-['Poppins']">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">CODERZ</span>
                <span className="text-cyan-400 text-[10px] leading-tight">For Software and Training</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              نحن نؤمن أن كل شخص يملك القدرة ليصبح مطوّراً محترفاً. مهمتنا تحويل الشغف إلى إنجازات من خلال أدوات تعليمية متقدمة وتدريب عملي مكثف.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {[
                { label: "البداية", href: "#hero" },
                { label: "لماذا مختلف", href: "#why-different" },
                { label: "المراحل", href: "#phases" },
                { label: "الأسئلة الشائعة", href: "#faq" },
                { label: "سجل الآن", href: "#register" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:00962778111010"
                  className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-['Poppins']" dir="ltr">00962778111010</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.coderz-tech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>www.coderz-tech.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>الأردن - عمان</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>
            © {currentYear} CODERZ. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              شروط الخدمة
            </a>
            <span>|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
