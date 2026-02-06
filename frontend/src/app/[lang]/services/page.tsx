import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileCheck, Shield, Briefcase, Plane, Building2, Users, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    const translations: Record<string, {
        title: string;
        subtitle: string;
        residency: string;
        residencyDesc: string;
        relocation: string;
        relocationDesc: string;
        business: string;
        businessDesc: string;
        legal: string;
        legalDesc: string;
        feature1: string;
        feature2: string;
        feature3: string;
        feature4: string;
        premResTitle: string;
        premResSub: string;
        premRes1: string;
        premRes2: string;
        premRes3: string;
        premRes4: string;
        premRes5: string;
        learnMore: string;
        whyUs: string;
        whyUsSub: string;
        why1: string;
        why1Desc: string;
        why2: string;
        why2Desc: string;
        why3: string;
        why3Desc: string;
        ctaTitle: string;
        ctaSub: string;
        ctaButton: string;
        contact: string;
    }> = {
        en: {
            title: "Our Services",
            subtitle: "Comprehensive support for your journey to Saudi Arabia",
            residency: "Premium Residency",
            residencyDesc: "Expert guidance on obtaining Saudi Premium Residency for you and your family",
            relocation: "Relocation Support",
            relocationDesc: "End-to-end assistance with moving, housing, and settling in the Kingdom",
            business: "Business Setup",
            businessDesc: "Complete support for establishing and registering your business in Saudi Arabia",
            legal: "Legal Consultation",
            legalDesc: "Professional legal advice on immigration, property, and business matters",
            feature1: "Expert Consultants",
            feature2: "Fast Processing",
            feature3: "24/7 Support",
            feature4: "100% Success Rate",
            premResTitle: "Saudi Premium Residency",
            premResSub: "The Kingdom's golden visa program offering long-term residency for investors and professionals",
            premRes1: "Live, work, and own property without a Saudi sponsor",
            premRes2: "Bring your family with full residency rights",
            premRes3: "Easy entry and exit from the Kingdom",
            premRes4: "Access to all government services",
            premRes5: "Path to permanent residency",
            learnMore: "Learn More",
            whyUs: "Why Choose Arkam's Way?",
            whyUsSub: "We make your transition to Saudi Arabia smooth and stress-free",
            why1: "Local Expertise",
            why1Desc: "Our team has years of experience navigating Saudi systems and regulations",
            why2: "Personal Service",
            why2Desc: "Dedicated consultant assigned to guide you through every step",
            why3: "Proven Track Record",
            why3Desc: "Hundreds of successful relocations and residency applications",
            ctaTitle: "Ready to Begin?",
            ctaSub: "Schedule a free consultation with our experts",
            ctaButton: "Contact Us",
            contact: "Get in Touch"
        },
        ar: {
            title: "خدماتنا",
            subtitle: "دعم شامل لرحلتك إلى المملكة العربية السعودية",
            residency: "الإقامة المميزة",
            residencyDesc: "إرشاد خبير للحصول على الإقامة المميزة السعودية لك ولعائلتك",
            relocation: "دعم الانتقال",
            relocationDesc: "مساعدة شاملة في الانتقال والسكن والاستقرار في المملكة",
            business: "تأسيس الأعمال",
            businessDesc: "دعم كامل لتأسيس وتسجيل عملك في المملكة العربية السعودية",
            legal: "الاستشارات القانونية",
            legalDesc: "مشورة قانونية مهنية في شؤون الهجرة والعقارات والأعمال",
            feature1: "مستشارون خبراء",
            feature2: "معالجة سريعة",
            feature3: "دعم على مدار الساعة",
            feature4: "نسبة نجاح 100%",
            premResTitle: "الإقامة المميزة السعودية",
            premResSub: "برنامج التأشيرة الذهبية للمملكة الذي يوفر إقامة طويلة الأمد للمستثمرين والمهنيين",
            premRes1: "العيش والعمل وامتلاك العقارات بدون كفيل سعودي",
            premRes2: "إحضار عائلتك مع حقوق إقامة كاملة",
            premRes3: "دخول وخروج سهل من المملكة",
            premRes4: "الوصول إلى جميع الخدمات الحكومية",
            premRes5: "طريق للإقامة الدائمة",
            learnMore: "اعرف المزيد",
            whyUs: "لماذا تختار أركام واي؟",
            whyUsSub: "نجعل انتقالك إلى السعودية سلساً وخالياً من التوتر",
            why1: "خبرة محلية",
            why1Desc: "فريقنا لديه سنوات من الخبرة في التعامل مع الأنظمة واللوائح السعودية",
            why2: "خدمة شخصية",
            why2Desc: "مستشار مخصص لإرشادك في كل خطوة",
            why3: "سجل حافل بالنجاح",
            why3Desc: "مئات من عمليات النقل والإقامات الناجحة",
            ctaTitle: "هل أنت مستعد للبدء؟",
            ctaSub: "حدد موعداً لاستشارة مجانية مع خبرائنا",
            ctaButton: "اتصل بنا",
            contact: "تواصل معنا"
        },
        tr: {
            title: "Hizmetlerimiz",
            subtitle: "Suudi Arabistan yolculuğunuz için kapsamlı destek",
            residency: "Premium İkamet",
            residencyDesc: "Sizin ve aileniz için Suudi Premium İkamet alımında uzman rehberlik",
            relocation: "Taşınma Desteği",
            relocationDesc: "Krallık'a taşınma, konut ve yerleşim konusunda uçtan uca yardım",
            business: "İş Kurulumu",
            businessDesc: "Suudi Arabistan'da işinizi kurmak ve tescil ettirmek için tam destek",
            legal: "Hukuki Danışmanlık",
            legalDesc: "Göçmenlik, mülkiyet ve iş konularında profesyonel hukuki danışmanlık",
            feature1: "Uzman Danışmanlar",
            feature2: "Hızlı İşlem",
            feature3: "7/24 Destek",
            feature4: "%100 Başarı Oranı",
            premResTitle: "Suudi Premium İkamet",
            premResSub: "Yatırımcılar ve profesyoneller için uzun vadeli ikamet sunan Krallık'ın altın vize programı",
            premRes1: "Suudi sponsor olmadan yaşayın, çalışın ve mülk sahibi olun",
            premRes2: "Ailenizi tam ikamet haklarıyla getirin",
            premRes3: "Krallık'a kolay giriş ve çıkış",
            premRes4: "Tüm devlet hizmetlerine erişim",
            premRes5: "Kalıcı ikamete giden yol",
            learnMore: "Daha Fazla Bilgi",
            whyUs: "Neden Erkam'ın Yolu'nu Seçmelisiniz?",
            whyUsSub: "Suudi Arabistan'a geçişinizi sorunsuz ve stressiz hale getiriyoruz",
            why1: "Yerel Uzmanlık",
            why1Desc: "Ekibimiz Suudi sistemleri ve düzenlemelerinde yıllarca deneyime sahip",
            why2: "Kişisel Hizmet",
            why2Desc: "Her adımda size rehberlik edecek özel danışman",
            why3: "Kanıtlanmış Başarı",
            why3Desc: "Yüzlerce başarılı taşınma ve ikamet başvurusu",
            ctaTitle: "Başlamaya Hazır mısınız?",
            ctaSub: "Uzmanlarımızla ücretsiz danışmanlık randevusu alın",
            ctaButton: "Bize Ulaşın",
            contact: "İletişime Geçin"
        }
    };

    const t = translations[lang] || translations.en;

    const services = [
        { icon: FileCheck, title: t.residency, desc: t.residencyDesc, color: "emerald" },
        { icon: Plane, title: t.relocation, desc: t.relocationDesc, color: "sky" },
        { icon: Building2, title: t.business, desc: t.businessDesc, color: "amber" },
        { icon: Shield, title: t.legal, desc: t.legalDesc, color: "purple" },
    ];

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <FileCheck className="h-16 w-16 text-amber-400 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
                        <p className="text-xl text-amber-200">{t.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 -mt-8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-shadow">
                                <div className={`w-14 h-14 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                                    <service.icon className={`h-7 w-7 text-${service.color}-600`} />
                                </div>
                                <h3 className="text-lg font-semibold text-stone-900 mb-2">{service.title}</h3>
                                <p className="text-stone-600 text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Features Bar */}
                    <div className="mt-12 bg-emerald-600 rounded-2xl p-8 text-white">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <Users className="h-8 w-8 mx-auto mb-2 opacity-80" />
                                <div className="font-semibold">{t.feature1}</div>
                            </div>
                            <div>
                                <CheckCircle className="h-8 w-8 mx-auto mb-2 opacity-80" />
                                <div className="font-semibold">{t.feature2}</div>
                            </div>
                            <div>
                                <Phone className="h-8 w-8 mx-auto mb-2 opacity-80" />
                                <div className="font-semibold">{t.feature3}</div>
                            </div>
                            <div>
                                <Shield className="h-8 w-8 mx-auto mb-2 opacity-80" />
                                <div className="font-semibold">{t.feature4}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Residency Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                                Vision 2030
                            </span>
                            <h2 className="text-3xl font-bold text-stone-900 mt-4 mb-4">{t.premResTitle}</h2>
                            <p className="text-lg text-stone-600 mb-8">{t.premResSub}</p>

                            <ul className="space-y-4">
                                {[t.premRes1, t.premRes2, t.premRes3, t.premRes4, t.premRes5].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-stone-700">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="mt-8 bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2">
                                {t.learnMore} <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="bg-gradient-to-br from-stone-100 to-emerald-50 rounded-2xl p-8 h-80 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="h-12 w-12 text-white" />
                                </div>
                                <div className="text-2xl font-bold text-stone-900">Premium Residency</div>
                                <div className="text-stone-500">Saudi Arabia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">{t.whyUs}</h2>
                        <p className="text-lg text-stone-600">{t.whyUsSub}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">{t.why1}</h3>
                            <p className="text-stone-600">{t.why1Desc}</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 text-center">
                            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">{t.why2}</h3>
                            <p className="text-stone-600">{t.why2Desc}</p>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 text-center">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">{t.why3}</h3>
                            <p className="text-stone-600">{t.why3Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-stone-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
                    <p className="text-xl text-stone-400 mb-8">{t.ctaSub}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={`/${lang}/login`} className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors">
                            <Mail className="h-5 w-5" />
                            {t.ctaButton}
                        </Link>
                        <a href="tel:+966500000000" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-100 transition-colors">
                            <Phone className="h-5 w-5" />
                            {t.contact}
                        </a>
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
