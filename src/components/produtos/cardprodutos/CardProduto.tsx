import {
  PencilIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useContext } from "react"

import type Produto from "../../../model/Produto"
import { CartContext } from "../../../contexts/CartContext"

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
  const { adicionarProduto } = useContext(CartContext)

  return (
    <article
      className="
        group relative flex flex-col justify-between overflow-hidden
        rounded-2xl border border-cyan-400/40
        bg-slate-950/90
        shadow-[0_0_12px_rgba(0,243,255,0.18)]
        transition-all duration-300
        hover:-translate-y-2
        hover:border-fuchsia-500
        hover:shadow-[0_0_18px_rgba(0,243,255,0.45),0_0_35px_rgba(217,70,239,0.25)]
      "
    >
      {/* Linha neon superior */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

      {/* Botões de ação */}
      <div className="flex justify-end gap-2 px-4 pt-4">
        <Link
          to={`/editarproduto/${produto.id}`}
          aria-label="Editar produto"
          className="
            flex h-9 w-9 items-center justify-center rounded-lg
            border border-cyan-400/30 bg-slate-900/80
            text-cyan-300 transition-all
            hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950
            hover:shadow-[0_0_12px_rgba(34,211,238,0.8)]
          "
        >
          <PencilIcon size={19} weight="bold" />
        </Link>

        <Link
          to={`/deletarproduto/${produto.id}`}
          aria-label="Deletar produto"
          className="
            flex h-9 w-9 items-center justify-center rounded-lg
            border border-fuchsia-500/30 bg-slate-900/80
            text-fuchsia-400 transition-all
            hover:border-fuchsia-300 hover:bg-fuchsia-500 hover:text-white
            hover:shadow-[0_0_12px_rgba(217,70,239,0.8)]
          "
        >
          <TrashIcon size={19} weight="bold" />
        </Link>
      </div>

      {/* Imagem */}
      <div className="px-4 pt-4">
        <div
          className="
            flex h-52 items-center justify-center rounded-xl
            border border-cyan-400/20
            bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950
            p-4
            group-hover:border-cyan-400/60
          "
        >
          <img
            src={produto.foto}
            alt={produto.nome}
            className="
              h-44 max-w-full object-contain
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Informações */}
      <div className="flex flex-col gap-2 px-5 py-5">
        <h2 className="line-clamp-2 min-h-14 text-center text-lg font-bold uppercase tracking-wide text-white">
          {produto.nome}
        </h2>

        <p className="text-center text-xs uppercase tracking-widest text-cyan-300">
          {produto.categoria?.tipo ?? "Sem categoria"}
        </p>

        <p className="mt-2 text-center text-2xl font-black text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.65)]">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </p>
      </div>

      {/* Botão comprar */}
      <button
        type="button"
        onClick={() => adicionarProduto(produto)}
        className="
          flex items-center justify-center gap-2
          border-t border-cyan-300/30
          bg-gradient-to-r from-cyan-500 to-indigo-600
          py-3 font-bold uppercase tracking-wide text-white
          transition-all duration-300
          hover:from-fuchsia-500 hover:to-purple-600
          hover:shadow-[0_0_18px_rgba(217,70,239,0.65)]
        "
      >
        <ShoppingCartIcon size={20} weight="bold" />
        Comprar
      </button>
    </article>
  )
}

export default CardProduto