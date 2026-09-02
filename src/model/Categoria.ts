// Modelo que representa uma Categoria, à qual vários Produtos podem estar associados

import type Produto from "./Produto";

export default interface Categoria {
    id: number;
    tipo: string;
    produto?: Produto[] | null;
}