import { Toaster } from "react-hot-toast";
import "./globals.css";
import type { Metadata } from "next";
import BackToTopButton from "@/components/common/BackToTopButton";
import ProgressProvider from "./ProgressProvider";

export const metadata: Metadata = {
  title: "Wabtech",
  description:
    "Wabtech boosts your web development productivity by providing clean and elegant components you can reuse in your own projects, professional free and premium templates, and a lot of free resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body suppressHydrationWarning={true}>
        <BackToTopButton />
        <Toaster
          toastOptions={{
            className: "bg-white dark:bg-zinc-600 dark:text-zinc-200",
            duration: 3000,
          }}
        />
        <ProgressProvider />
        {children}
      </body>
    </html>
  );
}
