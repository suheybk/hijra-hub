"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Heart, MapPin, Briefcase, Globe, Star, MessageCircle, UserPlus, Award, Sparkles } from "lucide-react";
import { useState } from "react";

interface BrotherhoodPageProps {
    lang: string;
}

// Sample mentor data
const mentors = [
    {
        id: "akhi-001",
        name: { en: "Ahmed Al-Farsi", ar: "أحمد الفارسي", tr: "Ahmed Al-Farsi" },
        city: "Riyadh",
        yearsInSA: 8,
        profession: { en: "IT Manager", ar: "مدير تكنولوجيا المعلومات", tr: "IT Yöneticisi" },
        languages: ["ar", "en", "tr"],
        specialties: ["tech", "business", "housing"],
        rating: 4.9,
        mentees: 24,
        bio: {
            en: "Helped 24 families settle in Riyadh. IT background, can help with tech jobs and housing.",
            ar: "ساعدت 24 عائلة على الاستقرار في الرياض. خلفية تقنية للمساعدة في الوظائف والسكن.",
            tr: "24 ailenin Riyad'a yerleşmesine yardım ettim. Teknoloji işleri ve konut konusunda yardımcı olabilirim."
        },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
    },
    {
        id: "akhi-002",
        name: { en: "Fatima Hassan", ar: "فاطمة حسن", tr: "Fatima Hassan" },
        city: "Jeddah",
        yearsInSA: 12,
        profession: { en: "Healthcare Consultant", ar: "مستشارة صحية", tr: "Sağlık Danışmanı" },
        languages: ["ar", "en"],
        specialties: ["healthcare", "family", "education"],
        rating: 5.0,
        mentees: 31,
        bio: {
            en: "Specialist in family relocation. Can help with schools, healthcare, and community integration.",
            ar: "متخصصة في نقل العائلات. أستطيع المساعدة في المدارس والرعاية الصحية والاندماج المجتمعي.",
            tr: "Aile göçü uzmanı. Okullar, sağlık ve topluluk entegrasyonu konularında yardımcı olabilirim."
        },
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200"
    },
    {
        id: "akhi-003",
        name: { en: "Omar Yilmaz", ar: "عمر يلماز", tr: "Ömer Yılmaz" },
        city: "Dammam",
        yearsInSA: 5,
        profession: { en: "Business Owner", ar: "صاحب أعمال", tr: "İş Sahibi" },
        languages: ["tr", "ar", "en"],
        specialties: ["business", "trade", "investment"],
        rating: 4.8,
        mentees: 18,
        bio: {
            en: "Turkish entrepreneur in Eastern Province. Expert in business setup and trade.",
            ar: "رائد أعمال تركي في المنطقة الشرقية. خبير في تأسيس الأعمال والتجارة.",
            tr: "Doğu Vilayetinde Türk girişimci. İş kurma ve ticaret konusunda uzman."
        },
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
        id: "akhi-004",
        name: { en: "Khalid Al-Rashid", ar: "خالد الراشد", tr: "Halid Al-Rashid" },
        city: "Madinah",
        yearsInSA: 15,
        profession: { en: "Real Estate Agent", ar: "وكيل عقاري", tr: "Emlak Danışmanı" },
        languages: ["ar", "en"],
        specialties: ["housing", "investment", "legal"],
        rating: 4.7,
        mentees: 42,
        bio: {
            en: "15 years in Madinah real estate. Can help find housing near the Prophet's Mosque.",
            ar: "15 عاماً في العقارات بالمدينة المنورة. أستطيع المساعدة في إيجاد سكن قريب من المسجد النبوي.",
            tr: "Medine'de 15 yıllık emlakçı. Peygamber Mescidi yakınlarında konut bulmaya yardımcı olabilirim."
        },
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200"
    },
    {
        id: "akhi-005",
        name: { en: "Mariam Al-Saud", ar: "مريم آل سعود", tr: "Meryem Al-Suud" },
        city: "Riyadh",
        yearsInSA: 20,
        profession: { en: "Education Specialist", ar: "أخصائية تعليم", tr: "Eğitim Uzmanı" },
        languages: ["ar", "en", "fr"],
        specialties: ["education", "family", "culture"],
        rating: 4.9,
        mentees: 56,
        bio: {
            en: "Expert in international schools and children's adaptation. Saudi national who understands newcomers.",
            ar: "خبيرة في المدارس الدولية وتكيف الأطفال. مواطنة سعودية تتفهم القادمين الجدد.",
            tr: "Uluslararası okullar ve çocukların adaptasyonu konusunda uzman."
        },
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
    },
    {
        id: "akhi-006",
        name: { en: "Yusuf Ibrahim", ar: "يوسف إبراهيم", tr: "Yusuf İbrahim" },
        city: "Jeddah",
        yearsInSA: 7,
        profession: { en: "Finance Manager", ar: "مدير مالي", tr: "Finans Müdürü" },
        languages: ["ar", "en", "ur"],
        specialties: ["finance", "business", "legal"],
        rating: 4.6,
        mentees: 15,
        bio: {
            en: "Banking and finance specialist. Can help with account opening and investment advice.",
            ar: "متخصص في البنوك والتمويل. أستطيع المساعدة في فتح الحسابات ونصائح الاستثمار.",
            tr: "Bankacılık ve finans uzmanı. Hesap açma ve yatırım tavsiyeleri konusunda yardımcı olabilirim."
        },
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200"
    }
];

