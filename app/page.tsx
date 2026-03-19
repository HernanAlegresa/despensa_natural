import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { BrandStory } from "@/components/sections/BrandStory";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    absolute: "Despensa Natural | Productos naturales en Montevideo",
  },
  description:
    "Descubrí productos naturales, alimentos saludables y opciones reales para tu día a día en Montevideo. Compra fácil por WhatsApp.",
  openGraph: {
    title: "Despensa Natural | Productos naturales en Montevideo",
    description:
      "Descubrí productos naturales, alimentos saludables y opciones reales para tu día a día en Montevideo. Compra fácil por WhatsApp.",
    url: "https://despensanatural.shop",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryShowcase />
      <BrandStory />
    </>
  );
}
