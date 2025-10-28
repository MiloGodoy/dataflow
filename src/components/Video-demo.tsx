export function VideoDemo() {
    return (
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Gradient background from yellow to green */}
        <div className="absolute inset-0 bg-[#17A2B8]" />
  
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¡Tenemos la solución perfecta para vos!</h2>
  
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Te mostramos en unos simples pasos como firmar tus documentos con Dataflow.
          </p>
  
          {/* YouTube video embed */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/uuzE5yOLJOY"
              title="Demo Dataflow"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    )
  }
  