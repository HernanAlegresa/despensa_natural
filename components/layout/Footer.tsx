import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";

// Enlace del desarrollador
const DEVELOPER_URL = "https://www.linkedin.com/in/hernán-alegresa-methol-url";
const DEVELOPER_NAME = "Hernán Alegresa";

export function Footer() {
  const navLinks = [
    ...siteConfig.footerNav.shop,
    ...siteConfig.footerNav.company,
  ];

  return (
    <footer className="border-t border-[#292412] bg-[#292412]">
      {/* Bloques principales */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8 text-center md:text-left">
          {/* Bloque 1: Marca */}
          <div className="flex items-center justify-center md:justify-start">
            <Link
              href="/"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
            >
              <Image
                src="/logo/logo_sinfondo.png"
                alt={siteConfig.name}
                width={260}
                height={50}
                className="h-30 w-auto text-black"
              />
            </Link>
          </div>

          {/* Bloque 2: Navegación */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F0E8DB]">
              Navegación
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FFFFFF] transition-colors hover:text-[#FFFFFF]/90 focus:outline-none focus:ring-2 focus:ring-[#F0E8DB] focus:ring-offset-2 focus:ring-offset-[#292412] rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloque 3: Contacto */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F0E8DB]">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              {siteConfig.social.whatsapp && (
                <li>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#FFFFFF] transition-colors hover:text-[#FFFFFF]/90 focus:outline-none focus:ring-2 focus:ring-[#F0E8DB] focus:ring-offset-2 focus:ring-offset-[#292412] rounded"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    WhatsApp
                  </a>
                </li>
              )}
              {siteConfig.social.instagram && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#FFFFFF] transition-colors hover:text-[#FFFFFF]/90 focus:outline-none focus:ring-2 focus:ring-[#F0E8DB] focus:ring-offset-2 focus:ring-offset-[#292412] rounded"
                  >
                    <Instagram className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    Instagram
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[#FFFFFF] transition-colors hover:text-[#FFFFFF]/90 focus:outline-none focus:ring-2 focus:ring-[#F0E8DB] focus:ring-offset-2 focus:ring-offset-[#292412] rounded"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.location && (
                <li className="inline-flex items-start gap-2 text-sm text-[#FFFFFF]">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{siteConfig.location}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Franja inferior */}
      <div className="border-t border-[#004A3D] bg-[#004A3D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center">
            <p className="text-sm text-[#F0E8DB] sm:mx-auto">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <p className="text-xs text-[#A8CFB0] sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:text-right">
              Sitio desarrollado por{" "}
              <a
                href={DEVELOPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8CFB0] underline decoration-[#A8CFB0]/60 underline-offset-2 transition-colors hover:text-[#A8CFB0] hover:decoration-[#A8CFB0] focus:outline-none focus:ring-2 focus:ring-[#F0E8DB] focus:ring-offset-2 focus:ring-offset-[#004A3D] rounded"
              >
                {DEVELOPER_NAME}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
