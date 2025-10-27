'use client';
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
        <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <Image
            src="/placa_circuito.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-60 pb-32 text-white">
            {/* Eliminamos text-center y agregamos alineación izquierda */}
            <div className="max-w-3xl"> {/* Contenedor para limitar el ancho del texto */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-left">
                Firmar documentos
                <br />
                ahora es mucho más fácil
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-10 text-balance text-left max-w-2xl">
                Firmá digitalmente cualquier documento. Contratos, recibos de dinero, pólizas, órdenes de compra, remisiones,
                presupuestos, actas, convocatorias, ¡Lo que desees!
            </p>
            <div className="text-left">
                <Button
                size="lg"
                className="bg-[#F5A623] hover:bg-[#E09612] text-white font-semibold px-8 py-6 text-base md:text-lg rounded-full shadow-lg"
                onClick={() => setIsModalOpen(true)}
                >
                ¡Quiero saber más!
                </Button>
            </div>
            </div>
        </div>
        </section>
        <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}