import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Building2, Users, Globe } from "lucide-react";
import Link from "next/link";

export default async function JobsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    const translations: Record<string, {
        title: string;
        subtitle: string;
        featured: string;
        viewAll: string;
        apply: string;
        fullTime: string;
        partTime: string;
        remote: string;
        whyWork: string;
        whyWorkSub: string;
        benefit1: string;
        benefit1Desc: string;
        benefit2: string;
        benefit2Desc: string;
        benefit3: string;
        benefit3Desc: string;
        ctaTitle: string;
        ctaSub: string;
        ctaButton: string;
    }> = {
        en: {
            title: "Career Opportunities",
            subtitle: "Join the Kingdom's growing economy and build your future in Saudi Arabia",
            featured: "Featured Positions",
            viewAll: "View All Jobs",
            apply: "Apply Now",
            fullTime: "Full-time",
            partTime: "Part-time",
            remote: "Remote",
            whyWork: "Why Work in Saudi Arabia?",
            whyWorkSub: "Discover the benefits of building your career in the Kingdom",
            benefit1: "Tax-Free Income",
            benefit1Desc: "Keep more of what you earn with no personal income tax",
            benefit2: "Growing Economy",
            benefit2Desc: "Be part of Vision 2030's transformation and economic growth",
            benefit3: "Global Community",
            benefit3Desc: "Join a diverse, international workforce from around the world",
            ctaTitle: "Ready to Start Your Journey?",
            ctaSub: "Create your profile and let employers find you",
            ctaButton: "Create Profile"
        },
        ar: {
            title: "فرص العمل",
            subtitle: "انضم إلى اقتصاد المملكة المتنامي وابنِ مستقبلك في المملكة العربية السعودية",
            featured: "الوظائف المميزة",
            viewAll: "عرض جميع الوظائف",
            apply: "تقدم الآن",
            fullTime: "دوام كامل",
            partTime: "دوام جزئي",
            remote: "عمل عن بُعد",
            whyWork: "لماذا العمل في السعودية؟",
            whyWorkSub: "اكتشف مزايا بناء مسيرتك المهنية في المملكة",
            benefit1: "دخل معفى من الضرائب",
            benefit1Desc: "احتفظ بالمزيد مما تكسبه بدون ضريبة دخل شخصية",
            benefit2: "اقتصاد متنامي",
            benefit2Desc: "كن جزءاً من تحول رؤية 2030 والنمو الاقتصادي",
            benefit3: "مجتمع عالمي",
            benefit3Desc: "انضم إلى قوة عاملة متنوعة ودولية من جميع أنحاء العالم",
            ctaTitle: "هل أنت مستعد لبدء رحلتك؟",
            ctaSub: "أنشئ ملفك الشخصي ودع أصحاب العمل يجدونك",
            ctaButton: "إنشاء الملف الشخصي"
        },
        tr: {
            title: "Kariyer Fırsatları",
            subtitle: "Krallığın büyüyen ekonomisine katılın ve Suudi Arabistan'da geleceğinizi inşa edin",
            featured: "Öne Çıkan Pozisyonlar",
            viewAll: "Tüm İşleri Görüntüle",
            apply: "Şimdi Başvur",
            fullTime: "Tam Zamanlı",
            partTime: "Yarı Zamanlı",
            remote: "Uzaktan",
            whyWork: "Neden Suudi Arabistan'da Çalışmalısınız?",
            whyWorkSub: "Krallık'ta kariyerinizi kurmanın avantajlarını keşfedin",
            benefit1: "Vergisiz Gelir",
            benefit1Desc: "Kişisel gelir vergisi olmadan kazandığınızın daha fazlasını elinizde tutun",
            benefit2: "Büyüyen Ekonomi",
            benefit2Desc: "Vizyon 2030'un dönüşümünün ve ekonomik büyümenin bir parçası olun",
            benefit3: "Küresel Topluluk",
            benefit3Desc: "Dünyanın dört bir yanından çeşitli, uluslararası bir iş gücüne katılın",
            ctaTitle: "Yolculuğunuza Başlamaya Hazır mısınız?",
            ctaSub: "Profilinizi oluşturun ve işverenlerin sizi bulmasına izin verin",
            ctaButton: "Profil Oluştur"
        }
    };

    const t = translations[lang] || translations.en;

    // Sample job listings
    const jobs = [
        {
            id: 1,
            title: { en: "Senior Software Engineer", ar: "مهندس برمجيات أول", tr: "Kıdemli Yazılım Mühendisi" },
            company: "NEOM Tech",
            location: "NEOM, Tabuk",
            type: "fullTime",
            salary: "25,000 - 40,000 SAR",
            posted: "2 days ago"
        },
        {
            id: 2,
            title: { en: "Marketing Manager", ar: "مدير التسويق", tr: "Pazarlama Müdürü" },
            company: "Saudi Aramco",
            location: "Dhahran",
            type: "fullTime",
            salary: "20,000 - 35,000 SAR",
            posted: "1 week ago"
        },
        {
            id: 3,
            title: { en: "Financial Analyst", ar: "محلل مالي", tr: "Finansal Analist" },
            company: "SABIC",
            location: "Riyadh",
            type: "fullTime",
            salary: "18,000 - 28,000 SAR",
            posted: "3 days ago"
        },
        {
            id: 4,
            title: { en: "Healthcare Administrator", ar: "مدير الرعاية الصحية", tr: "Sağlık Yöneticisi" },
            company: "King Fahd Medical City",
            location: "Riyadh",
            type: "fullTime",
            salary: "22,000 - 32,000 SAR",
            posted: "5 days ago"
        }
    ];

    const getLocalizedTitle = (title: { en: string; ar: string; tr: string }) => {
        return title[lang as keyof typeof title] || title.en;
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-sky-900 via-sky-800 to-emerald-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <Briefcase className="h-16 w-16 text-sky-400 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.title}</h1>
                        <p className="text-xl text-sky-200">{t.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Featured Jobs */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-stone-900">{t.featured}</h2>
                        <button className="text-emerald-600 font-medium flex items-center gap-2 hover:text-emerald-700">
                            {t.viewAll} <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-stone-900">{getLocalizedTitle(job.title)}</h3>
                                        <p className="text-emerald-600 font-medium">{job.company}</p>
                                    </div>
                                    <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {t[job.type as keyof typeof t]}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-stone-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4" /> {job.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <DollarSign className="h-4 w-4" /> {job.salary}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" /> {job.posted}
                                    </span>
                                </div>
                                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                                    {t.apply}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work in Saudi */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">{t.whyWork}</h2>
                        <p className="text-lg text-stone-600">{t.whyWorkSub}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">{t.benefit1}</h3>
                            <p className="text-stone-600">{t.benefit1Desc}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="h-8 w-8 text-sky-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">{t.benefit2}</h3>
                            <p className="text-stone-600">{t.benefit2Desc}</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-stone-900 mb-2">{t.benefit3}</h3>
                            <p className="text-stone-600">{t.benefit3Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-emerald-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{t.ctaTitle}</h2>
                    <p className="text-xl text-emerald-100 mb-8">{t.ctaSub}</p>
                    <Link href={`/${lang}/login`} className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-lg">
                        {t.ctaButton}
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
