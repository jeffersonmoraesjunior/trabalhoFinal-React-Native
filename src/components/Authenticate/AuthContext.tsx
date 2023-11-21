import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { loginUser, getUserDetails } from '../../services/Api/api';

interface UserDetail {
   id: number;
   nome: string;
   email: string;
}

interface ContextoAutenticacao {
   isLogged: boolean;
   setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
   userLogged: UserDetail | null;
   setUserLogged: React.Dispatch<React.SetStateAction<UserDetail | null>>;
}

const AuthContext = createContext<ContextoAutenticacao | undefined>(undefined);

interface PropsAutenticacao {
   children: ReactNode;
}

export function AuthProvider({ children }: PropsAutenticacao) {
   const [isLogged, setIsLogged] = useState(false);
   const [userLogged, setUserLogged] = useState<UserDetail | null>(null);

   const login = async (email: string, senha: string) => {
      try {
         const usuario = await loginUser(email, senha);

         if (usuario) {
            const userDetails = await getUserDetails(usuario.id);
            setUserLogged(userDetails);
            setIsLogged(true);
         }
      } catch (erro) {
         console.error('Erro durante a autenticação:', erro);
         throw erro;
      }
   };

   const contextoValor = useMemo(() => {
      return { isLogged, setIsLogged, userLogged, setUserLogged, login };
   }, [isLogged, setIsLogged, userLogged, setUserLogged, login]);

   return <AuthContext.Provider value={contextoValor}>{children}</AuthContext.Provider>;
}

export function useAuth() {
   const contexto = useContext(AuthContext);
   if (!contexto) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider');
   }
   return contexto;
}
