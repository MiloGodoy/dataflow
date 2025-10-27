const branches = [
    {
      name: "CODE100 Villasanta",
      address: "Brasilia N-750 entre Mariscal Antonio José Sucre y Eusebio Lillo Robles",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7!2d-57.5!3d-25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiUyA1N8KwMzAnMDAuMCJX!5e0!3m2!1ses!2spy!4v1234567890",
    },
    {
      name: "CODE100 Sucursal Centro",
      address: "Benjamin Constant 973 - Edificio Arista 2 Planta Baja, Oficina 12 - Asunción",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5!2d-57.6!3d-25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzQ4LjAiUyA1N8KwMzYnMDAuMCJX!5e0!3m2!1ses!2spy!4v1234567891",
    },
    {
      name: "Edificio San Miguel",
      address: "Av. Asián Jara y Pamplona, Edificio San Miguel 1er piso oficina N° 2",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3!2d-57.58!3d-25.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzI0LjAiUyA1N8KwMzQnNDguMCJX!5e0!3m2!1ses!2spy!4v1234567892",
    },
  ]
  
  export function Branches() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            <span className="text-[var(--cta)]">Sucursales CODE100</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <iframe
                    src={branch.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${branch.name}`}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{branch.name}</h3>
                  <p className="text-gray-600 text-sm">{branch.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  