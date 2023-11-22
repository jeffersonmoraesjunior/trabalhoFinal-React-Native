import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import firebase from 'firebase/compat/app';

// Define a interface para os detalhes do usuário
interface UserDetail {
   id: string;
   nome: string;
   email: string;
}

// Define a interface para o contexto de autenticação
interface ContextoAutenticacao {
   isLogged: boolean;
   setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
   userLogged: UserDetail | null;
   setUserLogged: React.Dispatch<React.SetStateAction<UserDetail | null>>;
   login: (email: string, senha: string) => Promise<void>;
}

// Cria o contexto de autenticação
const AuthContext = createContext<ContextoAutenticacao | undefined>(undefined);

// Define as propriedades para o componente de autenticação
interface PropsAutenticacao {
   children: ReactNode;
}

// Cria o provedor de autenticação
export function AuthProvider({ children }: PropsAutenticacao) {
   const [isLogged, setIsLogged] = useState(false);
   const [userLogged, setUserLogged] = useState<UserDetail | null>(null);

   // Função para realizar o login do usuário
   const login = async (email: string, senha: string) => {
      try {
         const usuario = await firebase.auth().signInWithEmailAndPassword(email, senha);

         if (usuario) {
            const userDetails: UserDetail = {
               id: usuario.user.uid,
               nome: usuario.user.displayName,
               email: usuario.user.email
            };
            setUserLogged(userDetails);
            setIsLogged(true);
         }
      } catch (erro) {
         console.error('Erro durante a autenticação:', erro);
         throw erro;
      }
   };

   // Cria o valor do contexto
   const contextoValor = useMemo(() => {
      return { isLogged, setIsLogged, userLogged, setUserLogged, login };
   }, [isLogged, setIsLogged, userLogged, setUserLogged, login]);

   // Retorna o provedor de contexto
   return <AuthContext.Provider value={contextoValor}>{children}</AuthContext.Provider>;
}

// Hook para usar o contexto de autenticação
export function useAuth() {
   const contexto = useContext(AuthContext);
   if (!contexto) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider');
   }
   return contexto;
}
