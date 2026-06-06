"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Phone } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-brand-primary">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container mx-auto px-6 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl lg:text-4xl font-extrabold text-white mb-4"
          >
            همین الان به پورتال برنا بپیوندید
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-blue-200 text-lg mb-10 max-w-lg mx-auto"
          >
            هزاران بنکدار در سراسر ایران از پورتال برنا استفاده می‌کنند
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-brand-primary hover:bg-white/90 px-8 py-3 rounded-lg font-bold transition-colors"
            >
              ورود به پورتال
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="h-4 w-4" />
              تماس با ما
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
