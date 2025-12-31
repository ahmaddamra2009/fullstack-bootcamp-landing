/**
 * Registration Section - Desert Night Campfire Theme
 * Multi-step registration form with validation
 * Features: Glass morphism form, animated steps, input validation
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { User, Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const experienceLevels = [
  { value: "beginner", label: "🌱 مبتدئ - لا توجد خبرة سابقة" },
  { value: "intermediate", label: "📈 متوسط - لدي خبرة بسيطة" },
  { value: "advanced", label: "⭐ متقدم - لدي خبرة جيدة" },
];

const countries = [
  { value: "jordan", label: "الأردن" },
  { value: "saudi", label: "السعودية" },
  { value: "kuwait", label: "الكويت" },
  { value: "bahrain", label: "البحرين" },
  { value: "uae", label: "الإمارات" },
  { value: "qatar", label: "قطر" },
  { value: "oman", label: "عمان" },
  { value: "egypt", label: "مصر" },
  { value: "other", label: "أخرى" },
];

const jordanCities = [
  { value: "amman", label: "عمان" },
  { value: "irbid", label: "إربد" },
  { value: "zarqa", label: "الزرقاء" },
  { value: "aqaba", label: "العقبة" },
  { value: "other", label: "أخرى" },
];

export default function RegisterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    country: "",
    city: "",
    source: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (field === "country") {
      setSelectedCountry(value);
      setFormData((prev) => ({ ...prev, city: "" }));
    }
  };

  const createRegistration = trpc.registration.create.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("تم التسجيل بنجاح! سنتواصل معك قريباً");
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(error.message || "حدث خطأ أثناء التسجيل");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);
    
    // Get country and city labels
    const countryLabel = countries.find(c => c.value === formData.country)?.label || formData.country;
    const cityLabel = jordanCities.find(c => c.value === formData.city)?.label || formData.city;
    
    createRegistration.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: (formData.experience as "beginner" | "intermediate" | "advanced") || undefined,
      country: countryLabel || undefined,
      city: cityLabel || undefined,
      source: formData.source || undefined,
      message: formData.message || undefined,
    });
  };

  if (isSubmitted) {
    return (
      <section id="register" ref={ref} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center glass rounded-3xl p-12"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              تم التسجيل بنجاح!
            </h3>
            <p className="text-white/70 text-lg mb-6">
              شكراً لتسجيلك في FullStack BootCamp. سيتواصل معك فريقنا خلال 24 ساعة.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
            >
              تسجيل شخص آخر
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/images/tech-icons-bg.png')" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              سجل <span className="gradient-text">الآن</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              انضم إلى برنامج FullStack BootCamp وابدأ رحلتك نحو الاحتراف في عالم البرمجة.
              فريقنا سيتواصل معك لتأكيد التسجيل وتزويدك بكافة التفاصيل.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {[
                { num: 1, text: "املأ نموذج التسجيل" },
                { num: 2, text: "سيتواصل معك فريقنا" },
                { num: 3, text: "ابدأ رحلتك في البرمجة" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shrink-0">
                    <span className="text-white font-bold font-['Poppins']">
                      {step.num}
                    </span>
                  </div>
                  <span className="text-white/80">{step.text}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 glass-light rounded-2xl p-6">
              <p className="text-white/60 mb-4">أو تواصل معنا مباشرة:</p>
              <a
                href="tel:00962778111010"
                className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-['Poppins']" dir="ltr">+962 7 7811 1010</span>
              </a>
              <a
                href="https://wa.me/962778111010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors text-lg mt-3"
              >
                <MessageSquare className="w-5 h-5" />
                <span>واتساب</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <div className="space-y-6">
                {/* Personal Info */}
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-sm flex items-center justify-center">1</span>
                    المعلومات الشخصية
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-white/80 mb-2 block">
                        الاسم الكامل *
                      </Label>
                      <div className="relative">
                        <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <Input
                          id="name"
                          placeholder="محمد أحمد"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="pr-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white/80 mb-2 block">
                        البريد الإلكتروني *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="example@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pr-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white/80 mb-2 block">
                        رقم الهاتف *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+962 78 111 0101"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pr-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-white/80 mb-2 block">
                        مستوى الخبرة
                      </Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="اختر مستوى الخبرة" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a2744] border-white/10">
                          {experienceLevels.map((level) => (
                            <SelectItem
                              key={level.value}
                              value={level.value}
                              className="text-white hover:bg-white/10"
                            >
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Location Info */}
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-sm flex items-center justify-center">2</span>
                    معلومات الموقع
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white/80 mb-2 block">الدولة</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => handleInputChange("country", value)}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue placeholder="اختر الدولة" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a2744] border-white/10">
                          {countries.map((country) => (
                            <SelectItem
                              key={country.value}
                              value={country.value}
                              className="text-white hover:bg-white/10"
                            >
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-white/80 mb-2 block">المدينة</Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => handleInputChange("city", value)}
                        disabled={selectedCountry !== "jordan"}
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white disabled:opacity-50">
                          <SelectValue placeholder="اختر المدينة" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1a2744] border-white/10">
                          {jordanCities.map((city) => (
                            <SelectItem
                              key={city.value}
                              value={city.value}
                              className="text-white hover:bg-white/10"
                            >
                              {city.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-sm flex items-center justify-center">3</span>
                    معلومات إضافية
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white/80 mb-2 block">
                        كيف سمعت عنا؟
                      </Label>
                      <Input
                        placeholder="وسائل التواصل، صديق، إعلان، إلخ..."
                        value={formData.source}
                        onChange={(e) => handleInputChange("source", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <Label className="text-white/80 mb-2 block">
                        رسالة إضافية
                      </Label>
                      <Textarea
                        placeholder="أخبرنا عن أهدافك أو أي استفسارات لديك..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-cyan-500 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-bold text-lg py-6 rounded-xl glow-cyan"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      جاري التسجيل...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      تسجيل الآن
                    </span>
                  )}
                </Button>

                <p className="text-white/40 text-sm text-center">
                  بتسجيلك، توافق على{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    شروط الخدمة
                  </a>{" "}
                  و{" "}
                  <a href="#" className="text-cyan-400 hover:underline">
                    سياسة الخصوصية
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
