"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Package, Award } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Stat {
  icon: React.ElementType;
  prefix: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    prefix: "+",
    value: 500,
    suffix: "",
    label: "بنکدار فعال",
    description: "در سراسر ایران از پورتال برنا استفاده می‌کنند",
  },
  {
    icon: Package,
    prefix: "+",
    value: 120,
    suffix: "",
    label: "محصول متنوع",
    description: "از کیسه فریز تا سفره یکبارمصرف",
  },
  {
    icon: Award,
    prefix: "",
    value: 30,
    suffix: " سال",
    label: "سابقه فعالیت",
    description: "سه دهه تولید و خدمت به صنعت",
  },
];

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return <>{count.toLocaleString("fa-IR")}</>;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white border-y border-slate-100" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary mb-5 group-hover:bg-brand-primary/15 transition-colors">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-4xl font-extrabold text-slate-900 mb-2">
                {stat.prefix}
                <CountUp target={stat.value} active={inView} />
                {stat.suffix}
              </div>
              <div className="text-base font-semibold text-slate-700 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
