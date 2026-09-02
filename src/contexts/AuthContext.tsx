import { createContext, useState, type ReactNode } from "react"
import type UsuarioLogin from "../model/UsuarioLogin"
import axios from "axios"
import { login } from "../service/Service"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogin(usuario: UsuarioLogin): Promise<void>
    handleLogout(): void
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        dataNascimento: '',
        token: '',
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleLogin(usuarioLogin: UsuarioLogin): Promise<void> {
        setIsLoading(true)

        try {
            await login('/usuarios/logar', usuarioLogin, setUsuario)

            // Sem alert aqui.
            // O Login.tsx detecta o token e redireciona para /home.
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.log('Resposta da API:', error.response.status)
            }

            // Envia o erro para o Login.tsx tratar com modal personalizado.
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            dataNascimento: '',
            token: '',
        })
    }

    return (
        <AuthContext.Provider
            value={{ usuario, handleLogin, handleLogout, isLoading }}
        >
            {children}
        </AuthContext.Provider>
    )
}