"use client";

import { useMemo } from "react";
import type { Product } from "@/lib/types/product";
import { ProductCard } from "@/components/shop/ProductCard";

interface CompleteTheLookProps {
  products: Product[];
  currentProductId: string;
}

export function CompleteTheLook({
  products,
  currentProductId,
}: CompleteTheLookProps) {
  const relatedProducts = useMemo(
    () => products.filter((p) => p.id !== currentProductId).slice(0, 4),
    [products, currentProductId]
  );

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-2xl font-bold mb-8">También te puede interesar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
