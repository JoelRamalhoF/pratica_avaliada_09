import type Categoria from "./Categoria";

// Modelo que representa um produto da livraria, espelhando o objeto retornado pela API
export default interface Produto {
	id: number;
	titulo: string;
	autor: string;
	preco: number;
	foto: string;
	categoria: Categoria | null;
}
