import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { FolderSimpleMinusIcon, WarningIcon, XIcon } from "@phosphor-icons/react"
import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../model/Categoria"
import { buscar, deletar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarCategoria() {
  const navigate = useNavigate()

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info")
      navigate("/")
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarCategoria() {
    setIsLoading(true)

    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      })

      ToastAlerta("Categoria apagada com sucesso!", "sucesso")
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
      } else {
        ToastAlerta("Erro ao deletar a categoria.", "erro")
      }
    }

    setIsLoading(false)
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <main className="min-h-screen bg-[#070711] px-4 py-10">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 text-center">
          <div className="mb-3 flex justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/50 bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.35)]">
              <WarningIcon size={30} weight="bold" />
            </span>
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Área restrita
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
            Deletar categoria
          </h1>
        </div>

        <section className="overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-950/90 shadow-[0_0_18px_rgba(34,211,238,0.2)]">
          <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />

          <header className="flex items-center gap-3 border-b border-cyan-400/20 bg-slate-900/80 px-5 py-4">
            <FolderSimpleMinusIcon
              size={22}
              weight="bold"
              className="text-fuchsia-400"
            />

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Confirmação de exclusão
            </span>
          </header>

          <div className="px-6 py-6">
            <p className="mb-5 text-center text-sm leading-relaxed text-slate-300">
              Você tem certeza de que deseja apagar esta categoria? Esta ação
              não poderá ser desfeita.
            </p>

            <div className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/5 px-5 py-5 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">
                Categoria selecionada
              </p>

              <p className="break-words text-xl font-bold uppercase tracking-wide text-white">
                {categoria.tipo}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-cyan-400/20">
            <button
              type="button"
              onClick={retornar}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-slate-800 py-3 font-bold uppercase tracking-wide text-slate-200 transition hover:bg-slate-700 disabled:opacity-60"
            >
              <XIcon size={19} weight="bold" />
              Não
            </button>

            <button
              type="button"
              onClick={deletarCategoria}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-fuchsia-600 to-pink-700 py-3 font-bold uppercase tracking-wide text-white transition hover:from-fuchsia-500 hover:to-pink-600 hover:shadow-[0_0_18px_rgba(217,70,239,0.65)] disabled:opacity-60"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={22} />
              ) : (
                <>
                  <FolderSimpleMinusIcon size={19} weight="bold" />
                  Sim, deletar
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default DeletarCategoria