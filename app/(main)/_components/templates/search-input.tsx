"use client";

import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      if (!value || !searchTerm) params.delete(name);
      return params.toString();
    },
    [searchParams, searchTerm]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(
      `${pathname}?${createQueryString("search", searchTerm)}` + "#templates"
    );
  };

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearchTerm("");
    }
  }, [searchParams]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="relative mt-6 max-w-lg mx-auto">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          {searchTerm && (
            <div
              className="absolute right-20 mr-1 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => {
                setSearchTerm("");
                router.push("/templates");
              }}
            >
              <X className="w-5 h-5 text-brand" />
            </div>
          )}
          <input
            type="text"
            className="w-full border-none outline-none pl-8 text-gray-600 pr-20 bg-white py-3 rounded-full placeholder:text-gray-400"
            placeholder="Search for templates"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button className="rounded-full absolute right-2 top-1/2 -translate-y-1/2 focus:!ring-0 focus:!ring-offset-0">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
