"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const LIFESTYLE_IMAGE = "/brand/pedrosk-85.jpg";

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="brand-story"
      ref={sectionRef}
      className="overflow-hidden border-0 bg-[#F0E8DB] py-8 sm:py-10"
    >
      <div className="container mx-auto border-0 px-4">
        <div className="grid items-center gap-12 border-0 lg:grid-cols-2 lg:gap-20">
          {/* Image with parallax (desktop) */}
          <motion.div
            style={{ y: imageY }}
            className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border-0 lg:block"
          >
            <Image
              src={LIFESTYLE_IMAGE}
              alt="Despensa Natural — alimentos naturales"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500"
            >
              Nuestra filosofía
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mb-6 text-xl font-semibold tracking-tight text-[#004A3D] sm:text-2xl"
            >
              Comer mejor.
              <br />
              Elegir productos reales.
              <br />
              Elegir productos naturales.
            </motion.h2>

            {/* Image on mobile: debajo del título, encima del texto */}
            <motion.div
              style={{ y: imageY }}
              className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl border-0 lg:hidden"
            >
              <Image
                src={LIFESTYLE_IMAGE}
                alt="Despensa Natural — alimentos naturales"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 space-y-4 text-[#292412] leading-relaxed"
            >
              <p>
                Trabajamos con alimentos reales sin ultraprocesados. Productos
                con ingredientes simples y naturales.
              </p>
              <p>
                Nos enfocamos en ofrecer opciones para que puedas incorporar a
                tu día a día alimentos más puros, nutritivos y honestos.
              </p>
              <p>
                Queremos acercarte lo mejor de la naturaleza directo a tu casa,
                para acompañar una alimentación consciente y de calidad.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 rounded-lg bg-[#004A3D] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#004A3D]/90"
              >
                Ver catálogo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 rounded-lg bg-[#004A3D] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#004A3D]/90"
              >
                Quiénes somos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
