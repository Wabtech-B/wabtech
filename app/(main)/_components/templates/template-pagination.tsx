"use client";

import Pagination from "@/components/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

interface TemplatePaginationProps {
  pages: number;
}

const TemplatePagination = ({ pages }: TemplatePaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      if (Number(value) === 1) params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`${pathname}?${createQueryString("page", page.toString())}`);
  };

  return (
    <div className="flex justify-center md:justify-end mt-8">
      <Pagination
        currentPage={currentPage}
        totalPages={pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TemplatePagination;
