import Image from "next/image"
import { Shield, Cloud } from "lucide-react"
import SecurityImage from '../../public/sign_security.png'

export default function SecurityFeatures() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#17A2B8]" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-xl font-medium">Seguridad de Principio a Fin...</p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Firmá digitalmente de forma rápida, segura y eficiente
              </h2>
            </div>

            {/* Security Features */}
            <div className="space-y-8">
              {/* Validez Total */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Validez Total</h3>
                </div>
                <p className="text-white/90 leading-relaxed max-w-xl text-justify">
                  Cumple con los requisitos de seguridad establecidos por la ICPP (Infraestructura de Clave Pública del
                  Paraguay) y tiene plena validez jurídica, así como las firmas manuscritas.
                </p>
              </div>

              {/* Certificado Cualificado */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Cloud className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Certificado Cualificado de Firma Electrónica en la Nube</h3>
                </div>
                <p className="text-white/90 leading-relaxed max-w-xl text-justify">
                  Almacenado en un HSM (Módulo de Seguridad Hardware), es la opción más segura y confiable para la firma
                  digital de documentos y transacciones en formato electrónico.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid gap-4">
              {/* Main Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={ SecurityImage }
                  alt="Digital Security Visualization"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

