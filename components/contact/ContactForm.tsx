"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { fadeUp } from "@/lib/animations";

interface FormState {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const subjects = [
  "سوال فنی",
  "پشتیبانی سفارش",
  "امور مالی",
  "ثبت‌نام و دسترسی",
  "سایر",
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "نام الزامی است";
  if (!form.phone.trim()) {
    errors.phone = "شماره تلفن الزامی است";
  } else if (!/^09[0-9]{9}$/.test(form.phone.trim())) {
    errors.phone = "شماره تلفن معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)";
  }
  if (!form.message.trim()) {
    errors.message = "پیام الزامی است";
  } else if (form.message.trim().length < 20) {
    errors.message = "پیام باید حداقل ۲۰ کاراکتر باشد";
  }
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">پیام شما دریافت شد</h3>
        <p className="text-slate-500 text-sm max-w-xs">تیم برنا پلاستیک در اسرع وقت با شما تماس خواهد گرفت.</p>
      </motion.div>
    );
  }

  const inputClass = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:border-brand-primary transition-colors";
  const errorClass = "text-xs text-red-500 mt-1";
  const labelClass = "block text-sm font-medium text-slate-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" dir="rtl" noValidate>
      <div>
        <label className={labelClass}>نام و نام خانوادگی <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="علی محمدی"
          className={`${inputClass} ${errors.name ? "border-red-400 focus:ring-red-300/40" : ""}`}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <label className={labelClass}>شماره تلفن <span className="text-red-500">*</span></label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="09123456789"
          dir="ltr"
          className={`${inputClass} ${errors.phone ? "border-red-400 focus:ring-red-300/40" : ""}`}
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      <div>
        <label className={labelClass}>ایمیل <span className="text-slate-400 font-normal text-xs">(اختیاری)</span></label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ali@example.com"
          dir="ltr"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>موضوع</label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={inputClass}
        >
          {subjects.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>پیام <span className="text-red-500">*</span></label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="پیام خود را اینجا بنویسید..."
          className={`${inputClass} resize-none ${errors.message ? "border-red-400 focus:ring-red-300/40" : ""}`}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-brand-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-brand-light transition-colors"
      >
        <Send className="h-4 w-4" />
        ارسال پیام
      </button>
    </form>
  );
}
