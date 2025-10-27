"use client"

import type React from "react"

import { useState } from "react"
import { sendContactEmail } from "@/app/actions/send-contact"

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      nombre: formData.get("nombre") as string,
      apellido: formData.get("apellido") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
    }

    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        setSubmitStatus("success")
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-2">¡Nos Contactamos contigo!</h2>
          <p className="text-center text-gray-600 text-sm mb-6">¿Te gustaría adquirir tu firma digital?</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre" className="block text-sm text-gray-600 mb-1">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div>
              <label htmlFor="apellido" className="block text-sm text-gray-600 mb-1">
                Apellido <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm text-gray-600 mb-1">
                Teléfono / Whatsapp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terminos" className="mt-1" required />
              <label htmlFor="terminos" className="text-sm text-gray-600">
                Acepto los Términos de Uso <span className="text-red-500">*</span>
              </label>
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md text-sm">
                ¡Mensaje enviado con éxito! Nos contactaremos contigo pronto.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
                Error al enviar el mensaje. Por favor, intenta nuevamente.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-600 bg- text-black font-semibold py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>

            <div className="text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1">
                Reportar un abuso
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
