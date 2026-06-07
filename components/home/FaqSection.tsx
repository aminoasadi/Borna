"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp } from "@/lib/animations";

const faqs = [
  {
    question: "چه کسانی می‌توانند از پورتال استفاده کنند؟",
    answer:
      "پورتال برنا مخصوص بنکداران و توزیع‌کنندگان مجاز برنا است. برای دسترسی، ابتدا باید ثبت‌نام کرده و توسط تیم برنا تأیید شوید.",
  },
  {
    question: "اتصال به سیستم آسا چطور کار می‌کند؟",
    answer:
      "بعد از فعال‌سازی حساب، با وارد کردن اطلاعات سیستم حسابداری آسا خود، سفارش‌ها به‌صورت خودکار همگام‌سازی می‌شوند.",
  },
  {
    question: "آیا استفاده از پورتال هزینه دارد؟",
    answer:
      "خیر، استفاده از پورتال برنا برای تمام بنکداران مجاز کاملاً رایگان است. هیچ هزینه اشتراکی وجود ندارد.",
  },
  {
    question: "در صورت بروز مشکل، چطور پشتیبانی می‌گیرم؟",
    answer:
      "از طریق سیستم تیکتینگ داخل پورتال یا صفحه «ارتباط با ما» می‌توانید درخواست پشتیبانی ثبت کنید.",
  },
  {
    question: "آیا پورتال روی موبایل هم کار می‌کند؟",
    answer:
      "بله، پورتال کاملاً ریسپانسیو است و روی تمام دستگاه‌ها — موبایل، تبلت، و دسکتاپ — قابل استفاده است.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            سوالات پرتکرار
          </h2>
          <p className="text-slate-500 text-lg">
            پاسخ سوالات رایج بنکداران درباره پورتال
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Accordion className="gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl px-5 shadow-none data-open:border-brand-primary/30 not-last:border-b not-last:border-slate-200"
              >
                <AccordionTrigger className="text-slate-800 font-semibold text-right hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-500 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
