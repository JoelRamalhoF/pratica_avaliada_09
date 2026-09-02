import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos"
import ModalProduto from "../../components/produtos/modalproduto/ModalProduto"

function Home() {
  return (
    <>
      <section className="relative flex min-h-[50vh] justify-center overflow-hidden bg-[#070711] md:min-h-[70vh]">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="container relative z-10 grid grid-cols-1 text-white md:grid-cols-2">
          {/* Texto e botão */}
          <div className="flex flex-col items-center justify-center px-4 py-10 md:items-start md:px-8 md:py-1 md:text-left">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
              JRF Games
            </p>

            <h2 className="text-center text-3xl font-black uppercase tracking-wide md:text-left md:text-5xl">
              Seja{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                bem-vinde!
              </span>
            </h2>

            <p className="mt-2 text-center text-lg text-slate-300 md:text-left md:text-xl">
              Aqui você encontra os melhores Games!
            </p>

            <div className="flex w-full justify-center py-8 md:justify-start">
              <ModalProduto />
            </div>
          </div>

          {/* Imagem da Home */}
          <div className="flex w-full items-center justify-center pb-8 md:pb-0">
            <img
              src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1705970755605"
              alt="Pessoa jogando videogame"
              className="mx-auto h-52 w-2/3 object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] md:h-80 lg:h-96"
            />
          </div>
        </div>

        {/* Linha neon inferior */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
      </section>

      <ListaProdutos />
    </>
  )
}

export default Home