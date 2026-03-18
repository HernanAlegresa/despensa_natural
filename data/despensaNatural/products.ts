import type { Product, Size } from "@/lib/types/product";
import { getCategoryById } from "./categories";
import { getCollectionById } from "./collections";

// ============================================
// DESPENSA NATURAL — Productos (catálogo real PDF 1:1)
// ============================================
// Cada variante con precio distinto es un producto. Imágenes en /public/products/<slug>/.

const getCat = (id: string) => getCategoryById(id)!;
const getCol = (id: string) => getCollectionById(id)!;

export const products: Product[] = [
  // ── Aceites & Ghee ───────────────────────
  {
    id: "aceite-oliva-campo-claro-500ml",
    name: "Aceite de oliva",
    slug: "aceite-oliva-campo-claro-500ml",
    brand: "Campo Claro",
    description:
      "Aceite de oliva orgánico Campo Claro, prensado en frío y sin aditivos. Ideal para sumar sabor y calidad a tus comidas de todos los días.",
    price: 650,
    images: ["/products/aceite-oliva-campo-claro-500ml/pedrosk-37.jpg"],
    pdpImagePosition: "center 35%",
    category: getCat("aceite-de-oliva"),
    collection: getCol("aceite-de-oliva"),
    sizes: ["500 mL"] as Size[],
    colors: [{ name: "Único", hex: "#808000" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "aceite-oliva-espanol-los-ranchos-3l",
    name: "Aceite de oliva español",
    slug: "aceite-oliva-espanol-los-ranchos-3l",
    brand: "Los Ranchos",
    description:
      "Aceite de oliva extra virgen Los Ranchos, de sabor equilibrado y textura suave. Pensado para quienes buscan un aceite de calidad superior en formato familiar.",
    price: 2180,
    images: ["/products/aceite-oliva-espanol-los-ranchos-3l/pedrosk-09.jpg"],
    pdpImagePosition: "center 42%",
    category: getCat("aceite-de-oliva"),
    collection: getCol("aceite-de-oliva"),
    sizes: ["3 L"] as Size[],
    colors: [{ name: "Único", hex: "#808000" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-02T00:00:00Z",
  },
  {
    id: "ghee-agni-170g",
    name: "Ghee",
    slug: "ghee-agni-170g",
    brand: "Agni",
    description:
      "Ghee Agni elaborado en Uruguay con leche de vacas de pastoreo. Manteca clarificada rica en grasas saludables, ideal para cocinar y acompañar tus comidas.",
    price: 350,
    images: ["/products/ghee-agni-170g/pedrosk-45.jpg"],
    category: getCat("ghee"),
    collection: getCol("ghee"),
    sizes: ["170 g"] as Size[],
    colors: [{ name: "Único", hex: "#FFD700" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-03T00:00:00Z",
  },
  {
    id: "ghee-agni-300g",
    name: "Ghee",
    slug: "ghee-agni-300g",
    brand: "Agni",
    description:
      "Ghee Agni elaborado en Uruguay con leche de vacas de pastoreo. Manteca clarificada rica en grasas saludables, ideal para cocinar y acompañar tus comidas.",
    price: 520,
    images: ["/products/ghee-agni-300g/pedrosk-47.jpg"],
    category: getCat("ghee"),
    collection: getCol("ghee"),
    sizes: ["300 g"] as Size[],
    colors: [{ name: "Único", hex: "#FFD700" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-04T00:00:00Z",
  },

  // ── Yerbas ───────────────────────────────
  {
    id: "yerba-organica-campo-claro-500g",
    name: "Yerba orgánica",
    slug: "yerba-organica-campo-claro-500g",
    brand: "Campo Claro",
    description:
      "Yerba mate orgánica Campo Claro, con blend equilibrado de hoja, palo y polvo. Sabor tradicional y suave para tomar mate todos los días.",
    price: 150,
    images: ["/products/yerba-organica-campo-claro-500g/pedrosk-49.jpg"],
    pdpImagePosition: "center 30%",
    category: getCat("yerbas"),
    collection: getCol("yerbas"),
    sizes: ["500 g"] as Size[],
    colors: [{ name: "Único", hex: "#556B2F" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-05T00:00:00Z",
  },
  {
    id: "yerba-organica-campo-claro-1kg",
    name: "Yerba orgánica",
    slug: "yerba-organica-campo-claro-1kg",
    brand: "Campo Claro",
    description:
      "Yerba mate orgánica Campo Claro, con blend equilibrado de hoja, palo y polvo. Sabor tradicional y suave para tomar mate todos los días.",
    price: 290,
    images: ["/products/yerba-organica-campo-claro-1kg/pedrosk-43.jpg"],
    category: getCat("yerbas"),
    collection: getCol("yerbas"),
    sizes: ["1 kg"] as Size[],
    colors: [{ name: "Único", hex: "#556B2F" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-06T00:00:00Z",
  },
  {
    id: "yerba-montes-nativos-campo-claro-500g",
    name: "Yerba Montes Nativos",
    slug: "yerba-montes-nativos-campo-claro-500g",
    brand: "Campo Claro",
    description:
      "Yerba Montes Nativos Campo Claro, cultivada bajo montes nativos. Tiene un sabor más suave y delicado, respetando la biodiversidad del entorno.",
    price: 150,
    images: ["/products/yerba-montes-nativos-campo-claro-500g/a5f0f0b5-e686-4bdc-8417-90bd8c615328.png"],
    category: getCat("yerbas"),
    collection: getCol("yerbas"),
    sizes: ["500 g"] as Size[],
    colors: [{ name: "Único", hex: "#6B8E23" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-07T00:00:00Z",
  },
  {
    id: "yerba-montes-nativos-campo-claro-1kg",
    name: "Yerba Montes Nativos",
    slug: "yerba-montes-nativos-campo-claro-1kg",
    brand: "Campo Claro",
    description:
      "Yerba Montes Nativos Campo Claro, cultivada bajo montes nativos. Tiene un sabor más suave y delicado, respetando la biodiversidad del entorno.",
    price: 290,
    images: ["/products/yerba-montes-nativos-campo-claro-1kg/pedrosk-39.jpg"],
    pdpImageFit: "contain",
    category: getCat("yerbas"),
    collection: getCol("yerbas"),
    sizes: ["1 kg"] as Size[],
    colors: [{ name: "Único", hex: "#6B8E23" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-08T00:00:00Z",
  },

  // ── Cafés ────────────────────────────────
  {
    id: "cafe-soluble-campo-claro-50g",
    name: "Café soluble orgánico",
    slug: "cafe-soluble-campo-claro-50g",
    brand: "Campo Claro",
    description:
      "Café soluble Campo Claro, práctico y aromático para todos los días. Se disuelve fácil y ofrece un sabor equilibrado en cada taza.",
    price: 140,
    images: ["/products/cafe-soluble-campo-claro-50g/pedrosk-54.jpg"],
    category: getCat("cafes"),
    collection: getCol("cafes"),
    sizes: ["50 g"] as Size[],
    colors: [{ name: "Único", hex: "#3E2723" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-09T00:00:00Z",
  },
  {
    id: "cafe-organico-instantaneo-campo-claro-90g",
    name: "Café orgánico instantáneo",
    slug: "cafe-organico-instantaneo-campo-claro-90g",
    brand: "Campo Claro",
    description:
      "Café orgánico instantáneo Campo Claro, 100% arábica y liofilizado. Conserva el sabor y aroma de un café de alta calidad en versión práctica.",
    price: 320,
    images: ["/products/cafe-organico-instantaneo-campo-claro-90g/0c784b2a-4536-4b30-bafb-0fda407a2ddc.png"],
    category: getCat("cafes"),
    collection: getCol("cafes"),
    sizes: ["90 g"] as Size[],
    colors: [{ name: "Único", hex: "#4E342E" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-10T00:00:00Z",
  },

  // ── Miel ──────────────────────────────────
  {
    id: "miel-organica-dona-pura-250g",
    name: "Miel orgánica",
    slug: "miel-organica-dona-pura-250g",
    brand: "Doña Pura",
    description:
      "Miel orgánica Doña Pura, 100% pura y sin aditivos. Recolectada en entornos libres de agroquímicos para un sabor natural y auténtico.",
    price: 180,
    images: ["/products/miel-organica-dona-pura-250g/6f58aa34-433c-44e8-b2ba-3de015fb3249.png"],
    category: getCat("miel"),
    collection: getCol("miel"),
    sizes: ["250 g"] as Size[],
    colors: [{ name: "Único", hex: "#D4A017" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-11T00:00:00Z",
  },
  {
    id: "miel-organica-dona-pura-500g",
    name: "Miel orgánica",
    slug: "miel-organica-dona-pura-500g",
    brand: "Doña Pura",
    description:
      "Miel orgánica Doña Pura, 100% pura y sin aditivos. Recolectada en entornos libres de agroquímicos para un sabor natural y auténtico.",
    price: 295,
    images: ["/products/miel-organica-dona-pura-500g/pedrosk-56.jpg"],
    category: getCat("miel"),
    collection: getCol("miel"),
    sizes: ["500 g"] as Size[],
    colors: [{ name: "Único", hex: "#D4A017" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-12T00:00:00Z",
  },
  {
    id: "miel-de-pradera-dona-pura-250g",
    name: "Miel de pradera",
    slug: "miel-de-pradera-dona-pura-250g",
    brand: "Doña Pura",
    description:
      "Miel de pradera Doña Pura, de sabor suave y notas florales. Ideal para endulzar de forma natural tus desayunos y recetas.",
    price: 165,
    images: ["/products/miel-de-pradera-dona-pura-250g/pedrosk-59.jpg"],
    category: getCat("miel"),
    collection: getCol("miel"),
    sizes: ["250 g"] as Size[],
    colors: [{ name: "Único", hex: "#B8860B" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-13T00:00:00Z",
  },
  {
    id: "miel-de-pradera-dona-pura-500g",
    name: "Miel de pradera",
    slug: "miel-de-pradera-dona-pura-500g",
    brand: "Doña Pura",
    description:
      "Miel de pradera Doña Pura, de sabor suave y notas florales. Ideal para endulzar de forma natural tus desayunos y recetas.",
    price: 255,
    images: ["/products/miel-de-pradera-dona-pura-500g/pedrosk-60.jpg"],
    category: getCat("miel"),
    collection: getCol("miel"),
    sizes: ["500 g"] as Size[],
    colors: [{ name: "Único", hex: "#B8860B" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-14T00:00:00Z",
  },

  // ── Sal Marina ────────────────────────────
  {
    id: "sal-marina-saldemar-500g",
    name: "Sal marina",
    slug: "sal-marina-saldemar-500g",
    brand: "Saldemar",
    description:
      "Sal marina Saldemar obtenida por evaporación de agua de mar. Menos procesada que la sal refinada y con minerales presentes de forma natural.",
    price: 450,
    images: ["/products/sal-marina-saldemar-500g/pedrosk-80.jpg"],
    category: getCat("sal-marina"),
    collection: getCol("sal-marina"),
    sizes: ["500 g"] as Size[],
    colors: [{ name: "Único", hex: "#F5F5DC" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-15T00:00:00Z",
  },

  // ── Yogurt ───────────────────────────────
  {
    id: "yogurt-griego-yogreek-550g",
    name: "Yogurt griego",
    slug: "yogurt-griego-yogreek-550g",
    brand: "Yogreek",
    description:
      "Yogurt griego Yogreek, elaborado de forma artesanal con ingredientes simples. Cremoso, rico en proteínas y sin conservantes añadidos.",
    price: 340,
    images: ["/products/yogurt-griego-yogreek-550g/pedrosk-55.jpg"],
    category: getCat("yogurt"),
    collection: getCol("yogurt"),
    sizes: ["550 g"] as Size[],
    colors: [{ name: "Único", hex: "#FFFAF0" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-16T00:00:00Z",
  },

  // ── Snacks de Carne ───────────────────────
  {
    id: "carne-deshidratada-papotitas-dalton-50g",
    name: "Carne deshidratada Papotitas",
    slug: "carne-deshidratada-papotitas-dalton-50g",
    brand: "Dalton",
    description:
      "Chips de carne deshidratada Dalton sabor Papotitas, hechos con carne 100% uruguaya. 25 g de proteína por porción, sin azúcar y gluten free.",
    price: 190,
    images: ["/products/carne-deshidratada-papotitas-dalton-50g/pedrosk-63.jpg"],
    category: getCat("snacks-de-carne"),
    collection: getCol("snacks-de-carne"),
    sizes: ["50 g"] as Size[],
    colors: [{ name: "Único", hex: "#8B4513" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-17T00:00:00Z",
  },
  {
    id: "carne-deshidratada-carnitas-dalton-75g",
    name: "Carne deshidratada Carnitas",
    slug: "carne-deshidratada-carnitas-dalton-75g",
    brand: "Dalton",
    description:
      "Chips de carne deshidratada Dalton sabor Carnitas, hechos con carne 100% uruguaya. 38 g de proteína por porción, sin azúcar y gluten free.",
    price: 250,
    images: ["/products/carne-deshidratada-carnitas-dalton-75g/pedrosk-64.jpg"],
    category: getCat("snacks-de-carne"),
    collection: getCol("snacks-de-carne"),
    sizes: ["75 g"] as Size[],
    colors: [{ name: "Único", hex: "#8B4513" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-18T00:00:00Z",
  },

  // ── Cremas de frutos secos ────────────────
  {
    id: "crema-mani-4nuts-185g",
    name: "Crema de maní",
    slug: "crema-mani-4nuts-185g",
    brand: "4NUTS",
    description:
      "Crema de maní 4NUTS, hecha solo con maní tostado. Rica en proteínas y grasas saludables, sin azúcar ni aditivos.",
    price: 230,
    images: ["/products/crema-mani-4nuts-185g/pedrosk-26.jpg"],
    category: getCat("cremas-de-frutos-secos"),
    collection: getCol("cremas-de-frutos-secos"),
    sizes: ["185 g"] as Size[],
    colors: [{ name: "Único", hex: "#8B6914" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-19T00:00:00Z",
  },
  {
    id: "crema-mani-4nuts-350g",
    name: "Crema de maní",
    slug: "crema-mani-4nuts-350g",
    brand: "4NUTS",
    description:
      "Crema de maní 4NUTS, hecha solo con maní tostado. Rica en proteínas y grasas saludables, sin azúcar ni aditivos.",
    price: 280,
    images: ["/products/crema-mani-4nuts-350g/pedrosk-29.jpg"],
    category: getCat("cremas-de-frutos-secos"),
    collection: getCol("cremas-de-frutos-secos"),
    sizes: ["350 g"] as Size[],
    colors: [{ name: "Único", hex: "#8B6914" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-20T00:00:00Z",
  },
  {
    id: "crema-almendras-4nuts-185g",
    name: "Crema de almendras",
    slug: "crema-almendras-4nuts-185g",
    brand: "4NUTS",
    description:
      "Crema de almendras 4NUTS, suave y naturalmente dulce. Fuente de grasas saludables, ideal para tostadas, licuados o postres.",
    price: 390,
    images: ["/products/crema-almendras-4nuts-185g/crema-almendras.jpg"],
    category: getCat("cremas-de-frutos-secos"),
    collection: getCol("cremas-de-frutos-secos"),
    sizes: ["185 g"] as Size[],
    colors: [{ name: "Único", hex: "#C4A574" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-21T00:00:00Z",
  },

  // ── Granola ───────────────────────────────
  {
    id: "granola-best-peanut-butter-300g",
    name: "Granola Best, Peanut Butter",
    slug: "granola-best-peanut-butter-300g",
    brand: "Best",
    description:
      "Granola Best sabor Peanut Butter, crocante y llena de frutos y cereales. Con 12 g de proteína por porción. Perfecta para acompañar yogurt, leche o como snack.",
    price: 320,
    images: ["/products/granola-best-peanut-butter-300g/granola-peanut-butter.jpg"],
    category: getCat("granola"),
    collection: getCol("granola"),
    sizes: ["300 g"] as Size[],
    colors: [{ name: "Único", hex: "#8B7355" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-22T00:00:00Z",
  },
  {
    id: "granola-best-dark-chocolate-300g",
    name: "Granola Best, Dark Chocolate",
    slug: "granola-best-dark-chocolate-300g",
    brand: "Best",
    description:
      "Granola Best Dark Chocolate, mezcla crocante con notas de cacao intenso. Con 12 g de proteína por porción. Ideal para desayunos saciantes o sumar textura a tus postres.",
    price: 320,
    images: ["/products/granola-best-dark-chocolate-300g/granola-dark-chocolate.jpg"],
    category: getCat("granola"),
    collection: getCol("granola"),
    sizes: ["300 g"] as Size[],
    colors: [{ name: "Único", hex: "#5C4033" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-23T00:00:00Z",
  },

  // ── Barritas ──────────────────────────────
  {
    id: "barras-best-coco-10u",
    name: "Barras Best, Coco",
    slug: "barras-best-coco-10u",
    brand: "Best",
    description:
      "Barras Best sabor Coco, con 20 g de proteína por barra. Alto en fibra y sin azúcar añadida. Una opción práctica para colaciones más naturales.",
    price: 850,
    images: ["/products/barras-best-coco-10u/barras-best-coco.jpg"],
    category: getCat("barritas"),
    collection: getCol("barritas"),
    sizes: ["10 u"] as Size[],
    colors: [{ name: "Único", hex: "#8B6914" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-24T00:00:00Z",
  },
  {
    id: "barras-best-frutos-rojos-10u",
    name: "Barras Best, Frutos rojos",
    slug: "barras-best-frutos-rojos-10u",
    brand: "Best",
    description:
      "Barras Best sabor Frutos rojos, con 20 g de proteína por barra. Alto en fibra y sin azúcar añadida. Ideales para llevar en la mochila o cartera.",
    price: 850,
    images: ["/products/barras-best-frutos-rojos-10u/pedrosk-99.jpg"],
    category: getCat("barritas"),
    collection: getCol("barritas"),
    sizes: ["10 u"] as Size[],
    colors: [{ name: "Único", hex: "#8B0000" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-25T00:00:00Z",
  },
  {
    id: "barras-best-salty-caramel-10u",
    name: "Barras Best, Salty caramel",
    slug: "barras-best-salty-caramel-10u",
    brand: "Best",
    description:
      "Barras Best sabor Salty caramel, con 20 g de proteína por barra. Alto en fibra y sin azúcar añadida. El equilibrio justo entre dulce y salado.",
    price: 850,
    images: ["/products/barras-best-salty-caramel-10u/pedrosk-91.jpg"],
    category: getCat("barritas"),
    collection: getCol("barritas"),
    sizes: ["10 u"] as Size[],
    colors: [{ name: "Único", hex: "#D2691E" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-26T00:00:00Z",
  },
  {
    id: "barras-best-naranja-10u",
    name: "Barras Best, Naranja",
    slug: "barras-best-naranja-10u",
    brand: "Best",
    description:
      "Barras Best sabor Naranja, con 20 g de proteína por barra. Alto en fibra y sin azúcar añadida. Frescas y energéticas, ideales para media mañana, merienda o antes de entrenar.",
    price: 850,
    images: ["/products/barras-best-naranja-10u/pedrosk-97.jpg"],
    category: getCat("barritas"),
    collection: getCol("barritas"),
    sizes: ["10 u"] as Size[],
    colors: [{ name: "Único", hex: "#FF8C00" }],
    inStock: true,
    featured: false,
    createdAt: "2026-01-27T00:00:00Z",
  },
  {
    id: "barras-best-banana-split-10u",
    name: "Barras Best, Banana Split",
    slug: "barras-best-banana-split-10u",
    brand: "Best",
    description:
      "Barras Best sabor Banana Split, con 20 g de proteína por barra. Alto en fibra y sin azúcar añadida. Una opción dulce y saciante, perfecta para colaciones o después de entrenar.",
    price: 850,
    images: ["/products/barras-best-banana-split-10u/barras-best-banana-split.jpg"],
    cardImagePosition: "center 85%",
    pdpImagePosition: "center 80%",
    category: getCat("barritas"),
    collection: getCol("barritas"),
    sizes: ["10 u"] as Size[],
    colors: [{ name: "Único", hex: "#FFE135" }],
    inStock: true,
    featured: false,
    createdAt: "2026-03-18T00:00:00Z",
  },

  // ── Huevos ───────────────────────────────
  {
    id: "huevos-de-campo-las-casuarinas-30u",
    name: "Huevos de campo",
    slug: "huevos-de-campo-las-casuarinas-30u",
    brand: "Las Casuarinas",
    description:
      "Huevos de campo Las Casuarinas, de gallinas criadas al aire libre. Ideales para preparaciones diarias con sabor casero.",
    price: 300,
    images: ["/products/huevos-de-campo-las-casuarinas-30u/huevos-de-campo.jpg"],
    pdpImagePosition: "center 75%",
    category: getCat("huevos"),
    collection: getCol("huevos"),
    sizes: ["30 u"] as Size[],
    colors: [{ name: "Único", hex: "#FFEFD5" }],
    inStock: true,
    featured: true,
    createdAt: "2026-01-28T00:00:00Z",
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category?.slug === categorySlug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collection?.slug === collectionSlug);
}
