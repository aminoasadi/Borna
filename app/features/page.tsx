import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { FeatureTextList } from "@/components/features/FeatureTextList";

export const metadata = {
  title: "امکانات | برنا پلاستیک",
  description: "تمام امکانات پورتال هوشمند بنکداران برنا",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main dir="rtl">
        {/* Hero */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              امکانات پورتال برنا
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              همه ابزارهایی که یک بنکدار حرفه‌ای نیاز دارد، در یک پلتفرم یکپارچه
            </p>
          </div>
        </section>

        {/* Sticky scroll layout */}
        <div className="bg-white">
          <div className="container mx-auto px-6">
            <div className="flex gap-12 items-start">
              {/* Scrollable text */}
              <FeatureTextList />

              {/* Sticky mockup — desktop only */}
              <div className="hidden lg:block w-[600px] shrink-0 sticky top-24 py-16">
                <DashboardMockup />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
