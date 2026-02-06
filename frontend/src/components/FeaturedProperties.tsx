"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Property {
    id: string;
    title: { en: string; ar: string; tr: string } | string;
    price: number;
    type: string;
    location: { city: string; address: string };
    images: string[];
    features: { bedrooms: number; bathrooms: number; area: number };
}

export function FeaturedProperties({ lang }: { lang: string }) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProperties() {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000';
                const res = await fetch(`${apiUrl}/properties`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProperties(data.slice(0, 3)); // Take first 3
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProperties();
    }, []);

    const translations: Record<string, { title: string; subtitle: string; viewAll: string; loading: string }> = {
        en: {
            title: "Featured Opportunities",
            subtitle: "Hand-picked investment and housing options just for you.",
            viewAll: "View All Properties",
            loading: "Loading featured properties..."
        },
        ar: {
            title: "فرص مميزة",
            subtitle: "خيارات استثمارية وسكنية مختارة خصيصًا لك.",
            viewAll: "عرض جميع العقارات",
            loading: "جاري تحميل العقارات المميزة..."
        },
        tr: {
            title: "Öne Çıkan Fırsatlar",
            subtitle: "Sizin için özel olarak seçilmiş yatırım ve konut seçenekleri.",
            viewAll: "Tüm Mülkleri Görüntüle",
            loading: "Öne çıkan mülkler yükleniyor..."
        }
    };

    const t = translations[lang] || translations.en;

    if (loading) return <div className="py-12 text-center">{t.loading}</div>;

    if (properties.length === 0) return null;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-4">{t.title}</h2>
                        <p className="text-xl text-stone-600 max-w-2xl">{t.subtitle}</p>
                    </div>
                    <Link href={`/${lang}/properties`} className="hidden md:flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                        {t.viewAll} <ArrowRight className="h-5 w-5 ms-2 rtl:rotate-180" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop) => (
                        <PropertyCard key={prop.id} property={prop} lang={lang} />
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href={`/${lang}/properties`} className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700">
                        {t.viewAll} <ArrowRight className="h-5 w-5 ms-2 rtl:rotate-180" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
