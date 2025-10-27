
export async function sendContactEmail(data: {
  nombre: string
  apellido: string
  email: string
  telefono: string
}) {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    console.log("[v0] EmailJS Config Check:", {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasPublicKey: !!publicKey,
    })

    if (!serviceId || !templateId || !publicKey) {
      console.error("[v0] Missing EmailJS configuration")
      return {
        success: false,
        error: "Configuración de email incompleta. Por favor contacta al administrador.",
      }
    }

    const emailjs = (await import("@emailjs/browser")).default

    console.log("[v0] Sending email with data:", {
      nombre: data.nombre,
      apellido: data.apellido,
      email: data.email,
    })

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: `${data.nombre} ${data.apellido}`,
          from_email: data.email,
          phone: data.telefono,
          message: `Nuevo contacto desde DataFlow:\n\nNombre: ${data.nombre} ${data.apellido}\nEmail: ${data.email}\nTeléfono: ${data.telefono}`,
        },
      }),
    })
    
    if (response.ok) {
      console.log("[v0] Email sent successfully")
      return { success: true }
    } else {
      const errorText = await response.text()
      console.error("[v0] EmailJS error response:", errorText)
      return { success: false, error: "Error al enviar el mensaje" }
    }
  } catch (error) {
    console.error("[v0] Exception while sending email:", error)
    return { success: false, error: "Error al enviar el mensaje" }
  }    
}
