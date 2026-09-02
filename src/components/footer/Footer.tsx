import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  return (
    <footer className="relative mt-auto w-full border-t border-cyan-400/20 bg-slate-950/90 px-2 py-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

      <div className="container mx-auto flex flex-col items-center gap-3 text-white">
        <p className="text-center text-base font-bold uppercase tracking-wide md:text-xl">
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            JRF Games
          </span>{" "}
          | Joel Ramalho Filho | Copyright: 2026
        </p>

        <p className="text-center text-sm text-slate-400 md:text-base">
          Acesse nossas redes sociais
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/joel-cunha-ramalho-filho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-cyan-400/30 bg-slate-900/60 text-cyan-300
              transition-all hover:border-cyan-300 hover:text-white
              hover:shadow-[0_0_14px_rgba(34,211,238,0.7)]
            "
          >
            <LinkedinLogoIcon size={22} weight="bold" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-fuchsia-400/30 bg-slate-900/60 text-fuchsia-300
              transition-all hover:border-fuchsia-300 hover:text-white
              hover:shadow-[0_0_14px_rgba(217,70,239,0.7)]
            "
          >
            <InstagramLogoIcon size={22} weight="bold" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-blue-400/30 bg-slate-900/60 text-blue-300
              transition-all hover:border-blue-300 hover:text-white
              hover:shadow-[0_0_14px_rgba(96,165,250,0.7)]
            "
          >
            <FacebookLogoIcon size={22} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer