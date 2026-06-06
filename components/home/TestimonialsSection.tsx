"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

const testimonials = [
  {
    name: "محمد رضایی",
    role: "بنکدار — تهران",
    initials: "م‌ر",
    text: "از وقتی پورتال برنا رو شروع کردم، دیگه نگران پیگیری سفارش‌ها نیستم. همه چیز یکجاست.",
    rating: 5,
  },
  {
    name: "حسین احمدی",
    role: "بنکدار — اصفهان",
    initials: "ح‌ا",
    text: "اتصال به آسا واقعاً کار حسابدارم رو راحت کرد. دیگه لازم نیست دوباره وارد کنم.",
    rating: 5,
  },
  {
    name: "علی محمودی",
    role: "بنکدار — شیراز",
    initials: "ع‌م",
    text: "فاکتورها همیشه دم‌دست‌ان. باشگاه مشتریان هم خیلی بهم کمک کرده که تخفیف بگیرم.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            بنکدارانی که به برنا اعتماد کرده‌اند
          </h2>
          <p className="text-slate-500 text-lg">
            تجربه واقعی بنکداران از استفاده از پورتال
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariant}>
              <Card className="h-full border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6 flex flex-col gap-4">
                  <Stars count={t.rating} />
                  <p className="text-slate-600 leading-relaxed text-sm flex-1">
                    &laquo;{t.text}&raquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xs font-bold shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-800">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
