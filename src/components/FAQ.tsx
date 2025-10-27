"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Qué documentos puedo firmar digitalmente con DataFlow?",
    answer:
      "Cualquier documento digital: todo tipo de contratos, recibos de dinero, pólizas, formularios, órdenes de compra, remisiones, presupuestos, actas, convocatorias, gestiones aduaneras para importadores, exportadores, despachantes y muchos otros tipos de documentos más.",
  },
  {
    question: "¿Si no tengo un certificado de Firma Electrónica Cualificada, puedo firmar igual?",
    answer:
      "Sí, puedes utilizar nuestra plataforma para firmar documentos de manera electrónica. Sin embargo, para ciertos documentos legales específicos, es posible que necesites un certificado de Firma Electrónica Cualificada.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-600" />
                )}
              </button>

              {openIndex === index && <div className="px-4 pb-4 text-gray-700 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
