"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, FileText, Globe, MapPin, CreditCard, Phone, Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

interface GuidePageProps {
    lang: string;
}

export default function GuidePage({ lang }: GuidePageProps) {
    const translations: Record<string, {
        title: string;
        subtitle: string;
        visaTitle: string;
        visaDesc: string;
        cultureTitle: string;
        cultureDesc: string;
        languageTitle: string;
        languageDesc: string;
        practicalTitle: string;
        practicalDesc: string;
        checklistTitle: string;
        checklistDesc: string;
        learnMore: string;
        categories: {
            visa: { title: string; items: string[] };
            culture: { title: string; items: string[] };
            language: { title: string; phrases: { ar: string; meaning: string }[] };
            practical: { title: string; items: { title: string; desc: string }[] };
            checklist: { title: string; before: string[]; after: string[] };
        };
    }> = {
        en: {
            title: "Adaptation Guide",
            subtitle: "Everything you need to know for a smooth transition to life in Saudi Arabia",
            visaTitle: "Visa & Residency",
            visaDesc: "Complete guide to Saudi visa and residency options",
            cultureTitle: "Culture & Customs",
            cultureDesc: "Understanding Saudi culture and traditions",
            languageTitle: "Language Basics",
            languageDesc: "Essential Arabic phrases for daily life",
            practicalTitle: "Practical Information",
            practicalDesc: "Banking, telecommunications, healthcare and more",
            checklistTitle: "Move Checklist",
            checklistDesc: "Step-by-step checklist for your relocation",
            learnMore: "Learn More",
            categories: {
                visa: {
                    title: "Visa Types",
                    items: [
                        "Premium Residency - Permanent residence for investors",
                        "Work Visa (Iqama) - Employer-sponsored residence",
                        "Investor Visa - Business establishment permit",
                        "Family Visa - Dependents of residents",
                        "Visit Visa - Short-term business or tourism"
                    ]
                },
                culture: {
                    title: "Key Cultural Points",
                    items: [
                        "Respect prayer times - businesses close 5 times daily",
                        "Modest dress code for both men and women",
                        "Ramadan fasting month - public eating restrictions",
                        "Right hand for greetings and eating",
                        "Hospitality is highly valued - accept offers graciously"
                    ]
                },
                language: {
                    title: "Essential Phrases",
                    phrases: [
                        { ar: "السلام عليكم", meaning: "Peace be upon you (Hello)" },
                        { ar: "شكراً", meaning: "Thank you" },
                        { ar: "من فضلك", meaning: "Please" },
                        { ar: "نعم / لا", meaning: "Yes / No" },
                        { ar: "كم السعر؟", meaning: "How much?" },
                        { ar: "أين...؟", meaning: "Where is...?" },
                        { ar: "إن شاء الله", meaning: "God willing (I hope so)" },
                        { ar: "ما شاء الله", meaning: "God has willed it (Wow!)" }
                    ]
                },
                practical: {
                    title: "Essential Services",
                    items: [
                        { title: "Banking", desc: "Al Rajhi, NCB, Riyad Bank - requires Iqama" },
                        { title: "SIM Card", desc: "STC, Mobily, Zain - prepaid available" },
                        { title: "Healthcare", desc: "Mandatory health insurance for residents" },
                        { title: "Driving", desc: "International license valid 3 months, then local" },
                        { title: "Housing", desc: "Most rentals yearly, 1-3 months deposit" },
                        { title: "Utilities", desc: "SAMA for electricity, NWC for water" }
                    ]
                },
                checklist: {
                    title: "Your Relocation Checklist",
                    before: [
                        "Obtain appropriate visa",
                        "Apostille and translate documents",
                        "Medical examination",
                        "Secure temporary accommodation",
                        "Research neighborhoods",
                        "Arrange initial funds (SAR)"
                    ],
                    after: [
                        "Complete Iqama processing",
                        "Open bank account",
                        "Get SIM card",
                        "Register with health insurance",
                        "Obtain driving license",
                        "Find permanent housing"
                    ]
                }
            }
        },
        ar: {
            title: "دليل التكيف",
            subtitle: "كل ما تحتاج معرفته للانتقال السلس إلى الحياة في المملكة العربية السعودية",
            visaTitle: "التأشيرة والإقامة",
            visaDesc: "دليل شامل لخيارات التأشيرة والإقامة السعودية",
            cultureTitle: "الثقافة والعادات",
            cultureDesc: "فهم الثقافة والتقاليد السعودية",
            languageTitle: "أساسيات اللغة",
            languageDesc: "العبارات العربية الأساسية للحياة اليومية",
            practicalTitle: "المعلومات العملية",
            practicalDesc: "البنوك والاتصالات والرعاية الصحية والمزيد",
            checklistTitle: "قائمة الانتقال",
            checklistDesc: "قائمة مراجعة خطوة بخطوة لانتقالك",
            learnMore: "اقرأ المزيد",
            categories: {
                visa: {
                    title: "أنواع التأشيرات",
                    items: [
                        "الإقامة المميزة - إقامة دائمة للمستثمرين",
                        "تأشيرة العمل (الإقامة) - إقامة برعاية صاحب العمل",
                        "تأشيرة المستثمر - تصريح تأسيس الأعمال",
                        "تأشيرة العائلة - المعالين للمقيمين",
                        "تأشيرة الزيارة - الأعمال أو السياحة قصيرة المدى"
                    ]
                },
                culture: {
                    title: "النقاط الثقافية الرئيسية",
                    items: [
                        "احترم أوقات الصلاة - تغلق المحلات 5 مرات يومياً",
                        "قواعد اللباس المحتشم للرجال والنساء",
                        "شهر رمضان - قيود الأكل العلني",
                        "استخدم اليد اليمنى للتحية والأكل",
                        "الضيافة ذات قيمة عالية - اقبل العروض بلطف"
                    ]
                },
                language: {
                    title: "العبارات الأساسية",
                    phrases: [
                        { ar: "السلام عليكم", meaning: "تحية إسلامية" },
                        { ar: "شكراً", meaning: "للتعبير عن الامتنان" },
                        { ar: "من فضلك", meaning: "للطلب بأدب" },
                        { ar: "نعم / لا", meaning: "للإجابة" },
                        { ar: "كم السعر؟", meaning: "للسؤال عن الأسعار" },
                        { ar: "أين...؟", meaning: "للسؤال عن الاتجاهات" },
                        { ar: "إن شاء الله", meaning: "للتعبير عن الأمل" },
                        { ar: "ما شاء الله", meaning: "للتعبير عن الإعجاب" }
                    ]
                },
                practical: {
                    title: "الخدمات الأساسية",
                    items: [
                        { title: "البنوك", desc: "الراجحي، الأهلي، بنك الرياض - تتطلب إقامة" },
                        { title: "شريحة الجوال", desc: "STC، موبايلي، زين - بطاقات مسبقة الدفع متوفرة" },
                        { title: "الرعاية الصحية", desc: "التأمين الصحي إلزامي للمقيمين" },
                        { title: "القيادة", desc: "الرخصة الدولية صالحة 3 أشهر ثم محلية" },
                        { title: "السكن", desc: "معظم الإيجارات سنوية، وديعة 1-3 أشهر" },
                        { title: "المرافق", desc: "الكهرباء والماء عبر التطبيقات" }
                    ]
                },
                checklist: {
                    title: "قائمة مراجعة انتقالك",
                    before: [
                        "احصل على التأشيرة المناسبة",
                        "صدق وترجم الوثائق",
                        "الفحص الطبي",
                        "تأمين سكن مؤقت",
                        "ابحث عن الأحياء",
                        "رتب الأموال الأولية"
                    ],
                    after: [
                        "أكمل معالجة الإقامة",
                        "افتح حساب بنكي",
                        "احصل على شريحة جوال",
                        "سجل في التأمين الصحي",
                        "احصل على رخصة القيادة",
                        "ابحث عن سكن دائم"
                    ]
                }
            }
        },
        tr: {
            title: "Uyum Rehberi",
            subtitle: "Suudi Arabistan'da hayata sorunsuz geçiş için bilmeniz gereken her şey",
            visaTitle: "Vize ve İkamet",
            visaDesc: "Suudi vizesi ve ikamet seçenekleri için kapsamlı rehber",
            cultureTitle: "Kültür ve Gelenekler",
            cultureDesc: "Suudi kültürünü ve geleneklerini anlama",
            languageTitle: "Temel Arapça",
            languageDesc: "Günlük yaşam için temel Arapça ifadeler",
            practicalTitle: "Pratik Bilgiler",
            practicalDesc: "Bankacılık, telekomünikasyon, sağlık ve daha fazlası",
            checklistTitle: "Taşınma Kontrol Listesi",
            checklistDesc: "Taşınmanız için adım adım kontrol listesi",
            learnMore: "Daha Fazla",
            categories: {
                visa: {
                    title: "Vize Türleri",
                    items: [
                        "Premium Residency - Yatırımcılar için daimi ikamet",
                        "Çalışma Vizesi (İkame) - İşveren sponsorlu ikamet",
                        "Yatırımcı Vizesi - İş kurma izni",
                        "Aile Vizesi - Mukimlerin bakmakla yükümlü oldukları",
                        "Ziyaret Vizesi - Kısa süreli iş veya turizm"
                    ]
                },
                culture: {
                    title: "Önemli Kültürel Noktalar",
                    items: [
                        "Namaz vakitlerine saygı - işletmeler günde 5 kez kapanır",
                        "Erkek ve kadınlar için mütevazı giyim kuralları",
                        "Ramazan oruç ayı - halka açık yeme kısıtlamaları",
                        "Selamlaşma ve yeme için sağ el kullanımı",
                        "Misafirperverlik çok değerli - teklifleri nezaketle kabul edin"
                    ]
                },
                language: {
                    title: "Temel İfadeler",
                    phrases: [
                        { ar: "السلام عليكم", meaning: "Selam (Merhaba)" },
                        { ar: "شكراً", meaning: "Teşekkürler" },
                        { ar: "من فضلك", meaning: "Lütfen" },
                        { ar: "نعم / لا", meaning: "Evet / Hayır" },
                        { ar: "كم السعر؟", meaning: "Fiyatı nedir?" },
                        { ar: "أين...؟", meaning: "Nerede...?" },
                        { ar: "إن شاء الله", meaning: "İnşallah (Allah izin verirse)" },
                        { ar: "ما شاء الله", meaning: "Maşallah (Çok güzel!)" }
                    ]
                },
                practical: {
                    title: "Temel Hizmetler",
                    items: [
                        { title: "Bankacılık", desc: "Al Rajhi, NCB, Riyad Bank - İkame gerekli" },
                        { title: "SIM Kart", desc: "STC, Mobily, Zain - ön ödemeli mevcut" },
                        { title: "Sağlık", desc: "Mukimler için zorunlu sağlık sigortası" },
                        { title: "Ehliyet", desc: "Uluslararası ehliyet 3 ay geçerli, sonra yerel" },
                        { title: "Konut", desc: "Çoğu kira yıllık, 1-3 aylık depozito" },
                        { title: "Altyapı", desc: "Elektrik ve su uygulamalar üzerinden" }
                    ]
                },
                checklist: {
                    title: "Taşınma Kontrol Listeniz",
                    before: [
                        "Uygun vizeyi alın",
                        "Belgeleri apostille ve tercüme ettirin",
                        "Sağlık muayenesi",
                        "Geçici konaklama ayarlayın",
                        "Mahalleleri araştırın",
                        "İlk fonları ayarlayın (SAR)"
                    ],
                    after: [
                        "İkame işlemlerini tamamlayın",
                        "Banka hesabı açın",
                        "SIM kart alın",
                        "Sağlık sigortasına kaydolun",
                        "Ehliyet alın",
                        "Kalıcı konut bulun"
                    ]
                }
            }
        }
    };

    const t = translations[lang] || translations.en;

    const categories = [
        { icon: FileText, title: t.visaTitle, desc: t.visaDesc, color: "from-blue-500 to-blue-600", id: "visa" },
        { icon: Heart, title: t.cultureTitle, desc: t.cultureDesc, color: "from-rose-500 to-rose-600", id: "culture" },
        { icon: Globe, title: t.languageTitle, desc: t.languageDesc, color: "from-purple-500 to-purple-600", id: "language" },
        { icon: CreditCard, title: t.practicalTitle, desc: t.practicalDesc, color: "from-amber-500 to-amber-600", id: "practical" },
        { icon: CheckCircle, title: t.checklistTitle, desc: t.checklistDesc, color: "from-emerald-500 to-emerald-600", id: "checklist" },
    ];

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <BookOpen className="h-16 w-16 text-white/80 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <a key={cat.id} href={`#${cat.id}`} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${cat.color} mb-4`}>
                                    <cat.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors">{cat.title}</h3>
                                <p className="text-stone-600 mb-4">{cat.desc}</p>
                                <span className="text-emerald-600 font-medium flex items-center gap-2">
                                    {t.learnMore} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visa Section */}
            <section id="visa" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
                            <FileText className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900">{t.categories.visa.title}</h2>
                    </div>
                    <div className="space-y-4">
                        {t.categories.visa.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                                <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-stone-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section id="culture" className="py-16 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600">
                            <Heart className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900">{t.categories.culture.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.categories.culture.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                <CheckCircle className="h-6 w-6 text-rose-600 flex-shrink-0 mt-0.5" />
                                <p className="text-stone-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Language Section */}
            <section id="language" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600">
                            <Globe className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900">{t.categories.language.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.categories.language.phrases.map((phrase, idx) => (
                            <div key={idx} className="p-4 bg-purple-50 rounded-xl">
                                <p className="text-2xl font-arabic text-purple-800 mb-1">{phrase.ar}</p>
                                <p className="text-stone-600">{phrase.meaning}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practical Section */}
            <section id="practical" className="py-16 bg-stone-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600">
                            <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900">{t.categories.practical.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {t.categories.practical.items.map((item, idx) => (
                            <div key={idx} className="p-4 bg-white rounded-xl shadow-sm">
                                <h4 className="font-bold text-amber-700 mb-1">{item.title}</h4>
                                <p className="text-stone-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Checklist Section */}
            <section id="checklist" className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600">
                            <CheckCircle className="h-6 w-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-stone-900">{t.categories.checklist.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-lg text-stone-900 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm font-bold">1</span>
                                {lang === 'ar' ? 'قبل الانتقال' : lang === 'tr' ? 'Taşınmadan Önce' : 'Before Moving'}
                            </h3>
                            <div className="space-y-3">
                                {t.categories.checklist.before.map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg cursor-pointer hover:bg-amber-100 transition-colors">
                                        <input type="checkbox" className="w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500" />
                                        <span className="text-stone-700">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-stone-900 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm font-bold">2</span>
                                {lang === 'ar' ? 'بعد الوصول' : lang === 'tr' ? 'Geldikten Sonra' : 'After Arrival'}
                            </h3>
                            <div className="space-y-3">
                                {t.categories.checklist.after.map((item, idx) => (
                                    <label key={idx} className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg cursor-pointer hover:bg-emerald-100 transition-colors">
                                        <input type="checkbox" className="w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500" />
                                        <span className="text-stone-700">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
