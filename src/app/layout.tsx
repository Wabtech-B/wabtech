import "./globals.css";
import type { Metadata } from "next";

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
      <link rel="icon" href="favicon.png" sizes="any" />
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
