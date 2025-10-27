import { FileSearch, Fingerprint, Lock, Shield } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: FileSearch,
      title: "INTEGRIDAD",
      description: "Protección contra la modificación de los datos en forma intencional o accidental.",
      color: "text-[#F59E0B]",
    },
    {
      icon: Fingerprint,
      title: "SEGURIDAD JURÍDICA",
      description: "Asegura que el mensaje provenga realmente de la persona que se identifica como su remitente.",
      color: "text-[#F59E0B]",
    },
    {
      icon: Lock,
      title: "TRAZABILIDAD",
      description: "Asegura que solo las personas autorizadas puedan acceder a dicha información.",
      color: "text-[#F59E0B]",
    },
    {
      icon: Shield,
      title: "NO REPUDIO",
      description: "Asegura que la persona identificada como remitente no puede negar haber enviado el mensaje",
      color: "text-[#7C3AED]",
    },
  ]

  return (
    <section className="relative bg-gray-50 py-50 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-600">FIRMA DESDE DONDE ESTÉS</p>
          <h2 className="text-balance text-3xl font-bold text-gray-900 md:text-4xl">
            La Firma Digital te desbloquea un mundo de soluciones
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Icon className={`h-16 w-16 ${feature.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-700">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Gradient bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-green-400 to-green-500" />
    </section>
  )
}
