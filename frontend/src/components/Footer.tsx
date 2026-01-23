export function Footer({ lang }: { lang: string }) {
    const t = {
        en: "© 2026 Hijra Hub. All rights reserved.",
        ar: "© 2026 هجرة هب. جميع الحقوق محفوظة."
    }[lang === 'ar' ? 'ar' : 'en'];

    return (
        <footer className="bg-stone-50 border-t border-stone-200 py-12">
            <div className="max-w-7xl mx-auto px-4 text-center text-stone-500">
                <p>{t}</p>
            </div>
        </footer>
    )
}
