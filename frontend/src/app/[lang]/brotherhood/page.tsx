import BrotherhoodClient from "./BrotherhoodClient";

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'tr' }];
}

export default async function BrotherhoodPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <BrotherhoodClient lang={lang} />;
}
