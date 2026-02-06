import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Building2, Users, Store, BookOpen, Heart, ArrowRight, Sparkles } from "lucide-react";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";

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
    service4: string;
    service4Desc: string;
    cta: string;
    brotherhoodCTA: string;
    brotherhoodTitle: string;
    brotherhoodDesc: string;
    findMentor: string;
  }> = {
    en: {
      servicesTitle: "Complete Migration Support",
      servicesSub: "Everything you need to move to Saudi Arabia with confidence.",
      service1: "Real Estate",
      service1Desc: "Browse verified listings for apartments, villas, and land across the Kingdom.",
      service2: "Brotherhood Network",
      service2Desc: "Connect with experienced mentors who can guide your transition.",
      service3: "Madinah Market",
      service3Desc: "Buy, sell, and trade with fellow community members.",
      service4: "Adaptation Guide",
      service4Desc: "Complete guide for visa, culture, language, and practical information.",
      cta: "Explore",
      brotherhoodCTA: "Join the Akhilik Network",
      brotherhoodTitle: "Never Walk Alone",
      brotherhoodDesc: "Our Akhilik (Brotherhood) program connects newcomers with experienced residents who volunteer their time to help you settle in. Find a mentor who speaks your language and understands your journey.",
      findMentor: "Find Your Mentor"
    },
    ar: {
      servicesTitle: "دعم كامل للهجرة",
      servicesSub: "كل ما تحتاجه للانتقال إلى المملكة العربية السعودية بثقة.",
      service1: "العقارات",
      service1Desc: "تصفح قوائم موثقة للشقق والفلل والأراضي في جميع أنحاء المملكة.",
      service2: "شبكة الإخوة",
      service2Desc: "تواصل مع مرشدين ذوي خبرة يمكنهم توجيه انتقالك.",
      service3: "سوق المدينة",
      service3Desc: "اشترِ وبيع وتبادل مع أعضاء المجتمع الآخرين.",
      service4: "دليل التكيف",
      service4Desc: "دليل شامل للتأشيرة والثقافة واللغة والمعلومات العملية.",
      cta: "استكشف",
      brotherhoodCTA: "انضم إلى شبكة الإخوة",
      brotherhoodTitle: "لا تمشِ وحيداً أبداً",
      brotherhoodDesc: "يربط برنامج الإخوة لدينا القادمين الجدد بالمقيمين ذوي الخبرة الذين يتطوعون بوقتهم لمساعدتك على الاستقرار. ابحث عن مرشد يتحدث لغتك ويفهم رحلتك.",
      findMentor: "ابحث عن مرشدك"
    },
    tr: {
      servicesTitle: "Kapsamlı Göç Desteği",
      servicesSub: "Suudi Arabistan'a güvenle taşınmak için ihtiyacınız olan her şey.",
      service1: "Gayrimenkul",
      service1Desc: "Krallık genelinde daireler, villalar ve araziler için doğrulanmış ilanları inceleyin.",
      service2: "Ahilik Ağı",
      service2Desc: "Geçişinize rehberlik edebilecek deneyimli mentorlarla bağlantı kurun.",
      service3: "Medine Pazarı",
      service3Desc: "Topluluk üyeleriyle alın, satın ve takas yapın.",
      service4: "Uyum Rehberi",
      service4Desc: "Vize, kültür, dil ve pratik bilgiler için kapsamlı rehber.",
      cta: "Keşfet",
      brotherhoodCTA: "Ahilik Ağına Katıl",
      brotherhoodTitle: "Asla Yalnız Yürüme",
      brotherhoodDesc: "Ahilik programımız, yeni gelenleri yerleşmenize yardımcı olmak için zamanlarını gönüllü olarak sunan deneyimli yerleşiklerle buluşturur. Dilinizi konuşan ve yolculuğunuzu anlayan bir mentor bulun.",
      findMentor: "Mentorunuzu Bulun"
    }
  };

  const t = translations[lang] || translations.en;

  const services = [
    { icon: Building2, title: t.service1, desc: t.service1Desc, href: `/${lang}/properties`, color: "bg-emerald-100 text-emerald-600" },
    { icon: Users, title: t.service2, desc: t.service2Desc, href: `/${lang}/brotherhood`, color: "bg-amber-100 text-amber-600" },
    { icon: Store, title: t.service3, desc: t.service3Desc, href: `/${lang}/marketplace`, color: "bg-indigo-100 text-indigo-600" },
    { icon: BookOpen, title: t.service4, desc: t.service4Desc, href: `/${lang}/guide`, color: "bg-teal-100 text-teal-600" },
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar lang={lang} />

      <Hero lang={lang} />

      <FeaturedProperties lang={lang} />

      <SearchBar lang={lang} />

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">{t.servicesTitle}</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">{t.servicesSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-stone-900">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="flex items-center text-emerald-600 font-medium text-sm group-hover:text-emerald-700">
                  {t.cta} <ArrowRight className="h-4 w-4 ms-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Brotherhood CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Akhilik</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.brotherhoodTitle}</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">{t.brotherhoodDesc}</p>
            <Link
              href={`/${lang}/brotherhood`}
              className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl"
            >
              <Heart className="h-5 w-5" />
              {t.findMentor}
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
