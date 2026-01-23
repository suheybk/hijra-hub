"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, Globe } from "lucide-react";

export function Navbar({ lang }: { lang: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const t = {
        en: {
            brand: "HIJRA HUB",
            buy: "Buy",
            sell: "Sell",
            services: "Services",
            jobs: "Jobs",
            login: "Login",
        },
        ar: {
            brand: "هجرة هب",
            buy: "شراء",
            sell: "بيع",
            services: "خدمات",
            jobs: "وظائف",
            login: "دخول",
        },
    }[lang === "ar" ? "ar" : "en"];

    // Toggle Language URL
    const togglePath = lang === "ar" ? "/en" : "/ar";

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
                        <div className="hidden sm:ms-10 sm:flex sm:space-x-8 rtl:space-x-reverse">
                            <NavLink href={`/${lang}/properties`} active={false}>{t.buy}</NavLink>
                            <NavLink href={`/${lang}/sell`} active={false}>{t.sell}</NavLink>
                            <NavLink href={`/${lang}/services`} active={false}>{t.services}</NavLink>
                            <NavLink href={`/${lang}/jobs`} active={false}>{t.jobs}</NavLink>
                        </div>
                    </div>

                    <div className="hidden sm:ms-6 sm:flex sm:items-center gap-4">
                        <Link href={togglePath} className="p-2 text-stone-500 hover:text-emerald-600 transition-colors">
                            <Globe className="h-5 w-5" />
                        </Link>
                        <Link href={`/${lang}/login`} className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg">
                            <User className="h-4 w-4" />
                            <span className="font-medium text-sm">{t.login}</span>
                        </Link>
                    </div>

                    <div className="-me-2 flex items-center sm:hidden">
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
                <div className="sm:hidden bg-white border-t border-stone-100">
                    <div className="pt-2 pb-3 space-y-1">
                        <MobileNavLink href={`/${lang}/properties`}>{t.buy}</MobileNavLink>
                        <MobileNavLink href={`/${lang}/sell`}>{t.sell}</MobileNavLink>
                        <MobileNavLink href={`/${lang}/services`}>{t.services}</MobileNavLink>
                        <MobileNavLink href={`/${lang}/jobs`}>{t.jobs}</MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${active
                ? "border-emerald-500 text-stone-900"
                : "border-transparent text-stone-500 hover:border-stone-300 hover:text-stone-700"
                }`}
        >
            {children}
        </Link>
    );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="block ps-3 pe-4 py-2 border-l-4 border-transparent text-base font-medium text-stone-500 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-700"
        >
            {children}
        </Link>
    );
}
