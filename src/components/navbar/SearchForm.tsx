import { useState, type FormEvent } from "react"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"

function SearchForm() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState("")

  function buscarProduto(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (busca.trim() === "") {
      navigate("/produtos")
      return
    }

    navigate(`/produtos?nome=${busca}`)
  }

  return (
    <form className="relative flex w-full items-center" onSubmit={buscarProduto}>
      <div className="relative flex w-full items-center">
        <input
          className="
            h-10 w-full rounded-lg border-2 border-cyan-400/20
            bg-slate-900/70 pl-4 pr-12 text-white
            placeholder:text-slate-500
            transition-all duration-200
            focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30
          "
          type="search"
          placeholder="Buscar jogos..."
          id="busca"
          name="busca"
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />

        <button
          type="submit"
          aria-label="Buscar"
          className="
            absolute right-1 flex h-8 w-8 items-center justify-center rounded-md
            bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-950
            shadow-sm transition-all duration-200
            hover:scale-105 hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]
            active:scale-95
          "
        >
          <MagnifyingGlassIcon size={18} weight="bold" />
        </button>
      </div>
    </form>
  )
}

export default SearchForm