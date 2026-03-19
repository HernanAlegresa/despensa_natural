import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactanos para hacer tu pedido o resolver cualquier consulta sobre nuestros productos.",
  openGraph: {
    title: "Contacto | Despensa Natural",
    description:
      "Contactanos para hacer tu pedido o resolver cualquier consulta sobre nuestros productos.",
    url: "https://despensanatural.shop/contacto",
  },
};

export default function ContactoPage() {
  const whatsappUrl = siteConfig.social.whatsapp || "#";
  const instagramUrl = siteConfig.social.instagram || "#";

  return (
    <div className="min-h-screen bg-[#F0E8DB]">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#004A3D] sm:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-[#292412]">
            Escribinos por WhatsApp o Instagram para pedidos, consultas y
            coordinación de envíos o retiro.
          </p>
        </div>

        {/* Fila 1: contactos principales */}
        <section className="mb-10">
          <div className="grid gap-6 md:grid-cols-2">
            {/* WhatsApp */}
            <div className="flex h-full flex-col justify-between rounded-2xl bg-[#F9F5F0] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004A3D]">
                    <MessageCircle className="h-5 w-5 text-[#F0E8DB]" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#292412]">
                    WhatsApp
                  </p>
                </div>
                <p className="mt-1 text-base font-medium text-[#292412]">
                  Pedidos y consultas
                </p>
                <p className="mt-1 inline-flex items-center gap-2 text-sm text-[#004A3D]">
                  <span className="inline-flex rounded-full bg-[#004A3D]/10 px-2.5 py-0.5 text-xs font-semibold text-[#004A3D]">
                    Respuesta {siteConfig.responseTime.toLowerCase()}
                  </span>
                  <span className="break-words">099 426 168</span>
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#A8CFB0] px-4 py-2.5 text-sm font-semibold text-[#004A3D] transition-colors hover:bg-[#A8CFB0]/90 focus:outline-none focus:ring-2 focus:ring-[#004A3D] focus:ring-offset-2"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex h-full flex-col justify-between rounded-2xl bg-[#F9F5F0] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004A3D]">
                    <Instagram className="h-5 w-5 text-[#F0E8DB]" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#292412]">
                    Instagram
                  </p>
                </div>
                <p className="mt-1 text-base font-medium text-[#292412]">
                  @despensanaturaluy
                </p>
                <p className="mt-1 text-sm text-[#004A3D]">
                  Novedades, productos y contenido del día a día.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#A8CFB0] px-4 py-2.5 text-sm font-semibold text-[#004A3D] transition-colors hover:bg-[#A8CFB0]/90 focus:outline-none focus:ring-2 focus:ring-[#004A3D] focus:ring-offset-2"
                >
                  Ver Instagram
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Fila 2: información secundaria */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <div className="flex h-full flex-col rounded-2xl bg-[#F9F5F0] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004A3D]">
                  <Mail className="h-5 w-5 text-[#F0E8DB]" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#292412]">
                  Email
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 text-sm font-medium text-[#292412] underline underline-offset-2 hover:no-underline break-words"
              >
                {siteConfig.email}
              </a>
              <p className="mt-2 text-sm text-[#004A3D]">
                Ideal para consultas más detalladas o documentación.
              </p>
            </div>

            {/* Ubicación */}
            <div className="flex h-full flex-col rounded-2xl bg-[#F9F5F0] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004A3D]">
                  <MapPin className="h-5 w-5 text-[#F0E8DB]" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#292412]">
                  Ubicación
                </p>
              </div>
              <p className="mt-1 text-sm font-medium text-[#292412]">
                Jardines de Carrasco
              </p>
              <p className="text-sm text-[#004A3D]">Ricardo Areco 7530</p>
              <p className="mt-2 text-sm text-[#004A3D]">
                Coordinamos día y horario de retiro por WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* Formas de pago */}
        <section className="overflow-hidden rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
          {/* Header estilo tabla (como Envíos) */}
          <div className="bg-[#004A3D] px-6 py-4">
            <h2 className="text-xl font-bold text-[#F0E8DB]">Formas de pago</h2>
          </div>

          {/* Body */}
          <div className="bg-[#F9F5F0] px-6 py-6">
            <p className="mb-4 text-sm text-[#292412]">
              Elegí la opción que te quede más cómoda al momento de confirmar tu
              pedido.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#004A3D] bg-[#F0E8DB] p-4">
                <p className="text-sm font-medium text-[#004A3D]">
                  Transferencia bancaria
                </p>
                <p className="mt-1 text-sm text-[#292412]">
                  Cuenta Itaú{" "}
                  <span className="font-mono font-semibold text-[#004A3D]">
                    3171900
                  </span>
                  .
                </p>
              </div>

              <div className="rounded-xl border border-[#004A3D] bg-[#F0E8DB] p-4">
                <p className="text-sm font-medium text-[#004A3D]">Efectivo</p>
                <p className="mt-1 text-sm text-[#292412]">
                  Al momento de retirar o recibir tu pedido.
                </p>
              </div>
            </div>

            <p className="pt-3 text-xs text-[#292412]">
              Una vez que nos envíes tu pedido por WhatsApp, te confirmamos el
              total y los datos para el pago.
            </p>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
