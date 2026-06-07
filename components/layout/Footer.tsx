import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Globe, Mail, Phone, Share2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const companyLinks = [
  { href: "/", label: "صفحه اصلی" },
  { href: "/features", label: "امکانات پورتال" },
  { href: "/contact", label: "ارتباط با ما" },
  { href: "#", label: "ورود به پورتال" },
];

const helpLinks = [
  { href: "/contact", label: "پشتیبانی مشتریان" },
  { href: "/#faq", label: "سوالات متداول" },
  { href: "#", label: "شرایط استفاده" },
  { href: "#", label: "حریم خصوصی" },
];

const socialLinks = [
  { href: "#", label: "وب‌سایت", icon: Globe },
  { href: "mailto:info@bornaplastic.ir", label: "ایمیل", icon: Mail },
  { href: "tel:02155001200", label: "تلفن", icon: Phone },
  { href: "#", label: "اشتراک‌گذاری", icon: Share2 },
];

const partnerBadges = [
  "برنا پلاستیک",
  "پورتال بنکداران",
  "همگام با آسا",
  "۳۰ سال سابقه",
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div dir="rtl" className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <Image src="/logo.svg" alt="برنا پلاستیک" width={36} height={36} />
              <span className="text-lg font-bold text-slate-900">برنا پلاستیک</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              برنا پلاستیک با بیش از ۳۰ سال سابقه، پورتال یکپارچه‌ای برای مدیریت
              سفارش، فاکتور و ارتباط بنکداران فراهم کرده است.
            </p>
            <div className="border-t border-slate-200 pt-5">
              <div className="flex items-center gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-slate-400 transition-colors hover:text-slate-900"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-slate-900">شرکت</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-slate-900">راهنما</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-slate-900">عضویت در خبرنامه</h3>
            <form className="mb-6 flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Input
                type="email"
                placeholder="ایمیل شما..."
                className="h-11 flex-1 rounded-none border-0 bg-transparent px-4 text-right shadow-none focus-visible:ring-0"
              />
              <button
                type="submit"
                aria-label="عضویت در خبرنامه"
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#141414] text-white transition-colors hover:bg-[#262626]"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            </form>

            <div className="border-t border-slate-200 pt-5">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {partnerBadges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium text-slate-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 text-xs text-slate-400 md:flex-row">
          <p>© ۱۴۰۴ برنا پلاستیک — تمامی حقوق محفوظ است</p>
          <p>ساخته شده برای بنکداران ایران</p>
        </div>
      </div>
    </footer>
  );
}
