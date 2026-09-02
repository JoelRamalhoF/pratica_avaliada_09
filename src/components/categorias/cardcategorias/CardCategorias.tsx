import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Categoria from "../../../model/Categoria"

interface CardCategoriasProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <article
      className="
        group relative flex min-h-52 flex-col justify-between
        overflow-hidden rounded-2xl
        border border-cyan-400/40
        bg-slate-950/90
        shadow-[0_0_12px_rgba(0,243,255,0.16)]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-fuchsia-500
        hover:shadow-[0_0_18px_rgba(0,243,255,0.4),0_0_32px_rgba(217,70,239,0.25)]
      "
    >
      {/* Linha neon superior */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

      {/* Cabeçalho */}
      <header
        className="
          flex items-center justify-between
          bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900
          px-5 py-4
        "
      >
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
          Categoria
        </span>

        <span className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#f0f]" />
      </header>

      {/* Nome da categoria */}
      <div className="flex flex-1 items-center justify-center px-5 py-8">
        <h2
          className="
            break-words text-center text-2xl font-bold
            uppercase tracking-wide text-white
            transition-colors duration-300
            group-hover:text-cyan-300
            group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.65)]
          "
        >
          {categoria.tipo}
        </h2>
      </div>

      {/* Ações */}
      <div className="grid grid-cols-2 border-t border-cyan-400/20">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="
            flex items-center justify-center gap-2
            bg-gradient-to-r from-cyan-600 to-blue-700
            py-3 text-sm font-bold uppercase tracking-wide text-white
            transition-all
            hover:from-cyan-400 hover:to-blue-500
            hover:text-slate-950
            hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]
          "
        >
          <PencilIcon size={17} weight="bold" />
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="
            flex items-center justify-center gap-2
            bg-gradient-to-r from-fuchsia-600 to-pink-700
            py-3 text-sm font-bold uppercase tracking-wide text-white
            transition-all
            hover:from-fuchsia-400 hover:to-pink-500
            hover:shadow-[0_0_15px_rgba(217,70,239,0.7)]
          "
        >
          <TrashIcon size={17} weight="bold" />
          Deletar
        </Link>
      </div>
    </article>
  )
}

export default CardCategorias