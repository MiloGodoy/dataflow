"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    acceptTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const emailjs = (await import("@emailjs/browser")).default

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: `${formData.nombre} ${formData.apellido}`,
          from_email: formData.email,
          phone: formData.telefono,
          message: `Nuevo contacto desde DataFlow:\n\nNombre: ${formData.nombre} ${formData.apellido}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      if (result.text === "OK") {
        setSubmitStatus("success")
        setTimeout(() => {
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            acceptTerms: false,
          })
          setSubmitStatus("idle")
          onOpenChange(false)
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0">
        <DialogHeader className="p-6 pb-4 relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 rounded-full bg-[#F5A623] hover:bg-[#E09612] text-white h-8 w-8"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <DialogTitle className="text-2xl font-bold text-center">¡Nos Contactamos contigo!</DialogTitle>
          <p className="text-center text-muted-foreground mt-2">¿Te gustaría adquirir tu firma digital?</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">
              Nombre <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nombre"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellido">
              Apellido <span className="text-red-500">*</span>
            </Label>
            <Input
              id="apellido"
              required
              value={formData.apellido}
              onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              E-mail <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">
              Teléfono / Whatsapp <span className="text-red-500">*</span>
            </Label>
            <Input
              id="telefono"
              type="tel"
              required
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
              disabled={isSubmitting}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Acepto los Términos de Uso <span className="text-red-500">*</span>
            </label>
          </div>

          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
              ¡Mensaje enviado con éxito! Nos contactaremos pronto.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
              Error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[#F5A623] hover:bg-[#E09612] text-white font-semibold py-6 text-base"
            disabled={!formData.acceptTerms || isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-muted-foreground hover:underline inline-flex items-center gap-1"
            >
              Reportar un abuso
              <span className="text-xs">⚠</span>
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
