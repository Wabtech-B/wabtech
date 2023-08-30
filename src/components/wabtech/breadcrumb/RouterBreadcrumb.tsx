"use client";

import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  separator: string | React.ReactNode;
}

const RouterBreadcrumb: React.FC<BreadcrumbProps> = ({ separator }) => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="list-none flex items-center">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-[#0bab7c] hover:underline flex items-center gap-x-2"
          >
            <FiHome className="mr-1" />
            Home
          </Link>
          {paths.length > 0 && <span className="mx-1">{separator}</span>}
        </li>
        {paths.map((path, index) => {
          if (path !== "/") {
            return (
              <li key={index} className="flex items-center">
                {index !== paths.length - 1 ? (
                  <>
                    <Link
                      href={`/${paths.slice(0, index + 1).join("/")}`}
                      className="text-[#0bab7c] hover:underline capitalize"
                    >
                      {path}
                    </Link>
                    <span className="mx-1">
                      {index < paths.length - 1 && (
                        <span className="mx-1">{separator}</span>
                      )}
                    </span>
                  </>
                ) : (
                  <span className="capitalize">{path}</span>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
};

export default RouterBreadcrumb;
