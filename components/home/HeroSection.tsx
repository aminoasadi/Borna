"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { fadeUp, staggerContainer, cardVariant } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1B4F72]/5 via-white to-white pt-32 pb-20">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1B4F72 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text */}
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <motion.div variants={cardVariant}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-light" />
                پورتال ویژه بنکداران مجاز برنا
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-snug mb-5">
              پورتال هوشمند
              <br />
              <span className="text-brand-primary">بنکداران برنا</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
              مدیریت سفارش، فاکتور، و ارتباط با برنا — همه در یک پلتفرم یکپارچه
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-light text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors"
              >
                ورود به پورتال
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold text-base transition-colors"
              >
                <Play className="h-4 w-4 text-brand-primary" />
                مشاهده امکانات
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-10 pt-8 border-t border-slate-100">
              {[
                { value: "+۵۰۰", label: "بنکدار فعال" },
                { value: "+۱۲۰", label: "محصول متنوع" },
                { value: "۳۰ سال", label: "سابقه فعالیت" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mockup */}
          <motion.div variants={cardVariant} className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-2xl blur-2xl" />
              <DashboardMockup />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
