import { useContext, useState } from "react"
import { ListIcon, ShoppingCartIcon, SignOutIcon, UserIcon, XIcon, GameControllerIcon } from "@phosphor-icons/react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { CartContext } from "../../contexts/CartContext"
import SearchForm from "./SearchForm"

function Navbar() {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)

  const { handleLogout, usuario } = useContext(AuthContext)
  const { quantidadeItems } = useContext(CartContext)
  const token = usuario.token

  function sair() {
    handleLogout()
    navigate("/")
  }

  if (token === "") {
    return null
  }

  return (
    <>
      {/* Navbar fixa com glassmorphism */}
      <header
        className="
          fixed top-0 left-0 z-50 w-full
          border-b border-cyan-400/20
          bg-slate-950/60 backdrop-blur-xl
          shadow-[0_4px_30px_rgba(0,0,0,0.4)]
        "
      >
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-8">
          {/* Logo */}
          <Link
            to="/home"
            onClick={() => setMenuAberto(false)}
            className="flex items-center gap-2 shrink-0"
          >
            <span
              className="
                flex h-10 w-10 items-center justify-center rounded-xl
                bg-gradient-to-br from-cyan-400 to-fuchsia-500
                shadow-[0_0_16px_rgba(34,211,238,0.6)]
              "
            >
              <GameControllerIcon size={22} weight="bold" className="text-slate-950" />
            </span>

            <span className="text-lg font-black uppercase tracking-wider text-white md:text-xl">
              JRF{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                Games
              </span>
            </span>
          </Link>

          {/* Barra de busca */}
          <div className="relative hidden w-2/5 items-center justify-center text-black md:flex">
            <SearchForm />
          </div>

          {/* Menu desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/produtos"
              className="text-sm font-semibold uppercase tracking-wide text-slate-200 transition-colors hover:text-cyan-300"
            >
              Produtos
            </Link>
            <Link
              to="/categorias"
              className="text-sm font-semibold uppercase tracking-wide text-slate-200 transition-colors hover:text-cyan-300"
            >
              Categorias
            </Link>
            <Link
              to="/cadastrarcategoria"
              className="text-sm font-semibold uppercase tracking-wide text-slate-200 transition-colors hover:text-cyan-300"
            >
              Cadastrar Categoria
            </Link>

            <Link
              to="/perfil"
              aria-label="Minha conta"
              className="
                flex h-9 w-9 items-center justify-center rounded-full
                border border-cyan-400/30 bg-slate-900/60
                text-cyan-300 transition-all
                hover:border-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]
              "
            >
              {usuario.foto ? (
                <img
                  src={usuario.foto}
                  alt="Foto do usuário"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <UserIcon size={20} weight="bold" />
              )}
            </Link>

            <Link
              to="/carrinho"
              aria-label="Carrinho de compras"
              className="
                relative flex h-9 w-9 items-center justify-center rounded-full
                border border-cyan-400/30 bg-slate-900/60
                text-cyan-300 transition-all
                hover:border-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.7)]
              "
            >
              <ShoppingCartIcon size={20} weight="bold" />
              {quantidadeItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500 text-xs font-bold text-white shadow-[0_0_8px_rgba(217,70,239,0.8)]">
                  {quantidadeItems}
                </span>
              )}
            </Link>

            <button
              aria-label="Sair"
              onClick={sair}
              className="
                flex h-9 w-9 items-center justify-center rounded-full
                border border-fuchsia-500/30 bg-slate-900/60
                text-fuchsia-400 transition-all
                hover:border-fuchsia-300 hover:shadow-[0_0_12px_rgba(217,70,239,0.7)]
              "
            >
              <SignOutIcon size={20} weight="bold" />
            </button>
          </div>

          {/* Botão hambúrguer */}
          <button
            className="p-2 text-cyan-300 md:hidden"
            onClick={() => setMenuAberto((open) => !open)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
          >
            {menuAberto ? <XIcon size={26} /> : <ListIcon size={26} />}
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`${
            menuAberto ? "flex" : "hidden"
          } flex-col gap-4 border-t border-cyan-400/20 bg-slate-950/80 px-6 py-5 backdrop-blur-xl md:hidden`}
        >
          <SearchForm />

          <Link
            to="/produtos"
            className="text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-cyan-300"
            onClick={() => setMenuAberto(false)}
          >
            Produtos
          </Link>
          <Link
            to="/categorias"
            className="text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-cyan-300"
            onClick={() => setMenuAberto(false)}
          >
            Categorias
          </Link>
          <Link
            to="/cadastrarcategoria"
            className="text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-cyan-300"
            onClick={() => setMenuAberto(false)}
          >
            Cadastrar Categoria
          </Link>
          <Link
            to="/perfil"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-cyan-300"
            onClick={() => setMenuAberto(false)}
          >
            {usuario.foto ? (
              <img
                src={usuario.foto}
                alt="Foto do usuário"
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <UserIcon size={20} weight="bold" />
            )}
            Minha conta
          </Link>
          <Link
            to="/carrinho"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-200 hover:text-cyan-300"
            onClick={() => setMenuAberto(false)}
          >
            <span className="relative flex items-center">
              <ShoppingCartIcon size={20} weight="bold" />
              {quantidadeItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-500 text-xs font-bold text-white">
                  {quantidadeItems}
                </span>
              )}
            </span>
            Carrinho
          </Link>
          <button
            onClick={() => {
              sair()
              setMenuAberto(false)
            }}
            className="flex items-center gap-2 text-left text-sm font-semibold uppercase tracking-wide text-fuchsia-400 hover:text-fuchsia-300"
          >
            <SignOutIcon size={20} weight="bold" />
            Sair
          </button>
        </div>
      </header>

      {/* Espaçador para compensar a navbar fixa */}
      <div className="h-[72px] md:h-[76px]" />
    </>
  )
}

export default Navbar