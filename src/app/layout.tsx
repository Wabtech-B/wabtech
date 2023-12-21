import { Toaster } from "react-hot-toast";
import "./globals.css";
import type { Metadata } from "next";
import BackToTopButton from "@/components/common/BackToTopButton";
import ProgressProvider from "./ProgressProvider";

export const metadata: Metadata = {
  title:
    "Wabtech - Elevate Your Web Development with Reusable Components & Templates",
  description:
    "Discover Wabtech, your one-stop destination for web design, web application development, and a wealth of resources to supercharge your online presence. Our team of experts specializes in crafting beautiful and user-centric websites that leave a lasting impression. We excel in building robust web applications that power businesses of all sizes. What sets us apart is our extensive library of reusable components, including those for React.js, TypeScript, and Tailwind CSS. These components streamline your development process, saving you time and effort. Elevate your web projects with our top-notch UI/UX services, ensuring intuitive interfaces and optimized user experiences. Gain knowledge and inspiration through our insightful blogs and tutorials. And for added convenience, explore our diverse collection of free and premium templates that cater to various design needs. Whether you're a seasoned developer or just starting, Wabtech empowers your online journey. Explore Wabtech today to transform your digital presence!",
  keywords: [
    "Wabtech",
    "web design",
    "web application development",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <head>
         <meta name="google-site-verification" content="cI3upoyb-xrIsFoaawJNZdNBJkXjY4Ta-s2bicZSJQo" />
      </head>
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
