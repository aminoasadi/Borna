"use client";

import { motion } from "framer-motion";
import { UserPlus, CheckCircle, Rocket } from "lucide-react";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

const steps = [
  { number: "۱", icon: UserPlus, title: "ثبت‌نام بنکدار", description: "با کد ملی و اطلاعات کسب‌وکار خود در کمتر از ۵ دقیقه ثبت‌نام کنید." },
  { number: "۲", icon: CheckCircle, title: "تأیید توسط برنا", description: "تیم برنا درخواست شما را بررسی و حساب کاربری را فعال می‌کند." },
  { number: "۳", icon: Rocket, title: "شروع مدیریت آنلاین", description: "به تمام امکانات پورتال دسترسی داشته باشید و سفارش اول خود را ثبت کنید." },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">شروع به کار آسان است</h2>
          <p className="text-slate-500 text-lg">در سه مرحله ساده به پورتال برنا متصل شوید</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-12 right-[16.67%] left-[16.67%] h-0.5 bg-gradient-to-l from-brand-primary/20 via-brand-primary/40 to-brand-primary/20" />

          {steps.map((step) => (
            <motion.div key={step.title} variants={cardVariant} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-24 h-24 rounded-full bg-white border-2 border-brand-primary/20 flex flex-col items-center justify-center mb-6 shadow-sm">
                <step.icon className="h-8 w-8 text-brand-primary mb-0.5" />
                <span className="text-xs font-bold text-brand-primary/60">مرحله {step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
