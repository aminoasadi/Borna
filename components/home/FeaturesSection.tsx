"use client";

import { motion } from "framer-motion";
import {
  Link2,
  ClipboardList,
  Award,
  Receipt,
  BarChart3,
  ShoppingCart,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
  accent?: "brand" | "green" | "amber";
  preview?: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: Link2,
    title: "اتصال به حسابداری آسا",
    description:
      "سفارش‌های شما مستقیماً با سیستم حسابداری آسا همگام‌سازی می‌شود و نیازی به ورود دستی داده نیست.",
    className: "md:col-span-2 lg:col-span-4 lg:row-span-2",
    accent: "brand",
    preview: (
      <div className="mt-auto space-y-2 pt-6">
        <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <span className="text-slate-400">وضعیت اتصال</span>
            <span className="rounded-full bg-green-50 px-2 py-0.5 font-medium text-green-600">
              فعال
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="rounded-md bg-white px-2 py-1 shadow-sm">آسا</span>
            <span className="text-slate-300">↔</span>
            <span className="rounded-md bg-white px-2 py-1 shadow-sm">پورتال برنا</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "همگام‌سازی", value: "خودکار" },
            { label: "آخرین بروزرسانی", value: "۲ دقیقه پیش" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm"
            >
              <div className="text-[10px] text-slate-400">{item.label}</div>
              <div className="mt-0.5 text-xs font-bold text-slate-800">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: ClipboardList,
    title: "ثبت و پیگیری سفارش",
    description:
      "سفارش جدید ثبت کنید و وضعیت آن را لحظه‌به‌لحظه دنبال کنید — از پردازش تا تحویل.",
    className: "md:col-span-2 lg:col-span-8 lg:row-span-1",
    accent: "brand",
    preview: (
      <div className="mt-5 flex flex-wrap gap-2">
        {[
          { label: "در پردازش", value: "۳", tone: "bg-blue-50 text-blue-700" },
          { label: "تحویل‌شده", value: "۲۱", tone: "bg-green-50 text-green-700" },
          { label: "این ماه", value: "+۱۲٪", tone: "bg-slate-100 text-slate-700" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex min-w-[88px] flex-1 items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2"
          >
            <span className="text-[11px] text-slate-500">{item.label}</span>
            <span className={cn("rounded-md px-2 py-0.5 text-xs font-bold", item.tone)}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Award,
    title: "باشگاه مشتریان برنا",
    description:
      "از امتیازات و تخفیف‌های ویژه اعضای باشگاه بنکداران بهره‌مند شوید و به سطوح بالاتر ارتقا یابید.",
    className: "md:col-span-1 lg:col-span-4 lg:row-span-1",
    accent: "amber",
  },
  {
    icon: Receipt,
    title: "فاکتور و رسید خرید",
    description:
      "تمام فاکتورها، رسیدها، و اسناد ترخیص خود را آنلاین مشاهده و دانلود کنید.",
    className: "md:col-span-1 lg:col-span-4 lg:row-span-1",
    accent: "brand",
  },
  {
    icon: BarChart3,
    title: "تاریخچه خرید",
    description:
      "عملکرد خرید و تحلیل سبد محصولات خود را در هر بازه زمانی ببینید.",
    className: "md:col-span-2 lg:col-span-4 lg:row-span-1",
    accent: "green",
    preview: (
      <div className="mt-5 flex h-14 items-end gap-1.5">
        {[40, 65, 45, 80, 55, 72, 90].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-md bg-brand-primary/15"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: ShoppingCart,
    title: "فروشگاه آنلاین",
    description:
      "محصولات برنا را مرور، مقایسه، و مستقیماً از پورتال سفارش دهید.",
    className: "md:col-span-1 lg:col-span-4 lg:row-span-1",
    accent: "brand",
  },
  {
    icon: Headphones,
    title: "پشتیبانی و تیکتینگ",
    description:
      "تیکت ارسال کنید و پیگیری درخواست‌هایتان را در یک پنجره مدیریت کنید.",
    className: "md:col-span-1 lg:col-span-4 lg:row-span-1",
    accent: "green",
  },
];

const accentStyles = {
  brand: {
    iconWrap: "bg-brand-primary/10 text-brand-primary",
    ring: "from-brand-primary/10 to-transparent",
  },
  green: {
    iconWrap: "bg-green-50 text-green-600",
    ring: "from-green-100 to-transparent",
  },
  amber: {
    iconWrap: "bg-amber-50 text-amber-600",
    ring: "from-amber-100 to-transparent",
  },
};

function FeatureCard({ feature }: { feature: Feature }) {
  const accent = accentStyles[feature.accent ?? "brand"];
  const Icon = feature.icon;

  return (
    <div className="relative flex h-full min-h-[180px] flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-md">
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -start-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-80",
          accent.ring
        )}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1 text-right">
          <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.description}</p>
        </div>
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
            accent.iconWrap
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {feature.preview}
    </div>
  );
}

export function FeaturesSection() {
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
          <h2 className="mb-3 text-3xl font-extrabold text-slate-900">
            همه چیزی که یک بنکدار نیاز دارد
          </h2>
          <p className="mx-auto max-w-xl text-lg text-slate-500">
            پورتال برنا طراحی شده تا تمام فرآیندهای خرید و مدیریت شما را ساده کند
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-fr"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariant}
              className={cn("min-h-[180px]", feature.className)}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
