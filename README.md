# 🎮 JRF Games

> Loja virtual de games com tema cyberpunk, desenvolvida como parte da Prática Avaliada 09 da Generation Brasil.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## 📖 Sobre o projeto

A **JRF Games** é uma aplicação frontend de uma loja virtual de games. O projeto consome uma API REST para autenticação e gerenciamento de categorias e produtos, além de oferecer uma página de perfil e um simulador de carrinho de compras.

A interface foi personalizada com uma identidade visual cyberpunk, usando tons escuros, ciano, azul e fúcsia, cards com efeitos neon e navbar com glassmorphism.

## ✨ Funcionalidades

- Cadastro e login de usuários
- Controle de acesso às páginas internas por token
- Listagem, cadastro, edição e exclusão de categorias
- Listagem, cadastro, edição e exclusão de produtos
- Associação de produtos a categorias
- Busca de jogos pela navbar
- Página de perfil com dados do usuário autenticado
- Carrinho de compras com Context API
- Adição, remoção e alteração de quantidade dos itens
- Cálculo automático da quantidade total e valor total do carrinho
- Finalização simulada de compra com limpeza do carrinho
- Feedback de ações com React Toastify e loaders
- Layout responsivo para desktop e dispositivos móveis

## 🧰 Tecnologias

- React
- TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM
- Axios
- React Toastify
- React Spinners
- Phosphor Icons
- React Number Format
- Context API

## 🔗 API consumida

O projeto utiliza a API Loja de Games disponibilizada pela Generation Brasil:

- [API Loja de Games](https://lojagames-moom.onrender.com)

Os recursos principais consumidos são:

- `/usuarios/cadastrar`
- `/usuarios/logar`
- `/categorias`
- `/produtos`

## 🗂️ Estrutura do projeto

```text
src/
├── components/
│   ├── carrinho/
│   │   ├── cardcart/
│   │   └── cart/
│   ├── categorias/
│   │   ├── cardcategorias/
│   │   ├── deletarcategorias/
│   │   ├── formcategoria/
│   │   └── listarcategorias/
│   ├── footer/
│   ├── navbar/
│   └── produtos/
│       ├── cardprodutos/
│       ├── deletarproduto/
│       ├── formproduto/
│       ├── listaprodutos/
│       └── modalproduto/
├── contexts/
│   ├── AuthContext.tsx
│   └── CartContext.tsx
├── model/
│   ├── Categoria.ts
│   ├── Produto.ts
│   ├── Usuario.ts
│   └── UsuarioLogin.ts
├── pages/
│   ├── cadastro/
│   ├── home/
│   ├── login/
│   └── perfil/
├── service/
│   └── Service.ts
├── utils/
│   └── ToastAlerta.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🧭 Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Login | Autenticação do usuário |
| `/cadastro` | Cadastro | Criação de uma nova conta |
| `/home` | Home | Página inicial e catálogo de produtos |
| `/produtos` | ListaProdutos | Listagem de produtos cadastrados |
| `/cadastrarproduto` | FormProduto | Cadastro de produto |
| `/editarproduto/:id` | FormProduto | Edição de produto |
| `/deletarproduto/:id` | DeletarProduto | Exclusão de produto |
| `/categorias` | ListarCategorias | Listagem de categorias |
| `/cadastrarcategoria` | FormCategoria | Cadastro de categoria |
| `/editarcategoria/:id` | FormCategoria | Edição de categoria |
| `/deletarcategoria/:id` | DeletarCategoria | Exclusão de categoria |
| `/perfil` | Perfil | Dados do usuário autenticado |
| `/carrinho` | Cart | Simulador de carrinho de compras |

## 🛒 Carrinho de compras

O carrinho é gerenciado pelo `CartContext` e funciona apenas no frontend, sem persistência na API.

- Adiciona um produto ao carrinho
- Aumenta ou reduz a quantidade de cada item
- Remove um item específico
- Calcula subtotal por item
- Calcula quantidade total de itens
- Calcula valor total da compra
- Limpa o carrinho ao finalizar a compra

## 🚀 Como executar localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JoelRamalhoF/pratica_avaliada_09.git
```

2. Acesse a pasta do projeto:

```bash
cd pratica_avaliada_09
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse no navegador:

```text
http://localhost:5173
```

## 📜 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa a análise estática com ESLint |

## 📱 Responsividade

A aplicação foi adaptada para diferentes tamanhos de tela, incluindo:

- Celulares
- Tablets
- Desktops

A navbar possui menu hambúrguer em telas menores, e as grades de produtos, categorias e carrinho se reorganizam conforme a largura disponível.

## 👨‍💻 Autor

**Joel Ramalho Filho**

- GitHub: [@JoelRamalhoF](https://github.com/JoelRamalhoF)

## 📚 Contexto acadêmico

Projeto desenvolvido para a **Prática Avaliada 09**, com foco em consumo de API REST, CRUD com relacionamento entre Produto e Categoria, perfil de usuário autenticado e simulador de carrinho de compras.

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e de aprendizado.

---

<div align="center">

Feito por Joel Ramalho Filho 🎮

</div>
