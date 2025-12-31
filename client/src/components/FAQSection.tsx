/**
 * FAQ Section - Desert Night Campfire Theme
 * Frequently asked questions with accordion
 * Features: Animated accordion, gradient accents
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ChevronLeft } from "lucide-react";

const faqs = [
  {
    question: "هل هناك متطلبات سابقة؟",
    answer: "لا، البرنامج مصمم للمبتدئين تماماً. نبدأ معك من الصفر ونأخذك خطوة بخطوة حتى الاحتراف. كل ما تحتاجه هو الرغبة في التعلم والالتزام.",
  },
  {
    question: "هل يمكنني تطبيق ما أتعلمه على مشروعي الخاص؟",
    answer: "بالتأكيد! في الواقع، هذا هو الهدف الأساسي. ستعمل على مشروع حقيقي من اختيارك طوال فترة البرنامج، وستخرج بتطبيق كامل جاهز للنشر.",
  },
  {
    question: "هل جميع الأدوات مجانية؟",
    answer: "نعم، جميع الأدوات والبرامج المستخدمة في البرنامج مجانية أو لها نسخ مجانية كافية للتعلم والعمل. سنوفر لك قائمة كاملة بالأدوات المطلوبة.",
  },
  {
    question: "كم من الوقت أحتاج لإكمال البرنامج؟",
    answer: "البرنامج مدته 14 أسبوع بمعدل 160 ساعة تدريبية. المحاضرات 3 أيام في الأسبوع، 4 ساعات يومياً. يجب حضور 85% على الأقل للحصول على الشهادة.",
  },
  {
    question: "ما هي خيارات الحضور المتاحة؟",
    answer: "نوفر ثلاث طرق للحضور: وجاهي (حضور مباشر في القاعة)، أونلاين (بث مباشر تفاعلي)، ومسجل (محاضرات مسجلة للمراجعة). يمكنك اختيار ما يناسبك.",
  },
  {
    question: "ما هي الشهادات التي سأحصل عليها؟",
    answer: "ستحصل على شهادات معتمدة من كلية أكسفورد الدولية، طلال أبوغزاله، و ICL. هذه الشهادات معترف بها دولياً وتضيف قيمة كبيرة لسيرتك الذاتية.",
  },
  {
    question: "هل يوجد تقسيط؟",
    answer: "نعم، نوفر خيار التقسيط بدفعات ميسرة بدون كفيل ولابنوك. تواصل معنا لمعرفة التفاصيل والخيارات المتاحة.",
  },
  {
    question: "هل سأحصل على دعم بعد انتهاء البرنامج؟",
    answer: "نعم، نوفر دعم مستمر للخريجين من خلال مجتمع خاص، ومساعدة في البحث عن فرص عمل، ومراجعة السيرة الذاتية، والتحضير للمقابلات.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628]" />
      <div className="absolute inset-0 stars-bg opacity-15" />

      <div className="container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              الأسئلة <span className="gradient-text">الشائعة</span>
            </h2>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول البرنامج
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass rounded-xl border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors text-right [&[data-state=open]>svg]:rotate-90">
                  <span className="text-white font-semibold text-base sm:text-lg flex-1 text-right">
                    {faq.question}
                  </span>
                  <ChevronLeft className="w-5 h-5 text-cyan-400 transition-transform duration-200 shrink-0 mr-2" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
