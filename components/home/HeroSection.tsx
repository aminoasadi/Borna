"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { DashboardMockup } from "./DashboardMockup";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pb-[120px] pt-[120px]">
      {/* Grid pattern */}
      <div
        aria-hidden
        className="bg-flow-grid pointer-events-none absolute inset-0"
        style={{
          opacity: 0.28,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 45%, transparent 90%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 45%, transparent 90%)",
        }}
      />

      {/* Radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(27,79,114,0.1),transparent_65%)]"
      />

      {/* Subtle glow behind hero content */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 h-[420px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full bg-brand-primary/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/60 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-accent-light opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-accent-light" />
              </span>
              پورتال اختصاصی مشتریان برنا پلاستیک
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            پورتال هوشمند
            <br />
            <span className="text-brand-primary">بنکداران برنا</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-[700px] text-lg leading-relaxed text-muted-foreground"
          >
            مدیریت سفارشات، فاکتورها، باشگاه مشتریان و ارتباط مستقیم با برنا در
            یک پلتفرم یکپارچه.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-brand-light hover:shadow-lg active:scale-[0.98]"
            >
              ورود به پورتال
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-muted hover:shadow-md active:scale-[0.98]"
            >
              مشاهده امکانات
            </Link>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative mt-20 w-full max-w-[1100px]"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-transparent opacity-70 blur-2xl"
            />
            <div className="relative transition-transform duration-300 ease-out group-hover:scale-[1.01]">
              <DashboardMockup />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
