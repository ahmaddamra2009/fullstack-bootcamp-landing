/**
 * Target Audience Section - Desert Night Campfire Theme
 * Shows who the bootcamp is designed for
 * Features: Animated cards, gradient borders, hover effects
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Users,
  Briefcase,
  TrendingUp,
  Rocket,
  Building2,
  UserCheck,
  Target,
} from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "الخريجين الجدد",
    description: "طلاب تكنولوجيا المعلومات Fresh Graduate الباحثين عن فرصة دخول سوق العمل",
  },
  {
    icon: Users,
    title: "طلاب الجامعات",
    description: "بمختلف التخصصات - شو ماكان تخصصك، البرمجة تفتح لك أبواب جديدة",
  },
  {
    icon: Target,
    title: "الراغبين بدخول سوق البرمجة",
    description: "كل شخص يريد أن يدخل سوق البرمجة ويبني مستقبل مهني قوي",
  },
  {
    icon: Briefcase,
    title: "موظفي الشركات",
    description: "مشرفين مختبرات الجامعات وموظفي الشركات الراغبين بتطوير مهاراتهم",
  },
  {
    icon: TrendingUp,
    title: "الباحثين عن زيادة الدخل",
    description: "أي شخص يريد أن يزيد دخله بشكل كبير من خلال مهارات البرمجة",
  },
  {
    icon: UserCheck,
    title: "الراغبين بتغيير المسار",
    description: "الراغبين في تغيير مسارهم المهني أو تطوير مسارهم للوصول للاحتراف",
  },
  {
    icon: Rocket,
    title: "رواد الأعمال",
    description: "في تأسيس أعمالهم ومشروعهم الخاص وبناء تطبيقاتهم بأنفسهم",
  },
  {
    icon: Building2,
    title: "الشركات",
    description: "أي شركة حابة تعمل مسار للموظفين وتطويرهم في مجال البرمجة",
  },
];

export default function TargetAudienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            الفئات <span className="gradient-text">المستهدفة</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            يستهدف المخيم فئات معينة من الأشخاص الراغبين في بناء مستقبل مهني في البرمجة
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                {/* Card Content */}
                <div className="relative glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white/10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <audience.icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
