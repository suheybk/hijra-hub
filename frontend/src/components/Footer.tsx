import Link from "next/link";

export function Footer({ lang }: { lang: string }) {
    const brandNames: Record<string, string> = {
        en: "ARKAM'S WAY",
        ar: "أركام واي",
        tr: "ERKAM'IN YOLU"
    };

    const translations: Record<string, {
        rights: string;
        properties: string;
        marketplace: string;
        brotherhood: string;
        community: string;
        guide: string;
        privacy: string;
        terms: string;
        contact: string;
        quickLinks: string;
        resources: string;
        support: string;
        tagline: string;
    }> = {
        en: {
            rights: "All rights reserved.",
            properties: "Properties",
            marketplace: "Marketplace",
            brotherhood: "Brotherhood",
            community: "Community",
            guide: "Guide",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact: "Contact Us",
            quickLinks: "Quick Links",
            resources: "Resources",
            support: "Support",
            tagline: "Your trusted partner for relocating to Saudi Arabia"
        },
        ar: {
            rights: "جميع الحقوق محفوظة.",
            properties: "العقارات",
            marketplace: "السوق",
            brotherhood: "الإخوة",
            community: "المجتمع",
            guide: "الدليل",
            privacy: "سياسة الخصوصية",
            terms: "شروط الخدمة",
            contact: "اتصل بنا",
            quickLinks: "روابط سريعة",
            resources: "الموارد",
            support: "الدعم",
            tagline: "شريكك الموثوق للانتقال إلى المملكة العربية السعودية"
        },
        tr: {
            rights: "Tüm hakları saklıdır.",
            properties: "Emlak",
            marketplace: "Pazar",
            brotherhood: "Kardeşlik",
            community: "Topluluk",
            guide: "Rehber",
            privacy: "Gizlilik Politikası",
            terms: "Hizmet Şartları",
            contact: "İletişim",
            quickLinks: "Hızlı Bağlantılar",
            resources: "Kaynaklar",
            support: "Destek",
            tagline: "Suudi Arabistan'a taşınma için güvenilir ortağınız"
        }
    };

    const t = translations[lang] || translations.en;
    const brand = brandNames[lang] || brandNames.en;

    return (
        <footer className="bg-stone-900 text-stone-400">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href={`/${lang}`} className="text-2xl font-bold text-white">
                            {brand}
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed">
                            {t.tagline}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t.quickLinks}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href={`/${lang}/properties`} className="hover:text-white transition-colors">
                                    {t.properties}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/marketplace`} className="hover:text-white transition-colors">
                                    {t.marketplace}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/brotherhood`} className="hover:text-white transition-colors">
                                    {t.brotherhood}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t.resources}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href={`/${lang}/community`} className="hover:text-white transition-colors">
                                    {t.community}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/guide`} className="hover:text-white transition-colors">
                                    {t.guide}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">{t.support}</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
                                    {t.contact}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">
                                    {t.privacy}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">
                                    {t.terms}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-stone-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-sm">
                        © 2026 {brand}. {t.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
