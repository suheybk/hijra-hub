
import LoginClient from "./LoginClient";

export default async function LoginPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <LoginClient lang={lang} />;
}
