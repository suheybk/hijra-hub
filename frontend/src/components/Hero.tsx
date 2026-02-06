"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function Hero({ lang }: { lang: string }) {
    const translations: Record<string, {
        badge: string;
        title: string;
        subtitle: string;
        cta: string;
        stats1: string;
        stats1Label: string;
        stats2: string;
        stats2Label: string;
        stats3: string;
        stats3Label: string;
    }> = {
        en: {
            badge: "Part of Saudi Vision 2030",
            title: "Your Gateway to Life in Saudi Arabia",
            subtitle: "Find your dream home, explore career opportunities, and start your new journey in the Kingdom.",
            cta: "Explore Properties",
            stats1: "500+",
            stats1Label: "Properties",
            stats2: "15+",
            stats2Label: "Cities",
            stats3: "1000+",
            stats3Label: "Happy Families"
        },
        ar: {
            badge: "جزء من رؤية السعودية 2030",
            title: "بوابتك للحياة في المملكة العربية السعودية",
            subtitle: "ابحث عن منزل أحلامك، استكشف فرص العمل، وابدأ رحلتك الجديدة في المملكة.",
            cta: "استكشف العقارات",
            stats1: "500+",
            stats1Label: "عقار",
            stats2: "15+",
            stats2Label: "مدينة",
            stats3: "1000+",
            stats3Label: "عائلة سعيدة"
        },
        tr: {
            badge: "Suudi Vizyon 2030'un Bir Parçası",
            title: "Suudi Arabistan'da Hayatınıza Açılan Kapı",
            subtitle: "Hayalinizdeki evi bulun, kariyer fırsatlarını keşfedin ve Krallık'ta yeni yolculuğunuza başlayın.",
            cta: "Mülkleri Keşfet",
            stats1: "500+",
            stats1Label: "Mülk",
            stats2: "15+",
            stats2Label: "Şehir",
            stats3: "1000+",
            stats3Label: "Mutlu Aile"
        }
    };

    const t = translations[lang] || translations.en;

    return (
        <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="max-w-3xl">
                    {/* Vision 2030 Badge */}
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MapPin className="h-4 w-4" />
                        {t.badge}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        {t.title}
                    </h1>

                    <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                        {t.subtitle}
                    </p>

                    <Link
                        href={`/${lang}/properties`}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        {t.cta}
                        <ArrowRight className="h-5 w-5" />
                    </Link>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">{t.stats1}</div>
                            <div className="text-stone-400 text-sm">{t.stats1Label}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">{t.stats2}</div>
                            <div className="text-stone-400 text-sm">{t.stats2Label}</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-400">{t.stats3}</div>
                            <div className="text-stone-400 text-sm">{t.stats3Label}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
