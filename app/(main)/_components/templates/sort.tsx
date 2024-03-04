"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (sort: string) => {
      const params = new URLSearchParams(searchParams);
      if (sort !== "none") {
        params.set("sort", sort);
      } else {
        params.set("sort", "");
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSortChange = (value: string) => {
    const updatedQueryString = createQueryString(value);

    router.push(`${pathname}?${updatedQueryString}`, { scroll: false });
  };

  return (
    <div className="ml-2">
      <Select onValueChange={(value) => handleSortChange(value)}>
        <SelectTrigger className="sm:w-[200px]">
          <SelectValue placeholder="Sort By:" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">None</SelectItem>
          <SelectItem value="low_price">Low Price</SelectItem>
          <SelectItem value="high_price">High Price</SelectItem>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="oldest">Oldest</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Sort;
