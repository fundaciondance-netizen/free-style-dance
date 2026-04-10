import { MapPin, Phone, Music } from "lucide-react"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Footer() {
  return (
    <footer className="bg-[#1f1d1d] text-white pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-16 md:grid-cols-2 items-center">

        {/* IZQUIERDA */}
        <div className="space-y-8">

          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold leading-tight">
              Free Style Dance
            </h3>

            <p className="text-white/70 max-w-md leading-relaxed">
              Más que una academia, un espacio donde descubres tu confianza, te expresas sin miedo y haces parte de una comunidad real.
            </p>
          </div>

          {/* UBICACIÓN */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#ec3236] mt-1" />
            <div>
              <p className="text-sm text-white/50">Ubicación</p>
              <p className="text-white">Cali, Carrera 85A # 15-133 barrio Ingenio 2</p>
            </div>
          </div>

          {/* REDES */}
          <div className="flex gap-4 pt-4">

            <a
              href="https://wa.me/573175644737?text=Hola!%20Quiero%20información%20sobre%20clases"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ec3236] transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/freestyledance"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ec3236] transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              <span className="text-sm">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@freestyledance09"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#ec3236] transition-all duration-300"
            >
              <Music className="w-4 h-4" />
              <span className="text-sm">TikTok</span>
            </a>

          </div>
        </div>

          {/* DERECHA (MAPA MÁS PRO) */}
        <div className="relative w-full min-w-0 overflow-hidden">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 bg-[#ec3236]/10 blur-2xl scale-110 opacity-30" />

          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 h-[260px] sm:h-[300px] md:h-[360px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.232265611901!2d-76.5635767!3d3.4183814!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a41b9d334885%3A0x72e020a89c86bdc4!2sFundaci%C3%B3n%20Nuevo%20Estilo%20Dance!5e0!3m2!1ses!2sco!4v1701826500000!5m2!1ses!2sco"
              className="block w-full h-full border-0 grayscale md:hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>

      </div>

      {/* LINEA + COPY */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Free Style Dance — Todos los derechos reservados
      </div>

    </footer>
  )
}