import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "ارتباط با ما | برنا پلاستیک",
  description: "با تیم برنا پلاستیک در تماس باشید",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "آدرس",
    value: "تهران، خیابان ولیعصر، پلاک ۱۲۳، طبقه ۴",
  },
  {
    icon: Phone,
    label: "تلفن",
    value: "۰۲۱-۸۸۱۲۳۴۵۶",
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: "info@bornaplastic.ir",
  },
  {
    icon: Clock,
    label: "ساعات کاری",
    value: "شنبه تا چهارشنبه: ۸ تا ۱۷ — پنج‌شنبه: ۸ تا ۱۳",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">ارتباط با ما</h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              سوال دارید؟ تیم برنا پلاستیک آماده پاسخگویی است
            </p>
          </div>
        </section>

        {/* Two-column */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Form col */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">پیام بفرستید</h2>
                <ContactForm />
              </div>

              {/* Info col */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">اطلاعات تماس</h2>
                <div className="space-y-5 mb-8">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 mb-0.5">{label}</div>
                        <div className="text-sm text-slate-700">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-400 text-sm">نقشه موقعیت مکانی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
