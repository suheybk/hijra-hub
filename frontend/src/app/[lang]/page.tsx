import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Building2, Briefcase, FileCheck, ArrowRight } from "lucide-react";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { SearchBar } from "@/components/SearchBar";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const translations: Record<string, {
    servicesTitle: string;
    servicesSub: string;
    service1: string;
    service1Desc: string;
    service2: string;
    service2Desc: string;
    service3: string;
    service3Desc: string;
    cta: string;
  }> = {
    en: {
      servicesTitle: "Complete Migration Support",
      servicesSub: "Everything you need to move to Saudi Arabia with confidence.",
      service1: "Real Estate",
      service1Desc: "Browse verified listings for apartments, villas, and land across the Kingdom.",
      service2: "Residency Support",
      service2Desc: "Guidance on Premium Residency and legal requirements for investors.",
      service3: "Job Matching",
      service3Desc: "Connect with top employers looking for talent like you.",
      cta: "Learn More"
    },
    ar: {
      servicesTitle: "دعم كامل للهجرة",
      servicesSub: "كل ما تحتاجه للانتقال إلى المملكة العربية السعودية بثقة.",
      service1: "العقارات",
      service1Desc: "تصفح قوائم موثقة للشقق والفلل والأراضي في جميع أنحاء المملكة.",
      service2: "دعم الإقامة",
      service2Desc: "إرشادات حول الإقامة المميزة والمتطلبات القانونية للمستثمرين.",
      service3: "مطابقة الوظائف",
      service3Desc: "تواصل مع أفضل أصحاب العمل الذين يبحثون عن مواهب مثلك.",
      cta: "اعرف المزيد"
    },
    tr: {
      servicesTitle: "Kapsamlı Göç Desteği",
      servicesSub: "Suudi Arabistan'a güvenle taşınmak için ihtiyacınız olan her şey.",
      service1: "Gayrimenkul",
      service1Desc: "Krallık genelinde daireler, villalar ve araziler için doğrulanmış ilanları inceleyin.",
      service2: "İkamet Desteği",
      service2Desc: "Premium İkamet ve yatırımcılar için yasal gereklilikler hakkında rehberlik.",
      service3: "İş Eşleştirme",
      service3Desc: "Sizin gibi yetenekler arayan önde gelen işverenlerle bağlantı kurun.",
      cta: "Daha Fazla Bilgi"
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar lang={lang} />

      <Hero lang={lang} />

      <FeaturedProperties lang={lang} />

      <SearchBar lang={lang} />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">{t.servicesTitle}</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">{t.servicesSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t.service1}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">{t.service1Desc}</p>
            <a href={`/${lang}/properties`} className="flex items-center text-emerald-600 font-medium hover:text-emerald-700">
              {t.cta} <ArrowRight className="h-4 w-4 ms-2 rtl:rotate-180" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
              <FileCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t.service2}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">{t.service2Desc}</p>
            <a href={`/${lang}/services`} className="flex items-center text-emerald-600 font-medium hover:text-emerald-700">
              {t.cta} <ArrowRight className="h-4 w-4 ms-2 rtl:rotate-180" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-stone-900">{t.service3}</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">{t.service3Desc}</p>
            <a href={`/${lang}/jobs`} className="flex items-center text-emerald-600 font-medium hover:text-emerald-700">
              {t.cta} <ArrowRight className="h-4 w-4 ms-2 rtl:rotate-180" />
            </a>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
