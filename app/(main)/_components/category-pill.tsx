"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

const CategoryPill = ({ name, image }: { name: string; image: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const clickedCategory = searchParams.get("category") || "";
  const searchTerm = searchParams.get("search") || "";
  const sortParam = searchParams.get("sort") || "";

  const createQueryString = useCallback(
    (categories: string[], search: string, sort: string) => {
      const params = new URLSearchParams();
      if (categories.length > 0) {
        params.set("category", categories.join(","));
      }
      if (search) {
        params.set("search", search);
      }
      if (sort) {
        params.set("sort", sort);
      }
      return params.toString();
    },
    []
  );

  const onClick = () => {
    const currentCategories = clickedCategory.split(",");

    let updatedCategories;
    if (currentCategories.includes(name)) {
      updatedCategories = currentCategories.filter(
        (category) => category !== name
      );
    } else {
      updatedCategories = [name];
    }

    const updatedQueryString = createQueryString(
      updatedCategories,
      searchTerm,
      sortParam
    );

    if (pathname === "/") {
      router.push(`/explore/${pathname}?${updatedQueryString}`, {
        scroll: false,
      });
    } else {
      router.push(`${pathname}?${updatedQueryString}`, { scroll: false });
    }
  };

  return (
    <div
      className={cn(
        "flex-align-center p-1 bg-white dark:bg-gray-900 rounded-full shrink-0 box-shadow dark:box-shadow-lg cursor-pointer",
        clickedCategory.includes(name) && "!bg-brand"
      )}
      onClick={onClick}
    >
      <div className="shrink-0 relative w-8 h-8">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="shrink-0">
        <p className={cn("ml-2", clickedCategory === name && " !text-white")}>
          {name}
        </p>
      </div>
    </div>
  );
};

export default CategoryPill;
