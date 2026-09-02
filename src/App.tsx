import { useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

import Cart from "./components/carrinho/cart/Cart"
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto"
import FormProduto from "./components/produtos/formproduto/FormProduto"
import ListarProdutos from "./components/produtos/listaprodutos/ListaProdutos"
import { AuthContext } from "./contexts/AuthContext"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Perfil from "./pages/perfil/Perfil"

function App() {
  const { usuario } = useContext(AuthContext)
  const autenticado = usuario.token !== ""

  return (
    <BrowserRouter>
      {autenticado && <Navbar />}

      <div className="flex flex-col min-h-screen bg-slate-200">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="/categorias" element={<ListarCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route
            path="/deletarcategoria/:id"
            element={<DeletarCategoria />}
          />

          <Route path="/produtos" element={<ListarProdutos />} />
          <Route path="/cadastrarproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />

          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </div>

      {autenticado && <Footer />}
    </BrowserRouter>
  )
}

export default App