/**
 * Why Different Section - Desert Night Campfire Theme
 * Showcases unique selling points with animated cards
 * Features: Glass morphism cards, gradient icons, hover effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Rocket, 
  Briefcase, 
  Award, 
  Code2, 
  Users, 
  GraduationCap,
  Monitor,
  Video,
  FileText
} from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "تخرج بخبرة 8 أشهر في 14 أسبوع",
    description: "160 ساعة تدريب مكثف على مشاريع حقيقية = خبرة عملية تعادل 8 أشهر عمل فعلي",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Briefcase,
    title: "Portfolio جاهز للتوظيف",
    description: "تخرج بمشروع متكامل مع تطبيقات حقيقية ونتائج موثقة تعرضها في أي مقابلة عمل",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Award,
    title: "إشراف يومي من خبير 16+ سنة",
    description: "ليس تعليم ذاتي - متابعة يومية وتصحيح فوري لأخطائك من مدربين معتمدين دولياً",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Code2,
    title: "تقنيات حديثة ومطلوبة",
    description: "C#, ASP.NET Core MVC, React, SQL Server, API, JWT, GitHub - كل ما يحتاجه سوق العمل",
    color: "from-green-500 to-green-600",
  },
  {
    icon: GraduationCap,
    title: "شهادات معتمدة دولياً",
    description: "شهادات من كلية أكسفورد الدولية وطلال أبوغزاله و ICL معترف بها عالمياً",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Users,
    title: "تقسيط بدون كفيل",
    description: "دفعات ميسرة بدون كفيل ولابنوك - نسهل عليك الاستثمار في مستقبلك",
    color: "from-pink-500 to-pink-600",
  },
];

const lectureTypes = [
  { icon: Monitor, label: "وجاهي", description: "حضور مباشر في القاعة" },
  { icon: Video, label: "أونلاين", description: "بث مباشر تفاعلي" },
  { icon: FileText, label: "مسجلة", description: "محاضرات للمراجعة" },
];

export default function WhyDifferentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-different"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628]" />
      <div className="absolute inset-0 stars-bg opacity-20" />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            لماذا هذا البرنامج <span className="gradient-text">مختلف؟</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نحن لا نتحدث عن دروس نظرية مملة، بل عن رحلة واقعية تصقل مهاراتك وتبني مستقبلك خطوة بخطوة
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lecture Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            محاضراتنا
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {lectureTypes.map((type, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass-light rounded-xl px-6 py-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center">
                  <type.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">{type.label}</p>
                  <p className="text-white/50 text-sm">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
