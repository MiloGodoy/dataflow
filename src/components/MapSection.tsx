"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Location {
  name: string
  address: string
  mapUrl: string
  googleMapsLink: string
}

interface MapsSectionProps {
  locations?: Location[]
}

const defaultLocations = [
  {
    name: "CODE100 Villamorra",
    address: "Brizuela N.º 750, entre Mariscal Antonio José Sucre y Eusebio Lillo Robles.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4102106639293!2d-57.57469763843122!3d-25.290418399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8a234b175f7%3A0xb394fc7ba53ffff!2sBrizuela%2C%20Asunci%C3%B3n%20001408!5e0!3m2!1ses-419!2spy!4v1744295301832!5m2!1ses-419!2spy",
    googleMapsLink: "https://maps.app.goo.gl/9w7JV4n3N3cKRAFy8",
  },
  {
    name: "CODE100 Sucursal Centro",
    address: "Benjamin Constant 973 – Edificio Arasa 2 Planta Baja, Oficina 12 - Asunción",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7215.610853471347!2d-57.639753000000006!3d-25.27713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da749f36cadd1%3A0x2bbde69015b7962b!2sCODE100%20-%20Sucursal%20Centro!5e0!3m2!1ses!2sus!4v1744295554225!5m2!1ses!2sus",
    googleMapsLink: "https://maps.app.goo.gl/Ngm18H9JhwrhmasA8",
  },
  {
    name: "Sucursal CDE - Edificio San Miguel",
    address: "Av. Adrian Jara y Pampliega, Edificio San Miguel 1er piso oficina N° 2",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3600.8325361259294!2d-54.614227!3d-25.510631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68555c4a0d6fb%3A0xd655f9e54353a5a9!2sEdificio%20San%20Miguel!5e0!3m2!1ses!2sus!4v1744295595753!5m2!1ses!2sus",
    googleMapsLink: "https://maps.app.goo.gl/fmREiaP8axMMNDaz5",
  },
]

export default function MapsSection({ locations = defaultLocations }: MapsSectionProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Nuestras Ubicaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card key={index} className="p-4">
              <h3 className="font-medium mb-2">{location.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{location.address}</p>
              <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-3">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${location.name}`}
                  aria-label={`Ubicación de ${location.name}`}
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => window.open(location.googleMapsLink, "_blank")}
              >
                Ver en Google Maps
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
