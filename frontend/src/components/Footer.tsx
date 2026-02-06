import Link from "next/link";

export function Footer({ lang }: { lang: string }) {
    const brandNames: Record<string, string> = {
        en: "ARKAM'S WAY",
        ar: "أركام واي",
        tr: "ERKAM'IN YOLU"
    };

    const translations: Record<string, {
        rights: string;
        privacy: string;
        terms: string;
        contact: string;
    }> = {
        en: {
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            contact: "Contact Us"
        },
        ar: {
            rights: "جميع الحقوق محفوظة.",
            privacy: "سياسة الخصوصية",
            terms: "شروط الخدمة",
            contact: "اتصل بنا"
        },
        tr: {
            rights: "Tüm hakları saklıdır.",
            privacy: "Gizlilik Politikası",
            terms: "Hizmet Şartları",
            contact: "İletişim"
        }
    };

    const t = translations[lang] || translations.en;
    const brand = brandNames[lang] || brandNames.en;

    return (
        <footer className="bg-stone-900 text-stone-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">{brand}</span>
                        <span className="text-sm">© 2026 {t.rights}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                        <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">
                            {t.privacy}
                        </Link>
                        <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">
                            {t.terms}
                        </Link>
                        <Link href={`/${lang}/contact`} className="hover:text-white transition-colors">
                            {t.contact}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
