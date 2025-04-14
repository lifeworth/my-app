import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const localeThis = await (await (params)).locale;
    const messages = await getMessages();

    return <NextIntlClientProvider locale={localeThis} messages={messages}>
        {children}
    </NextIntlClientProvider>
}