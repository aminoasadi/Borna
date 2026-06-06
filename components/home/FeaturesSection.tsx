"use client";

import { motion } from "framer-motion";
import { Link2, ClipboardList, Award, Receipt, BarChart3, ShoppingCart, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

const features = [
  { icon: Link2, title: "اتصال به حسابداری آسا", description: "سفارش‌های شما مستقیماً با سیستم حسابداری آسا همگام‌سازی می‌شود و نیازی به ورود دستی داده نیست." },
  { icon: ClipboardList, title: "ثبت و پیگیری سفارش", description: "سفارش جدید ثبت کنید و وضعیت آن را لحظه‌به‌لحظه دنبال کنید — از پردازش تا تحویل." },
  { icon: Award, title: "باشگاه مشتریان برنا", description: "از امتیازات و تخفیف‌های ویژه اعضای باشگاه بنکداران بهره‌مند شوید و به سطوح بالاتر ارتقا یابید." },
  { icon: Receipt, title: "فاکتور و رسید خرید", description: "تمام فاکتورها، رسیدها، و اسناد ترخیص خود را آنلاین مشاهده و دانلود کنید." },
  { icon: BarChart3, title: "تاریخچه خرید", description: "عملکرد خرید و تحلیل سبد محصولات خود را در هر بازه زمانی ببینید." },
  { icon: ShoppingCart, title: "فروشگاه آنلاین", description: "محصولات برنا را مرور، مقایسه، و مستقیماً از پورتال سفارش دهید." },
  { icon: Headphones, title: "پشتیبانی و تیکتینگ", description: "تیکت ارسال کنید و پیگیری درخواست‌هایتان را در یک پنجره مدیریت کنید." },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">همه چیزی که یک بنکدار نیاز دارد</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">پورتال برنا طراحی شده تا تمام فرآیندهای خرید و مدیریت شما را ساده کند</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariant}>
              <Card className="h-full border-slate-200 hover:border-brand-primary/30 hover:shadow-md transition-all duration-200 group">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/15 transition-colors">
                    <feature.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
