import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SyncLoader } from "react-spinners"

import { AuthContext } from "../../../contexts/AuthContext"
import type Produto from "../../../model/Produto"
import { buscar } from "../../../service/Service"
import CardProduto from "../cardprodutos/CardProduto"

function ListaProdutos() {
  const navigate = useNavigate()

  const [produtos, setProdutos] = useState<Produto[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!")
      navigate("/")
      return
    }

    buscarProdutos()
  }, [token])

  async function buscarProdutos() {
    try {
      setIsLoading(true)

      await buscar("/produtos", setProdutos, {
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
 <div className="min-h-screen bg-[#070711] px-4 py-8">
  <div className="container mx-auto flex flex-col">
    {isLoading && (
      <div className="flex justify-center py-8">
        <SyncLoader color="#22d3ee" size={16} />
      </div>
    )}

    {!isLoading && produtos.length === 0 && (
      <p className="py-8 text-2xl text-center text-cyan-300">
        Nenhum produto encontrado.
      </p>
    )}

    {!isLoading && produtos.length > 0 && (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {produtos.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    )}
  </div>
</div>
  )
}

export default ListaProdutos