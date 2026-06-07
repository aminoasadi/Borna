"use client";

import { motion } from "framer-motion";
import { UserPlus, CheckCircle, Rocket, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
  accent: "brand" | "amber" | "green";
  preview: React.ReactNode;
};

const steps: Step[] = [
  {
    number: "۱",
    icon: UserPlus,
    title: "ثبت‌نام بنکدار",
    description: "با کد ملی و اطلاعات کسب‌وکار خود در کمتر از ۵ دقیقه ثبت‌نام کنید.",
    className:
      "md:col-span-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2",
    accent: "brand",
    preview: (
      <div className="mt-auto space-y-2 pt-6">
        <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
          <div className="mb-2 text-[11px] font-medium text-slate-500">فرم ثبت‌نام</div>
          <div className="space-y-2">
            {["کد ملی", "نام کسب‌وکار", "شهر"].map((field) => (
              <div
                key={field}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2 text-xs"
              >
                <span className="text-slate-400">{field}</span>
                <span className="h-1.5 w-16 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
          <div className="text-[10px] text-slate-400">زمان تکمیل</div>
          <div className="mt-0.5 text-xs font-bold text-slate-800">کمتر از ۵ دقیقه</div>
        </div>
      </div>
    ),
  },
  {
    number: "۲",
    icon: CheckCircle,
    title: "تأیید توسط برنا",
    description: "تیم برنا درخواست شما را بررسی و حساب کاربری را فعال می‌کند.",
    className:
      "md:col-span-2 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:row-span-1",
    accent: "amber",
    preview: (
      <div className="mt-5 flex flex-wrap gap-2">
        {[
          { label: "دریافت درخواست", done: true },
          { label: "بررسی مدارک", done: true },
          { label: "فعال‌سازی حساب", done: false },
        ].map((item) => (
          <div
            key={item.label}
            className="flex min-w-[120px] flex-1 items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2"
          >
            <span className="text-[11px] text-slate-500">{item.label}</span>
            <span
              className={cn(
                "rounded-md px-2 py-0.5 text-[10px] font-bold",
                item.done ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
              )}
            >
              {item.done ? "انجام شد" : "در انتظار"}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "۳",
    icon: Rocket,
    title: "شروع مدیریت آنلاین",
    description: "به تمام امکانات پورتال دسترسی داشته باشید و سفارش اول خود را ثبت کنید.",
    className:
      "md:col-span-2 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:row-span-1",
    accent: "green",
    preview: (
      <div className="mt-5 grid gap-2 sm:grid-cols-3">
        {[
          { label: "ثبت سفارش", value: "آماده" },
          { label: "داشبورد", value: "فعال" },
          { label: "پشتیبانی", value: "۲۴/۷" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
          >
            <div className="text-[10px] text-slate-400">{item.label}</div>
            <div className="mt-1 text-xs font-bold text-slate-800">{item.value}</div>
          </div>
        ))}
      </div>
    ),
  },
];

const accentStyles = {
  brand: {
    iconWrap: "bg-brand-primary/10 text-brand-primary",
    ring: "from-brand-primary/10 to-transparent",
    badge: "bg-brand-primary/10 text-brand-primary",
  },
  amber: {
    iconWrap: "bg-amber-50 text-amber-600",
    ring: "from-amber-100 to-transparent",
    badge: "bg-amber-50 text-amber-700",
  },
  green: {
    iconWrap: "bg-green-50 text-green-600",
    ring: "from-green-100 to-transparent",
    badge: "bg-green-50 text-green-700",
  },
};

function StepCard({ step }: { step: Step }) {
  const accent = accentStyles[step.accent];
  const Icon = step.icon;

  return (
    <div className="relative flex h-full min-h-[200px] flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-md">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -start-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-80",
          accent.ring
        )}
      />
      <div className="relative mb-4 flex items-start justify-between gap-4">
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-[11px] font-semibold",
            accent.badge
          )}
        >
          مرحله {step.number}
        </span>
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
            accent.iconWrap
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col text-right">
        <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
        {step.preview}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 text-3xl font-extrabold text-slate-900">شروع به کار آسان است</h2>
          <p className="text-lg text-slate-500">در سه مرحله ساده به پورتال برنا متصل شوید</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-fr [direction:ltr]"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={cardVariant}
              className={cn("min-h-[200px]", step.className)}
            >
              <StepCard step={step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
