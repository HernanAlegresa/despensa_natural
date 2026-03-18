"use client";

import { useShopSort } from "@/hooks/useShopSort";
import { useSearchParams } from "next/navigation";
import { Select } from "@/components/ui/select";
import type { SortOption } from "@/lib/types/product";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Relevancia" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "name-asc", label: "Nombre: A a Z" },
  { value: "name-desc", label: "Nombre: Z a A" },
  { value: "newest", label: "Más recientes" },
];

export function SortDropdown() {
  const { currentSort, updateSort } = useShopSort();
  const searchParams = useSearchParams();
  const hasSearch = !!searchParams.get("q");

  // Show "Relevance" only when there's a search query
  const visibleOptions = hasSearch
    ? sortOptions
    : sortOptions.filter((opt) => opt.value !== "relevance");

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Select
          id="sort"
          value={currentSort === "relevance" && !hasSearch ? "newest" : currentSort}
          onChange={(e) => updateSort(e.target.value as SortOption)}
          className="w-56 appearance-none border-[#004A3D] bg-[#004A3D] pr-10 text-[#F0E8DB] [&_option]:text-[#F0E8DB] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-[#004A3D]"
          aria-label="Ordenar productos"
        >
          {visibleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#F0E8DB]"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
