import "@/app/styles/globals.css";
import { Providers } from "../providers";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import { Navbar } from "@/app/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Ubuntu_Mono } from "next/font/google";

export async function generateMetadata(props: {
  params: { locale: Promise<string> };
}): Promise<Metadata> {
  const locale = await (await props.params).locale;
  const t = await getTranslations({ locale, namespace: "index" });

  return Promise.resolve({
    // metadataBase: new URL('http://localhost:3000'),
    title: t("title"),
    description: t("desc"),
    icons: {
      icon: "/favicon.ico",
    },
  });
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const inter = Ubuntu_Mono({ weight: "700" });

export default async function IndexLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Promise<string> };
}) {
  const locale1 = await (await params).locale;
  return (
    <ClerkProvider>
      <NextIntlClientProvider locale={locale1}>
        <html
          suppressHydrationWarning
          lang={locale1}
          className={inter.className}
        >
          <head />
          <body className="min-h-screen bg-background font-sans antialiased inter.className">
            <Providers
              themeProps={{ attribute: "class", defaultTheme: "dark" }}
            >
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  {children}
                </main>
                <footer className="w-full flex items-center justify-center py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="#"
                    title="heroui.com homepage"
                  >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">HeroUI</p>
                  </Link>
                </footer>
              </div>
            </Providers>
          </body>
        </html>
      </NextIntlClientProvider>
    </ClerkProvider>
  );
}
