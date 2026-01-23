"use client";

import { Search, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero({ lang }: { lang: string }) {
    const t = {
        en: {
            headline: "Your New Life in Saudi Arabia Starts Here",
            subhead: "Find your dream home, secure your residency, and land the perfect job—all in one place.",
            searchPlaceholder: "Search for City, District, or Project...",
            searchBtn: "Search Properties",
            stat1: "Properties",
            stat2: "Happy Families",
            stat3: "Cities",
        },
        ar: {
            headline: "حياتك الجديدة في السعودية تبدأ هنا",
            subhead: "امتلك منزلك، احصل على الإقامة، وجد وظيفتك المثالية - كل ذلك في مكان واحد.",
            searchPlaceholder: "ابحث عن مدينة، حي، أو مشروع...",
            searchBtn: "ابحث عن عقار",
            stat1: "عقار",
            stat2: "عائلة سعيدة",
            stat3: "مدينة",
        }
    }[lang === 'ar' ? 'ar' : 'en'];

    return (
        <div className="relative bg-stone-900 min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_background.png"
                    alt="Saudi Arabia Skyline"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-stone-900/30 to-stone-900/90" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
                    {t.headline}
                </h1>
                <p className="text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    {t.subhead}
                </p>

                {/* Search Bar */}
                <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                                <MapPin className="h-5 w-5 text-stone-300" />
                            </div>
                            <input
                                type="text"
                                className="block w-full rounded-xl bg-white/10 border border-white/10 text-white placeholder-stone-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent ps-10 p-4 transition-all"
                                placeholder={t.searchPlaceholder}
                            />
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all shine-effect flex items-center justify-center gap-2">
                            <Search className="h-5 w-5" />
                            <span>{t.searchBtn}</span>
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-8 text-white/80 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400">2,500+</div>
                        <div className="text-sm uppercase tracking-wider">{t.stat1}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400">500+</div>
                        <div className="text-sm uppercase tracking-wider">{t.stat2}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400">12</div>
                        <div className="text-sm uppercase tracking-wider">{t.stat3}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
