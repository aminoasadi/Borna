import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeatureDetail } from "@/components/features/FeatureDetail";
import { features } from "@/lib/features-data";

export const metadata = {
  title: "امکانات | برنا پلاستیک",
  description: "تمام امکانات پورتال هوشمند بنکداران برنا",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Small hero */}
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

        {/* Feature details */}
        <div className="bg-white">
          {features.map((feature, index) => (
            <FeatureDetail key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
