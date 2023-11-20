import { createContext, useContext, useMemo, useState, ReactNode } from "react";

interface ContextoAutenticacao {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  userLogged: any; 
  setUserLogged: React.Dispatch<React.SetStateAction<any>>; 
}

const AuthContext = createContext<ContextoAutenticacao | undefined>(undefined);

interface PropsAutenticacao {
  children: ReactNode;
}

export function AuthProvider({ children }: PropsAutenticacao) {
  const [isLogged, setIsLogged] = useState(false);
  const [userLogged, setUserLogged] = useState<any | null>(null); 

  const contextoValor = useMemo(() => {
    return { isLogged, setIsLogged, userLogged, setUserLogged };
  }, [isLogged, setIsLogged, userLogged, setUserLogged]);

  return (
    <AuthContext.Provider value={contextoValor}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return contexto;
}