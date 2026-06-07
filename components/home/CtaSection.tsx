"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

function CornerShape({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className={className}
      fill="currentColor"
    >
      <path d="M18 92c18-10 34-28 42-50 8 22 24 40 42 50H18Z" opacity="0.55" />
      <path d="M34 72c10-8 18-20 22-34 4 14 12 26 22 34H34Z" opacity="0.35" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="relative bg-background py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[#141414] px-6 py-16 text-center shadow-[0_24px_80px_-24px_rgba(15,23,42,0.45)] md:px-12 md:py-20">
            <CornerShape className="pointer-events-none absolute -bottom-2 start-0 h-32 w-32 text-white/10 md:h-40 md:w-40" />
            <CornerShape className="pointer-events-none absolute -bottom-2 end-0 h-32 w-32 scale-x-[-1] text-white/10 md:h-40 md:w-40" />

            <motion.h2
              variants={fadeUp}
              className="relative z-10 mb-5 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              همین الان به پورتال برنا بپیوندید
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="relative z-10 mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/55 md:mb-12 md:text-lg"
            >
              هزاران بنکدار در سراسر ایران از پورتال برنا استفاده می‌کنند
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="relative z-10 mx-auto w-full max-w-xl"
            >
              <div
                dir="rtl"
                className="flex items-center gap-2 rounded-full border-2 border-white/10 bg-white p-2 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.35)] md:p-2.5"
              >
                <Link
                  href="#"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#141414] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#262626] md:px-6 md:py-3.5"
                >
                  ورود به پورتال
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <div className="min-w-0 flex-1 px-2 text-right text-sm text-slate-400 md:px-4 md:text-base">
                  آماده شروع مدیریت آنلاین هستید؟
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-brand-primary"
            >
              یا با تیم برنا تماس بگیرید ←
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
