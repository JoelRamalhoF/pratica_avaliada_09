# 🎮 Game Store - Loja de Games

Uma aplicacao web moderna e responsiva para uma loja de games, desenvolvida com **React**, **TypeScript** e **Vite**.

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646cff?style=for-the-badge&logo=vite)](https://vitejs.dev/)

## 📖 Sobre o Projeto

Este projeto e uma **loja virtual de games** que permite aos usuarios:

- 🛒 Navegar por produtos de games organizados por categorias
- 🔍 Buscar produtos especificos
- ➕ Adicionar itens ao carrinho de compras
- 👤 Realizar cadastro e login de usuarios
- 📝 Gerenciar perfil de usuario
- 📱 Interface responsiva para desktop e mobile

## 🚀 Funcionalidades

- **Catalogo de Produtos**: Visualizacao de jogos e acessorios com detalhes
- **Carrinho de Compras**: Adicionar, remover e gerenciar itens
- **Autenticacao**: Sistema de login e cadastro de usuarios
- **Context API**: Gerenciamento de estado global com `AuthContext`
- **Componentizacao**: Estrutura modular com componentes reutilizaveis
- **Rotas**: Navegacao entre paginas (Home, Login, Cadastro, Perfil)

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizaveis
│   ├── carrinho/        # Componentes do carrinho
│   ├── categorias/      # Componentes de categorias
│   ├── footer/          # Rodape
│   ├── navbar/          # Barra de navegacao
│   └── produtos/        # Componentes de produtos
├── contexts/            # Context API
│   └── AuthContext.tsx  # Contexto de autenticacao
├── model/               # Modelos de dados
│   ├── Categoria.ts     # Modelo de categoria
│   ├── Produto.ts       # Modelo de produto
│   ├── Usuario.ts       # Modelo de usuario
│   └── UsuarioLogin.ts  # Modelo de login
├── pages/               # Paginas da aplicacao
│   ├── cadastro/        # Pagina de cadastro
│   ├── home/            # Pagina inicial
│   ├── login/           # Pagina de login
│   └── perfil/          # Pagina de perfil
├── service/             # Servicos e chamadas API
│   └── Service.ts       # Configuracao de servicos
├── App.tsx              # Componente principal
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18.3.1
- **Linguagem**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Estilizacao**: CSS3
- **Linting**: ESLint 9.9.0
- **Formatacao**: Prettier
- **Gerenciamento de Estado**: Context API

## 📦 Instalacao

Siga os passos abaixo para rodar o projeto localmente:

### Pre-requisitos

- Node.js (versao 18 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositorio**
   ```bash
   git clone https://github.com/JoelRamalhoF/pratica_avaliada_09.git
   cd pratica_avaliada_09
   ```

2. **Instale as dependencias**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicacao**
   - Abra seu navegador e acesse `http://localhost:5173`

## 📝 Scripts Disponiveis

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build de producao na pasta `dist` |
| `npm run preview` | Visualiza o build de producao |
| `npm run lint` | Executa a analise de codigo com ESLint |

## 🎯 Modelos de Dados

O projeto utiliza TypeScript para tipagem forte com os seguintes modelos:

- **Produto**: id, nome, descricao, preco, imagem, categoria
- **Categoria**: id, nome, descricao
- **Usuario**: id, nome, email, senha
- **UsuarioLogin**: email, senha

## 🔧 Configuracao

O projeto esta configurado com:

- **Vite**: Build tool rapido e otimizado para React
- **TypeScript**: Tipagem estatica para maior seguranca
- **ESLint**: Analise e correcao de codigo
- **Prettier**: Formatacao automatica de codigo

## 📱 Responsividade

A aplicacao foi desenvolvida com foco em **mobile-first**, garantindo uma experiencia adequada em:

- 📱 Dispositivos moveis
- 💻 Tablets
- 🖥️ Desktops

## 👨‍💻 Autor

**Joel Ramalho Filho**

- GitHub: [@JoelRamalhoF](https://github.com/JoelRamalhoF)

## 📄 Licenca

Este projeto foi desenvolvido para fins academicos e de aprendizado.

## 🙏 Agradecimentos

Projeto desenvolvido como parte de uma pratica avaliada, demonstrando habilidades em:

- Desenvolvimento Frontend com React
- TypeScript e tipagem de dados
- Componentizacao e reutilizacao de codigo
- Gerenciamento de estado com Context API
- Estruturacao de projetos escalaveis

---

<div align="center">

**Feito com ❤️ para a comunidade de desenvolvedores**

</div>
