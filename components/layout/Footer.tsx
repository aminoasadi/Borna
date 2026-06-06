// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="برنا" width={32} height={32} />
              <span className="text-base font-bold text-white">برنا پلاستیک</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              تولیدکننده محصولات پلاستیکی خانگی با بیش از ۳۰ سال سابقه در ایران. پورتال بنکداران برنا برای مدیریت آسان‌تر روابط تجاری طراحی شده است.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "صفحه اصلی" },
                { href: "/features", label: "امکانات پورتال" },
                { href: "/contact", label: "ارتباط با ما" },
                { href: "#", label: "ورود به پورتال" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">اطلاعات تماس</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-accent-light shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">تهران، شهرک صنعتی قرچک، خیابان صنعت، پلاک ۱۲</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-accent-light shrink-0" />
                <span className="text-sm text-slate-400" dir="ltr">021-55001200</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-accent-light shrink-0" />
                <span className="text-sm text-slate-400">info@bornaplastic.ir</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-brand-accent-light shrink-0" />
                <span className="text-sm text-slate-400">شنبه تا چهارشنبه، ۸ تا ۱۷</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © ۱۴۰۴ برنا پلاستیک — تمامی حقوق محفوظ است
          </p>
          <div className="text-xs text-slate-500">
            ساخته شده با ❤️ برای بنکداران ایران
          </div>
        </div>
      </div>
    </footer>
  );
}
