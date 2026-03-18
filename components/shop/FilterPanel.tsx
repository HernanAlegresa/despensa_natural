"use client";

import { useMemo } from "react";
import { useShopFilters } from "@/hooks/useShopFilters";
import { getAvailableFilters } from "@/lib/shop/filters";
import { getAllProducts } from "@/data/despensaNatural";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FilterPanel() {
  const {
    filters,
    toggleCategory,
    setPriceRange,
    clearFilters,
    hasFilters,
  } = useShopFilters();

  const allProducts = useMemo(() => getAllProducts(), []);
  const availableFilters = useMemo(
    () => getAvailableFilters(allProducts),
    [allProducts]
  );

  return (
    <aside className="w-full md:w-64 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#004A3D]">Filtros</h2>
        {hasFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-sm text-[#292412]"
          >
            Limpiar
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-[#292412]">Categoría</h3>
        <div className="space-y-2">
          {availableFilters.categories.map((categorySlug) => {
            const isChecked = filters.category?.includes(categorySlug) || false;
            return (
              <label
                key={categorySlug}
                className={cn(
                  "flex items-center gap-2 cursor-pointer",
                  "hover:text-[#292412] transition-colors"
                )}
              >
                <Checkbox
                  checked={isChecked}
                  onChange={() => toggleCategory(categorySlug)}
                  aria-label={`Filtrar por ${categorySlug}`}
                  className="border-[#292412]"
                />
                <span className="text-sm capitalize text-[#292412]">
                  {categorySlug.replace(/-/g, " ")}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-[#292412]">Precio</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Mín"
              min="0"
              step="1"
              value={filters.minPrice || ""}
              onChange={(e) => {
                const value = e.target.value
                  ? parseFloat(e.target.value)
                  : undefined;
                setPriceRange(value, filters.maxPrice);
              }}
              className="w-full border-[#292412] text-[#292412] placeholder:text-[#292412]/70"
              aria-label="Precio mínimo"
            />
            <span className="text-sm text-[#292412]">a</span>
            <Input
              type="number"
              placeholder="Máx"
              min="0"
              step="1"
              value={filters.maxPrice || ""}
              onChange={(e) => {
                const value = e.target.value
                  ? parseFloat(e.target.value)
                  : undefined;
                setPriceRange(filters.minPrice, value);
              }}
              className="w-full border-[#292412] text-[#292412] placeholder:text-[#292412]/70"
              aria-label="Precio máximo"
            />
          </div>
          <p className="text-xs text-[#292412]">
            ${availableFilters.priceRange.min.toFixed(0)} - $
            {availableFilters.priceRange.max.toFixed(0)}
          </p>
        </div>
      </div>
    </aside>
  );
}
