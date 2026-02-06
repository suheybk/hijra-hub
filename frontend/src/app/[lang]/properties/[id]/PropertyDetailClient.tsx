"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Bed, Bath, Maximize, Phone, Mail, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Property {
    id: string;
    title: { en: string; ar: string; tr: string } | string;
    description: { en: string; ar: string; tr: string } | string;
    price: number;
    type: string;
    location: { city: string; address: string; lat: number; lng: number };
    images: string[];
    features: { bedrooms?: number; bathrooms?: number; area: number; parking?: number };
}

export default function PropertyDetailClient({ lang, id }: { lang: string; id: string }) {
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const isRTL = lang === 'ar';

    const translations: Record<string, {
        back: string;
        description: string;
        interested: string;
        call: string;
        message: string;
        share: string;
        save: string;
        beds: string;
        baths: string;
        loading: string;
        notFound: string;
    }> = {
        en: {
            back: "Back to Search",
            description: "Description",
            interested: "Interested in this property?",
            call: "Call Agent",
            message: "Send Message",
            share: "Share",
            save: "Save",
            beds: "Beds",
            baths: "Baths",
            loading: "Loading...",
            notFound: "Property not found"
        },
        ar: {
            back: "العودة للبحث",
            description: "الوصف",
            interested: "هل أنت مهتم بهذا العقار؟",
            call: "اتصل بالوكيل",
            message: "إرسال رسالة",
            share: "مشاركة",
            save: "حفظ",
            beds: "غرف",
            baths: "حمامات",
            loading: "جاري التحميل...",
            notFound: "العقار غير موجود"
        },
        tr: {
            back: "Aramaya Dön",
            description: "Açıklama",
            interested: "Bu mülkle ilgileniyor musunuz?",
            call: "Temsilciyi Ara",
            message: "Mesaj Gönder",
            share: "Paylaş",
            save: "Kaydet",
            beds: "Yatak",
            baths: "Banyo",
            loading: "Yükleniyor...",
            notFound: "Mülk bulunamadı"
        }
    };

    const t = translations[lang] || translations.en;

    useEffect(() => {
        async function fetchProperty() {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000';
                const res = await fetch(`${apiUrl}/properties/${id}`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProperty(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProperty();
    }, [id]);

    // Get localized text
    const getLocalizedText = (field: { en: string; ar: string; tr: string } | string): string => {
        if (typeof field === 'string') return field;
        return field[lang as keyof typeof field] || field.en;
    };

    const formatPrice = (price: number) => {
        if (lang === 'ar') {
            return `${price.toLocaleString('ar-SA')} ر.س`;
        } else if (lang === 'tr') {
            return `${price.toLocaleString('tr-TR')} SAR`;
        }
        return `${price.toLocaleString()} SAR`;
    };

    if (loading) return (
        <div className="min-h-screen">
            <Navbar lang={lang} />
            <div className="min-h-[60vh] flex items-center justify-center">{t.loading}</div>
            <Footer lang={lang} />
        </div>
    );

    if (!property) return (
        <div className="min-h-screen">
            <Navbar lang={lang} />
            <div className="min-h-[60vh] flex items-center justify-center">{t.notFound}</div>
            <Footer lang={lang} />
        </div>
    );

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero Header */}
            <div className="relative h-[60vh] w-full bg-stone-900">
                <Image
                    src={property.images[0]}
                    alt={getLocalizedText(property.title)}
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute top-24 left-0 w-full px-4 sm:px-6 lg:px-8">
                    <Link href={`/${lang}/properties`} className="inline-flex items-center text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/50 transition">
                        <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180 ml-2' : 'mr-2'}`} />
                        {t.back}
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 sm:p-12">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <span className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
                                    {property.type}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{getLocalizedText(property.title)}</h1>
                                <div className="flex items-center text-stone-300">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {property.location.address}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold text-white mb-1">
                                    {formatPrice(property.price)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Features Bar */}
                        <div className="bg-white rounded-xl shadow-lg p-6 flex justify-around items-center text-center">
                            {property.features.bedrooms !== undefined && property.features.bedrooms > 0 && (
                                <>
                                    <div>
                                        <div className="flex items-center justify-center text-emerald-600 mb-1">
                                            <Bed className="w-6 h-6" />
                                        </div>
                                        <div className="font-bold text-gray-900">{property.features.bedrooms} {t.beds}</div>
                                    </div>
                                    <div className="w-px h-10 bg-gray-100"></div>
                                </>
                            )}
                            {property.features.bathrooms !== undefined && property.features.bathrooms > 0 && (
                                <>
                                    <div>
                                        <div className="flex items-center justify-center text-emerald-600 mb-1">
                                            <Bath className="w-6 h-6" />
                                        </div>
                                        <div className="font-bold text-gray-900">{property.features.bathrooms} {t.baths}</div>
                                    </div>
                                    <div className="w-px h-10 bg-gray-100"></div>
                                </>
                            )}
                            <div>
                                <div className="flex items-center justify-center text-emerald-600 mb-1">
                                    <Maximize className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{property.features.area} m²</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.description}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {getLocalizedText(property.description)}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Action Card */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.interested}</h3>

                            <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl mb-3 flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-md hover:shadow-lg transform active:scale-95">
                                <Phone className="w-5 h-5" />
                                {t.call}
                            </button>
                            <button className="w-full bg-white text-gray-900 border-2 border-gray-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:border-emerald-600 hover:text-emerald-600 transition">
                                <Mail className="w-5 h-5" />
                                {t.message}
                            </button>

                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-500 hover:text-gray-900 transition">
                                    <Share2 className="w-4 h-4" /> {t.share}
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-500 hover:text-red-500 transition">
                                    <Heart className="w-4 h-4" /> {t.save}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </div>
    );
}
