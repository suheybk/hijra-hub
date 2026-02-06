import CommunityClient from "./CommunityClient";

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'tr' }];
}

export default async function CommunityPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <CommunityClient lang={lang} />;
}
