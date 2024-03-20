import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import ProgressProvider from "@/components/progress-provider";
import Script from "next/script";
import { schemaMarkup } from "@/constants/markup-links";
import BackToTopButton from "@/components/back-button";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import localFont from "next/font/local";
import AOSWrapper from "@/components/aos-wrapper";
import { EdgeStoreProvider } from "../lib/edgestore";
import PayPalProvider from "@/components/paypal-provider";

export const viewport: Viewport = {
  themeColor: "#0bab7c",
};

export const metadata: Metadata = {
  title: {
    template: "Wabtech | %s",
    default: "Wabtech - Web Development Re-imagined",
  },

  manifest: "/manifest.json",

  description:
    "Revolutionize your online presence with Wabtech - your ultimate hub for cutting-edge web design, dynamic web application development, and a treasure trove of resources.We are dedicated to creating visually stunning, user-centric websites that captivate and engage. From sleek templates to powerful web applications, empower your business with our expertise and elevate your digital footprint today",
  keywords: [
    "Wabtech",
    "web design",
    "web application development",
    "nextjs templates",
    "React.js components",
    "Next.js components",
    "React.js reusable components components",
    "TypeScript components",
    "Tailwind CSS components",
    "UI/UX services",
    "web development tutorials",
    "free templates",
    "React Tailwind CSS components",
    "React Typescript components",
    "Next.js Tailwind CSS components",
    "Next.js Typescript CSS components",
    "premium templates",
    "web development resources",
    "nextjs",
    "react",
  ],
  // verification: {
  //   google: "cI3upoyb-xrIsFoaawJNZdNBJkXjY4Ta-s2bicZSJQo",
  // },
};

const thicccboi = localFont({
  src: [
    {
      path: "../public/fonts/THICCCBOI-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-thicccboi",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <Script
          id="schemaMarkup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body className={thicccboi.className}>
          <PayPalProvider>
            <EdgeStoreProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="wabtech-theme"
              >
                <BackToTopButton />
                <Toaster
                  toastOptions={{
                    className: "bg-white dark:bg-slate-800 dark:text-slate-200",
                    duration: 3000,
                  }}
                />
                <ProgressProvider />
                <AOSWrapper>{children}</AOSWrapper>
              </ThemeProvider>
            </EdgeStoreProvider>
          </PayPalProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
