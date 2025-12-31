/**
 * Training Outcomes Section - Desert Night Campfire Theme
 * Displays what students will achieve after completing the bootcamp
 * Features: Numbered list, animated reveal, gradient accents
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Award, Briefcase, Code2, Users, Lightbulb } from "lucide-react";

const outcomes = [
  {
    icon: Code2,
    title: "خبرة عملية 8 أشهر",
    description: "تخريج طالب يمتلك خبرة عملية لا تقل عن 8 أشهر في مجال تطوير الويب، مع مهارات متقدمة في Problem Solving، والعمل كـ Full Stack Developer",
  },
  {
    icon: Briefcase,
    title: "برمجة وتصميم مواقع كاملة",
    description: "سوف يكون الطالب قادر على برمجة وتصميم أي موقع ويب كامل Front End - Back End ونشره على الإنترنت وحمايته وتسويقه",
  },
  {
    icon: Users,
    title: "جاهز للعمل مع أي فريق",
    description: "كل خريج من مخيم كودرز سوف يكون قادر على الالتحاق مع أي فريق برمجة في أي شركة وكأنه خبرة 8 شهور على الأقل",
  },
  {
    icon: Lightbulb,
    title: "تحليل وتصميم الأنظمة",
    description: "كل طالب قادر على عمل تحليل لأي نظام وتصميم النظام وتطويره من الـ A - Z بشكل احترافي",
  },
  {
    icon: Award,
    title: "إتقان Technology Stack",
    description: "سوف تكون القدرة للطالب للدخول في نقاشات بكل ال Technology Stack بشكل نظري وعملي، وهذا أهم شيء في مقابلات العمل",
  },
];

const certifications = [
  { name: "كلية أكسفورد الدولية", logo: "🎓" },
  { name: "طلال أبوغزاله", logo: "📜" },
  { name: "ICL", logo: "🏆" },
];

export default function OutcomesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/trainer-section-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/98 to-[#0a1628]" />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            مخرجات <span className="gradient-text">التدريب</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            ماذا ستحقق بعد إتمام المخيم؟ نتائج حقيقية وملموسة
          </p>
        </motion.div>

        {/* Outcomes List */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl font-['Poppins']">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <outcome.icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">
                        {outcome.title}
                      </h3>
                    </div>
                    <p className="text-white/60 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>

                  {/* Check Icon */}
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="/images/certificate-badge.png"
                alt="Certificate Badge"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-bold text-white">
                شهادات معتمدة دولياً
              </h3>
            </div>
            <p className="text-white/60 mb-6">
              احصل على شهادات معترف بها عالمياً من أفضل المؤسسات التعليمية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-light rounded-xl px-6 py-3 flex items-center gap-2"
                >
                  <span className="text-2xl">{cert.logo}</span>
                  <span className="text-white font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
