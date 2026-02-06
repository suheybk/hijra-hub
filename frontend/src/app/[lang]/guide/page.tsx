import GuideClient from "./GuideClient";

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'tr' }];
}

export default async function GuidePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <GuideClient lang={lang} />;
}
