import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { SyncLoader } from "react-spinners"
import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../model/Categoria"
import { buscar } from "../../../service/Service"
import CardCategorias from "../cardcategorias/CardCategorias"

function ListarCategorias() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categorias, setCategorias] = useState<Categoria[]>([])

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!")
      navigate("/")
      return
    }

    buscarCategorias()
  }, [token, navigate])

  async function buscarCategorias() {
    try {
      setIsLoading(true)

      await buscar("/categorias", setCategorias, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
        navigate("/")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#070711] px-4 py-8">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
            Biblioteca digital
          </p>

          <h1 className="text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
            Categorias
          </h1>

          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_14px_rgba(34,211,238,0.7)]" />
        </header>

        {isLoading && (
          <div className="flex justify-center py-12">
            <SyncLoader color="#22d3ee" size={20} />
          </div>
        )}

        {!isLoading && categorias.length === 0 && (
          <div className="rounded-2xl border border-cyan-400/30 bg-slate-950/80 px-6 py-12 text-center shadow-[0_0_18px_rgba(34,211,238,0.15)]">
            <p className="text-2xl font-semibold text-cyan-300">
              Nenhuma categoria foi encontrada.
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Cadastre uma nova categoria para começar a organizar seus jogos.
            </p>
          </div>
        )}

        {!isLoading && categorias.length > 0 && (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </section>
        )}
      </div>
    </main>
  )
}

export default ListarCategorias