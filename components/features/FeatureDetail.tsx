"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Feature } from "@/lib/features-data";

interface FeatureDetailProps {
  feature: Feature;
  index: number;
}

export function FeatureDetail({ feature, index }: FeatureDetailProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="py-20 border-b border-slate-100 last:border-b-0"
    >
      <div className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:[direction:ltr]"}`}>
        {/* Text side */}
        <motion.div variants={fadeUp} dir="rtl" className={isEven ? "" : "md:[direction:rtl]"}>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary mb-5">
            {feature.icon}
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{feature.title}</h2>
          <p className="text-brand-primary font-medium mb-4">{feature.subtitle}</p>
          <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
          <ul className="space-y-2">
            {feature.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-brand-accent-light shrink-0" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mockup side */}
        <motion.div variants={fadeUp} className={isEven ? "" : "md:[direction:rtl]"}>
          <Card className="border-slate-200 shadow-md overflow-hidden">
            <div className="h-8 bg-slate-100 border-b border-slate-200 flex items-center gap-1.5 px-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-3 h-5 bg-white rounded border border-slate-200 flex items-center px-2">
                <span className="text-[10px] text-slate-400">portal.bornaplastic.ir / {feature.mockupLabel}</span>
              </div>
            </div>
            <CardContent className="p-8 min-h-[200px] flex items-center justify-center bg-slate-50">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary mb-3">
                  {feature.icon}
                </div>
                <p className="text-slate-500 text-sm">{feature.mockupLabel}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