export default function BrotherhoodPage({ lang }: BrotherhoodPageProps) {
    const [selectedCity, setSelectedCity] = useState<string>("all");
    const [showForm, setShowForm] = useState(false);

    const translations: Record<string, {
        title: string;
        subtitle: string;
        heroText: string;
        findMentor: string;
        becomeMentor: string;
        allCities: string;
        yearsIn: string;
        helped: string;
        families: string;
        languages: string;
        specialties: string;
        connect: string;
        stats: { mentors: string; helped: string; cities: string };
        specialtyLabels: Record<string, string>;
        formTitle: string;
        formName: string;
        formEmail: string;
        formCity: string;
        formMessage: string;
        formSubmit: string;
        akhiTitle: string;
        akhiDesc: string;
    }> = {
        en: {
            title: "Brotherhood Network",
            subtitle: "Connect with experienced mentors who've walked your path",
            heroText: "The Akhilik (Brotherhood) tradition brings together newcomers with established community members who volunteer their time and expertise to help you succeed in Saudi Arabia.",
            findMentor: "Find a Mentor",
            becomeMentor: "Become a Mentor",
            allCities: "All Cities",
            yearsIn: "years in KSA",
            helped: "Helped",
            families: "families",
            languages: "Speaks",
            specialties: "Expertise",
            connect: "Connect",
            stats: { mentors: "Active Mentors", helped: "Families Helped", cities: "Cities Covered" },
            specialtyLabels: {
                tech: "Technology", business: "Business", housing: "Housing", healthcare: "Healthcare",
                family: "Family", education: "Education", trade: "Trade", investment: "Investment",
                legal: "Legal", culture: "Culture", finance: "Finance"
            },
            formTitle: "Join the Brotherhood",
            formName: "Your Name",
            formEmail: "Email",
            formCity: "City in KSA",
            formMessage: "Tell us about yourself",
            formSubmit: "Submit Application",
            akhiTitle: "What is Akhilik?",
            akhiDesc: "Akhilik is a centuries-old Turkish-Islamic tradition of brotherhood and mentorship. In our modern interpretation, experienced residents volunteer to guide newcomers through the challenges of settling in a new country."
        },
        ar: {
            title: "شبكة الإخوة",
            subtitle: "تواصل مع مرشدين ذوي خبرة سلكوا طريقك",
            heroText: "تقليد الأخوة يجمع القادمين الجدد مع أفراد المجتمع المستقرين الذين يتطوعون بوقتهم وخبراتهم لمساعدتك على النجاح في السعودية.",
            findMentor: "ابحث عن مرشد",
            becomeMentor: "كن مرشداً",
            allCities: "جميع المدن",
            yearsIn: "سنوات في السعودية",
            helped: "ساعد",
            families: "عائلة",
            languages: "يتحدث",
            specialties: "التخصصات",
            connect: "تواصل",
            stats: { mentors: "مرشدون نشطون", helped: "عائلات تمت مساعدتها", cities: "مدن مغطاة" },
            specialtyLabels: {
                tech: "التقنية", business: "الأعمال", housing: "السكن", healthcare: "الصحة",
                family: "العائلة", education: "التعليم", trade: "التجارة", investment: "الاستثمار",
                legal: "القانون", culture: "الثقافة", finance: "المالية"
            },
            formTitle: "انضم إلى الإخوة",
            formName: "اسمك",
            formEmail: "البريد الإلكتروني",
            formCity: "المدينة في السعودية",
            formMessage: "أخبرنا عن نفسك",
            formSubmit: "تقديم الطلب",
            akhiTitle: "ما هي الأخوة؟",
            akhiDesc: "الأخوة هي تقليد تركي إسلامي عريق للأخوة والإرشاد. في تفسيرنا الحديث، يتطوع المقيمون ذوو الخبرة لتوجيه القادمين الجدد خلال تحديات الاستقرار في بلد جديد."
        },
        tr: {
            title: "Kardeşlik Ağı",
            subtitle: "Sizin yolunuzdan geçmiş deneyimli mentorlarla bağlantı kurun",
            heroText: "Ahilik geleneği, yeni gelenleri Suudi Arabistan'da başarılı olmanıza yardımcı olmak için zamanlarını ve uzmanlıklarını gönüllü olarak sunan yerleşik topluluk üyeleriyle bir araya getirir.",
            findMentor: "Mentor Bul",
            becomeMentor: "Mentor Ol",
            allCities: "Tüm Şehirler",
            yearsIn: "yıldır KSA'da",
            helped: "Yardım etti",
            families: "aile",
            languages: "Konuşuyor",
            specialties: "Uzmanlık",
            connect: "İletişim",
            stats: { mentors: "Aktif Mentor", helped: "Yardım Edilen Aile", cities: "Kapsanan Şehir" },
            specialtyLabels: {
                tech: "Teknoloji", business: "İş", housing: "Konut", healthcare: "Sağlık",
                family: "Aile", education: "Eğitim", trade: "Ticaret", investment: "Yatırım",
                legal: "Hukuk", culture: "Kültür", finance: "Finans"
            },
            formTitle: "Kardeşliğe Katıl",
            formName: "Adınız",
            formEmail: "E-posta",
            formCity: "KSA'daki Şehir",
            formMessage: "Kendinizi tanıtın",
            formSubmit: "Başvuru Gönder",
            akhiTitle: "Ahilik Nedir?",
            akhiDesc: "Ahilik, asırlık bir Türk-İslam kardeşlik ve mentorluk geleneğidir. Modern yorumumuzda, deneyimli yerleşikler yeni bir ülkeye yerleşmenin zorluklarında yeni gelenlere rehberlik etmek için gönüllü olurlar."
        }
    };

    const t = translations[lang] || translations.en;
    const cities = ["all", "Riyadh", "Jeddah", "Dammam", "Madinah"];

    const filteredMentors = selectedCity === "all"
        ? mentors
        : mentors.filter(m => m.city === selectedCity);

    const langLabels: Record<string, string> = {
        en: "English", ar: "العربية", tr: "Türkçe", fr: "Français", ur: "اردو"
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm mb-6">
                        <Sparkles className="h-4 w-4" />
                        <span>Akhilik Tradition</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">{t.subtitle}</p>
                    <p className="text-white/80 max-w-3xl mx-auto">{t.heroText}</p>
                </div>
            </section>

            {/* Stats */}
            <section className="-mt-8 relative z-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600">{mentors.length}+</div>
                            <div className="text-stone-600 text-sm mt-1">{t.stats.mentors}</div>
                        </div>
                        <div className="text-center border-x border-stone-200">
                            <div className="text-4xl font-bold text-amber-600">186+</div>
                            <div className="text-stone-600 text-sm mt-1">{t.stats.helped}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-amber-600">8</div>
                            <div className="text-stone-600 text-sm mt-1">{t.stats.cities}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Akhilik */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                        <div className="flex items-center gap-4 mb-4">
                            <Award className="h-10 w-10 text-amber-600" />
                            <h2 className="text-2xl font-bold text-stone-900">{t.akhiTitle}</h2>
                        </div>
                        <p className="text-stone-700 leading-relaxed">{t.akhiDesc}</p>
                    </div>
                </div>
            </section>

            {/* Filter & Actions */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-stone-400" />
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            >
                                <option value="all">{t.allCities}</option>
                                {cities.slice(1).map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="flex items-center gap-2 bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all shadow-md"
                        >
                            <UserPlus className="h-5 w-5" />
                            {t.becomeMentor}
                        </button>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            {showForm && (
                <section className="pb-8">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
                            <h3 className="text-2xl font-bold text-stone-900 mb-6">{t.formTitle}</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">{t.formName}</label>
                                    <input type="text" className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">{t.formEmail}</label>
                                    <input type="email" className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">{t.formCity}</label>
                                    <select className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500">
                                        {cities.slice(1).map(city => <option key={city}>{city}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">{t.formMessage}</label>
                                    <textarea rows={4} className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-amber-500"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                                    {t.formSubmit}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            )}

            {/* Mentors Grid */}
            <section className="py-8 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMentors.map((mentor) => (
                            <div key={mentor.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
                                <div className="relative">
                                    <img
                                        src={mentor.image}
                                        alt={mentor.name[lang as keyof typeof mentor.name] || mentor.name.en}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                        <span className="text-sm font-medium">{mentor.rating}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-stone-900">
                                        {mentor.name[lang as keyof typeof mentor.name] || mentor.name.en}
                                    </h3>
                                    <p className="text-amber-600 font-medium">
                                        {mentor.profession[lang as keyof typeof mentor.profession] || mentor.profession.en}
                                    </p>

                                    <div className="flex items-center gap-4 mt-4 text-sm text-stone-600">
                                        <span className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" /> {mentor.city}
                                        </span>
                                        <span>{mentor.yearsInSA} {t.yearsIn}</span>
                                    </div>

                                    <p className="text-stone-600 mt-4 text-sm leading-relaxed">
                                        {mentor.bio[lang as keyof typeof mentor.bio] || mentor.bio.en}
                                    </p>

                                    <div className="mt-4">
                                        <p className="text-xs text-stone-500 mb-2">{t.languages}:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {mentor.languages.map(l => (
                                                <span key={l} className="text-xs px-2 py-1 bg-stone-100 rounded-full">{langLabels[l]}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-xs text-stone-500 mb-2">{t.specialties}:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {mentor.specialties.map(s => (
                                                <span key={s} className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-full">
                                                    {t.specialtyLabels[s]}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between">
                                        <span className="text-sm text-stone-500">
                                            {t.helped} <strong>{mentor.mentees}</strong> {t.families}
                                        </span>
                                        <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm hover:bg-amber-700 transition-colors">
                                            <MessageCircle className="h-4 w-4" />
                                            {t.connect}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
