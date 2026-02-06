"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, ChevronDown } from "lucide-react";

export function Navbar({ lang }: { lang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const translations: Record<string, {
        brand: string;
        properties: string;
        marketplace: string;
        brotherhood: string;
        community: string;
        guide: string;
        login: string;
    }> = {
        en: {
            brand: "ARKAM'S WAY",
            properties: "Properties",
            marketplace: "Market",
            brotherhood: "Brotherhood",
            community: "Community",
            guide: "Guide",
            login: "Login",
        },
        ar: {
            brand: "أركام واي",
            properties: "العقارات",
            marketplace: "السوق",
            brotherhood: "الإخوة",
            community: "المجتمع",
            guide: "الدليل",
            login: "دخول",
        },
        tr: {
            brand: "ERKAM'IN YOLU",
            properties: "Emlak",
            marketplace: "Pazar",
            brotherhood: "Kardeşlik",
            community: "Topluluk",
            guide: "Rehber",
            login: "Giriş",
        },
    };

    const t = translations[lang] || translations.en;

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    ];

    const currentLang = languages.find(l => l.code === lang) || languages[0];

    const navItems = [
        { href: `/${lang}/properties`, label: t.properties },
        { href: `/${lang}/marketplace`, label: t.marketplace },
        { href: `/${lang}/brotherhood`, label: t.brotherhood },
        { href: `/${lang}/community`, label: t.community },
        { href: `/${lang}/guide`, label: t.guide },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href={`/${lang}`} className="flex-shrink-0 flex items-center gap-2">
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                {t.brand}
                            </span>
                        </Link>
                        <div className="hidden lg:ms-8 lg:flex lg:space-x-6 rtl:space-x-reverse">
                            {navItems.map((item) => (
                                <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:ms-6 lg:flex lg:items-center gap-4">
                        {/* Language Selector Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="flex items-center gap-2 p-2 text-stone-600 hover:text-emerald-600 transition-colors rounded-lg hover:bg-stone-100"
                            >
                                <span className="text-lg">{currentLang.flag}</span>
                                <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {langMenuOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-stone-200 py-1 z-50">
                                    {languages.map((language) => (
                                        <Link
                                            key={language.code}
                                            href={`/${language.code}`}
                                            onClick={() => setLangMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${lang === language.code ? 'text-emerald-600 bg-emerald-50' : 'text-stone-700'
                                                }`}
                                        >
                                            <span className="text-lg">{language.flag}</span>
                                            <span>{language.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link href={`/${lang}/login`} className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg">
                            <User className="h-4 w-4" />
                            <span className="font-medium text-sm">{t.login}</span>
                        </Link>
                    </div>

                    <div className="-me-2 flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white border-t border-stone-100">
                    <div className="pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <MobileNavLink key={item.href} href={item.href}>{item.label}</MobileNavLink>
                        ))}
                    </div>
                    {/* Mobile Language Selector */}
                    <div className="border-t border-stone-100 pt-2 pb-3 px-3">
                        <p className="text-xs text-stone-500 mb-2 uppercase tracking-wider">{lang === 'ar' ? 'اللغة' : lang === 'tr' ? 'Dil' : 'Language'}</p>
                        <div className="flex gap-2">
                            {languages.map((language) => (
                                <Link
                                    key={language.code}
                                    href={`/${language.code}`}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${lang === language.code
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                        }`}
                                >
                                    <span>{language.flag}</span>
                                    <span>{language.code.toUpperCase()}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="border-t border-stone-100 p-3">
                        <Link href={`/${lang}/login`} className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-all">
                            <User className="h-4 w-4" />
                            <span className="font-medium">{t.login}</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-stone-500 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block ps-3 pe-4 py-2 border-l-4 border-transparent text-base font-medium text-stone-500 hover:bg-stone-50 hover:border-emerald-500 hover:text-emerald-600"
        >
            {children}
        </Link>
    );
}
