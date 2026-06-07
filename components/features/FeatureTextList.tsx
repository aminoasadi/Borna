"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { features } from "@/lib/features-data";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function FeatureTextList() {
  return (
    <div className="flex-1 min-w-0 py-16 space-y-20">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-b border-slate-100 pb-20 last:border-b-0"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary mb-5">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              {feature.title}
            </h2>
            <p className="text-brand-primary font-medium mb-4">
              {feature.subtitle}
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-lg">
              {feature.description}
            </p>
            <ul className="space-y-2.5">
              {feature.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5 text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
