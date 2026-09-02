import { useState, useContext, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../model/Categoria";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {

	const navigate = useNavigate();

	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { usuario, handleLogout } = useContext(AuthContext);
	const token = usuario.token;
	const { id } = useParams<{ id: string }>();

	async function buscarPorId(id: string) {
		try {
			await buscar(`/categorias/${id}`, setCategoria, {
				headers: { Authorization: token },
			});
		} catch (error: any) {
			if (error.toString().includes('401')) {
				handleLogout();
			}
		}
	}

	useEffect(() => {
		if (token === '') {
			ToastAlerta('Você precisa estar logado!', 'info');
			navigate('/');
		}
	}, [token]);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		});
	}

	function retornar() {
		navigate('/categorias');
	}

	async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria, {
					headers: { Authorization: token },
				});
				ToastAlerta('Categoria atualizada com sucesso!', 'sucesso');
			} catch (error: any) {
				if (error.toString().includes('401')) {
					handleLogout();
				} else {
					ToastAlerta('Erro ao atualizar a categoria.', 'erro');
				}
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria, {
					headers: { Authorization: token },
				});
				ToastAlerta('Categoria cadastrada com sucesso!', 'sucesso');
			} catch (error: any) {
				if (error.toString().includes('401')) {
					handleLogout();
				} else {
					ToastAlerta('Erro ao cadastrar a categoria.', 'erro');
				}
			}
		}

		setIsLoading(false);
		retornar();
	}

	return (
		<div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
			<h1 className="my-8 text-3xl text-center md:text-4xl">
				{id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
			</h1>

			<form
				className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2"
				onSubmit={gerarNovaCategoria}
			>
				<div className="flex flex-col gap-2 ">
					<label htmlFor="tipo">Categoria</label>
					<input
						type="text"
						placeholder="Categoria"
						id='tipo'
						name='tipo'
						className="p-2 text-base bg-white border-2 rounded border-slate-700 utral-800 md:text-lg"
						required
						value={categoria.tipo ?? ''}
						onChange={atualizarEstado}
					/>
				</div>
				<button
					className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-slate-400 hover:bg-slate-800 md:w-1/2 md:text-lg disabled:opacity-60"
					type="submit"
					disabled={isLoading}
				>
					{isLoading ?
						<ClipLoader color="#ffffff" size={24} /> :
						<span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
					}
				</button>
			</form>
		</div>
	);
}

export default FormCategoria;
