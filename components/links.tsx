"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = ({
  isFooter = false,
  className,
}: {
  isFooter?: boolean;
  className?: string;
}) => {
  const pathname = usePathname();

  const navbarLinks = [
    {
      linkText: "Templates",
      url: "/templates",
    },
    {
      linkText: "Services",
      url: "/services",
    },
    {
      linkText: "Components",
      url: "https://components.wabtech.tech",
    },
    {
      linkText: "Blog",
      url: "/blog",
    },
    {
      linkText: "Faqs",
      url: "/faqs",
    },
    {
      linkText: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div
      className={cn("flex-align-center", !isFooter && "space-x-6", className)}
    >
      {navbarLinks.map((link) => {
        const isActive =
          pathname === link.url ||
          (pathname.startsWith(link.url) && link.url !== "/");
        return (
          <>
            {link.linkText !== "Components" ? (
              <Link
                href={link.url}
                key={link.linkText}
                className={cn(
                  isFooter &&
                    "px-4 py-2 flex-1 basis-[8rem] border flex-grow text-center rounded-lg shadow-sm",
                  isActive && "text-brand",
                  isActive && isFooter && "border-brand"
                )}
              >
                {link.linkText}
              </Link>
            ) : (
              <a
                href={link.url}
                key={link.linkText}
                target="_blank"
                className={cn(
                  isFooter &&
                    "px-4 py-2 flex-1 basis-[8rem] border flex-grow text-center rounded-lg shadow-sm",
                  isActive && "text-brand",
                  isActive && isFooter && "border-brand"
                )}
              >
                {link.linkText}
              </a>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Links;
