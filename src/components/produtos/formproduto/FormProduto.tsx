import {
  useContext,
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import { NumericFormat } from "react-number-format"

import { AuthContext } from "../../../contexts/AuthContext"
import type Categoria from "../../../model/Categoria"
import type Produto from "../../../model/Produto"
import { buscar, cadastrar, atualizar } from "../../../service/Service"
import { ToastAlerta } from "../../../utils/ToastAlerta"


function FormProduto() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: 0,
    foto: "",
    categoria: null,
  })

  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", 'info')
      navigate("/")
    }
  }, [token, navigate])

  useEffect(() => {
    buscarCategorias()
  }, [])

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId(id)
    }
  }, [id])

  async function buscarCategorias() {
    try {
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
    }
  }

  async function buscarProdutoPorId(idProduto: string) {
    try {
      await buscar(`/produtos/${idProduto}`, setProduto, {
        headers: {
          Authorization: token,
        },
      })
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
        navigate("/")
      }
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    })
  }

  function atualizarPreco(value: string | undefined) {
    setProduto({
      ...produto,
      preco: Number(value || 0),
    })
  }

  function retornar() {
    navigate("/produtos")
  }

  async function salvarProduto(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setIsLoading(true)

    try {
      if (id !== undefined) {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlerta("Produto atualizado com sucesso!", 'sucesso')
      } else {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        })

        ToastAlerta("Produto cadastrado com sucesso!", 'sucesso')
      }

      navigate("/produtos")
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout()
        navigate("/")
      } else {
        ToastAlerta("Erro ao salvar o produto.", 'erro')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-4 px-4 py-12">
      <h1 className="text-3xl md:text-4xl text-center mb-6">
        {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
      </h1>

      <form
        className="w-full max-w-lg flex flex-col gap-4"
        onSubmit={salvarProduto}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-medium">
            Nome do Produto
          </label>

          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Insira o nome do produto"
            required
            value={produto.nome}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2 bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className="font-medium">
            Preço
          </label>

          <NumericFormat
            id="preco"
            name="preco"
            value={produto.preco}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale
            allowNegative={false}
            prefix="R$ "
            placeholder="R$ 0,00"
            required
            onValueChange={(values) => atualizarPreco(values.value)}
            className="border-2 border-slate-700 rounded p-2 bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className="font-medium">
            Foto do Produto
          </label>

          <input
            type="url"
            id="foto"
            name="foto"
            placeholder="https://..."
            required
            value={produto.foto}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2 bg-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="font-medium">
            Categoria
          </label>

          <select
            id="categoria"
            name="categoria"
            required
            value={produto.categoria?.id ?? ""}
            onChange={(evento) => {
              const categoriaSelecionada = categorias.find(
                (categoria) => categoria.id === Number(evento.target.value)
              )

              setProduto({
                ...produto,
                categoria: categoriaSelecionada ?? null,
              })
            }}
            className="border-2 border-slate-700 rounded p-2 bg-white"
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>

            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.tipo}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={retornar}
            disabled={isLoading}
            className="w-full py-2 rounded text-white bg-red-400 hover:bg-red-700 disabled:opacity-60"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 rounded text-white bg-teal-600 hover:bg-teal-800 flex justify-center disabled:opacity-60"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormProduto