"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import Code100Logo from "../../public/code100_logo.png"

// Definir las categorías de rutas y sus contactos correspondientes
const contactInfo = {
  default: {
    phone: "+595 21 729 6900",
    whatsapp: "+595 992 460 600",
    email: "contacto@code100.com.py",
  },
  nosotrosContacto: {
    phone: "+595 21 729 6900",
    whatsapp: "+595 992 460 600",
    email: "info@code100.com.py",
  },
  productos: {
    phone: "+595 21 729 6900",
    whatsapp: "+595 992 460 600",
    email: "contacto@code100.com.py",
  },
  soporteRepositorio: {
    phone: "+595 21 729 6900",
    whatsapp: "+595 974 188 034",
    email: "soporte@code100.com.py",
  },
}

export default function Footer() {
  const pathname = usePathname()

  // Determinar qué categoría de contacto mostrar basado en la ruta actual
  const getContactCategory = (path: string) => {
    // Rutas de nosotros y contacto
    if (path.includes("/nosotros") || path.includes("/contacto")) {
      return "nosotrosContacto"
    }

    // Rutas de productos
    if (
      path.includes("/productos") ||
      path.includes("/certificado") ||
      path.includes("/futura100") ||
      path.includes("/talento100") ||
      path.includes("/dataflow") ||
      path.includes("/codesign") ||
      path.includes("/facturacion-electronica")
    ) {
      return "productos"
    }

    // Rutas de soporte y repositorio
    if (path.includes("/soporte") || path.includes("/repositorio")) {
      return "soporteRepositorio"
    }

    // Por defecto
    return "default"
  }

  const category = getContactCategory(pathname)
  const { phone, whatsapp, email } = contactInfo[category]

  // Formatear el número de WhatsApp para el enlace (eliminar espacios y +)
  const whatsappLink = `https://wa.me/${whatsapp.replace(/\s+/g, "").replace("+", "")}`

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Section */}
          <div className="space-y-8">
            <Image
              src={Code100Logo || "/placeholder.svg"}
              alt="Code100"
              width={240}
              height={80}
              className="w-auto h-20"
            />
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/share/18anzFKx9a/?mibextid=wwXIfr"
                className="text-gray-400 hover:text-gray-600"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/code100.py?igsh=NThuZnRwZzhzajA5"
                className="text-gray-400 hover:text-gray-600"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://youtube.com/@code100-firmadigital2?si=EXAVLPx3I5oy3pXX"
                className="text-gray-400 hover:text-gray-600"
              >
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/company/code100-s-a/" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Products and Support */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">PRODUCTOS</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/productos" className="text-gray-600 hover:text-gray-900">
                    Certificado de Firma Electrónica
                  </Link>
                </li>
                <li>
                  <Link href="/facturacion-electronica" className="text-gray-600 hover:text-gray-900">
                    Facturación Electrónica
                  </Link>
                </li>
                <li>
                  <Link href="talento100-page" className="text-gray-600 hover:text-gray-900">
                    Documentos Laborales
                  </Link>
                </li>
                <li>
                  <Link href="/codesign" className="text-gray-600 hover:text-gray-900">
                    Firma masiva de documentos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">SOPORTE</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/soporte" className="text-gray-600 hover:text-gray-900">
                    Manuales y Drivers
                  </Link>
                </li>
                <li>
                  <Link href="/repositorio-de-documentos-publicos" className="text-gray-600 hover:text-gray-900">
                    Repositorio de Documentos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company and Help */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">EMPRESA</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/nosotros" className="text-gray-600 hover:text-gray-900">
                    Sobre la empresa
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros" className="text-gray-600 hover:text-gray-900">
                    Políticas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">AYUDA</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
                    Consultas
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
                    Solicitar Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-600 hover:text-gray-900">
                    Soporte Técnico
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">CONTACTO</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>{phone}</span>
              </p>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>WhatsApp: {whatsapp}</span>
              </Link>
              <p className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{email}</span>
              </p>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <p>Brizuela Nº 750 c/ Eusebio Lillo - Villa Morra, Asunción</p>
                  <p>Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción</p>
                  <p>Sucursal CDE - Av. Adrian Jara y Pampliega, Edificio San Miguel 1er piso oficina N° 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Code100. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
