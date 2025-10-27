import Image from "next/image"
import { Coins, FileCheck, GraduationCap, BadgeCheck } from "lucide-react"

export function UseCases() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          En estas circunstancias, la firma digital es tu mejor opción
        </h2>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image src="/person-working-on-laptop-at-beach-vacation.jpg" alt="Estás de vacaciones" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Estás de vacaciones</h3>
              <p className="text-sm text-gray-600">Vacaciones libres de estrés, gracias a la firma digital.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image src="/gripe-reposo.jpg" alt="Estás con reposo médico" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Estás con reposo médico</h3>
              <p className="text-sm text-gray-600">
                Aunque tengas reposo médico, puedes cerrar negocios y avanzar en proyectos sin comprometer tu bienestar.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/father-spending-time-with-child-at-home.jpg"
                alt="Dedicas más tiempo a lo que amas"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 text-gray-900">Dedicas más tiempo a lo que amas</h3>
              <p className="text-sm text-gray-600">
                La firma digital te da la libertad de invertir tu tiempo en lo que más te gusta.
              </p>
            </div>
          </div>
        </div>

        {/* Middle row - 2 larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-56">
              <Image src="/businessman-working-on-laptop-while-traveling.jpg" alt="Viajas mucho?" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Viajas mucho?</h3>
              <p className="text-sm text-gray-600">
                Evitas retrasos innecesarios al cerrar acuerdos y proyectos de forma rápida y segura mientras te
                desplazas. Incluso en diferentes zonas horarias.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-56">
              <Image src="/stacked-coins-with-clock-representing-time-and-mon.jpg" alt="Mejorar tu economía" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mejorar tu economía</h3>
              <p className="text-sm text-gray-600">
                Eliminación de gastos de envío. Reducción de material impreso. Menos costos de almacenamiento. Ahorro en
                viajes. Reducción de errores humanos y más...
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row - 4 icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Icon Card 1 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <Coins className="w-12 h-12 text-[#F5A623]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-600">
              Representa un ahorro importante en costos de movilidad, recursos y papel
            </p>
          </div>

          {/* Icon Card 2 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <FileCheck className="w-12 h-12 text-[#F5A623]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-600">Firma electrónica cualificada con total validez jurídica</p>
          </div>

          {/* Icon Card 3 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-[#F5A623]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-600">Interfaz simple, fácil e intuitiva</p>
          </div>

          {/* Icon Card 4 */}
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="flex justify-center mb-4">
              <BadgeCheck className="w-12 h-12 text-[#F5A623]" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-gray-600">
              Con tu firma digital, tienes garantizada tu autenticidad e integridad
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
