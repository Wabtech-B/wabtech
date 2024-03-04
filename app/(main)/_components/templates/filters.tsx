"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import Dropdown from "@/components/dropdown";
import filters from "@/constants/filters";

const Filters = ({ filtersCount }: { filtersCount: any }) => {
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});

  console.log(filtersCount);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchTerm = searchParams.get("search") || "";
  const sortParam = searchParams.get("sort") || "";
  const categoryParam = searchParams.get("category") || "";

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(selectedFilters).forEach(([category, values]) => {
      values.forEach((value) => {
        params.append(category, value);
      });
    });

    if (searchTerm) {
      params.set("search", searchTerm);
    }
    if (sortParam) {
      params.set("sort", sortParam);
    }
    if (categoryParam) {
      params.set("category", categoryParam);
    }

    return params.toString();
  }, [categoryParam, searchTerm, selectedFilters, sortParam]);

  useEffect(() => {
    const selectedFilterCount = Object.values(selectedFilters).flat().length;

    if (selectedFilterCount >= 0) {
      const updatedQueryString = createQueryString();
      router.push(`${pathname}?${updatedQueryString}`, { scroll: false });
    }
  }, [
    selectedFilters,
    pathname,
    router,
    searchTerm,
    sortParam,
    categoryParam,
    createQueryString,
  ]);

  const handleFilterChange = (filterValue: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };

      if (!updatedFilters[filterValue]) {
        updatedFilters[filterValue] = [];
      }

      if (updatedFilters[filterValue].includes(value)) {
        updatedFilters[filterValue] = updatedFilters[filterValue].filter(
          (val) => val !== value
        );
      } else {
        updatedFilters[filterValue] = [...updatedFilters[filterValue], value];
      }

      return updatedFilters;
    });
  };

  const clearAllFilters = () => {
    router.push("/explore");
    setSelectedFilters({});
  };

  return (
    <div className="flex-align-center">
      <Dropdown
        general
        className="!w-[250px] p-4"
        trigger={
          <Button variant="secondary" asChild>
            <div>
              <Filter className="w-5 h-5" />
              <span className="ml-3">Filters</span>
            </div>
          </Button>
        }
      >
        <div>
          {filters.map((filterGroup, index) => (
            <div key={filterGroup.category} className="my-3">
              <h3 className="uppercase">{filterGroup.category}</h3>
              {filterGroup.options.map((filterOption) => {
                return (
                  <div key={filterOption.value} className="my-3">
                    <label className="cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters[
                          filterGroup.filterValue
                        ]?.includes(filterOption.value)}
                        onChange={() =>
                          handleFilterChange(
                            filterGroup.filterValue,
                            filterOption.value
                          )
                        }
                        className="form-checkbox"
                      />
                      <span className="ml-2 text-muted-foreground">
                        {filterOption.name} (
                        {filtersCount[index][filterGroup.category][
                          filterOption.value
                        ] || 0}
                        )
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Dropdown>
      {Object.values(selectedFilters).flat().length > 0 && (
        <Button variant="outline" className="ml-2" onClick={clearAllFilters}>
          Clear All
        </Button>
      )}
    </div>
  );
};

export default Filters;
