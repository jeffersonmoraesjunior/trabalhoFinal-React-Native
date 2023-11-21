const API_BASE_URL = 'https://655b8ecaab37729791a94fab.mockapi.io/user';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export const registerUser = async (nome: string, email: string, senha: string): Promise<Usuario | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome,
        email,
        senha,
      }),
    });

    if (response.ok) {
      const novoUsuario = await response.json();
      return novoUsuario;
    } else {
      console.error('Falha no cadastro:', response.statusText);
      const errorData = await response.json();
      console.error('Detalhes do erro:', errorData);
      return null;
   }
 } catch (erro) {
   console.error('Erro durante o cadastro:', erro);
   return null;
 }
};

export const loginUser = async (email: string, senha: string): Promise<Usuario | null> => {
 try {
   const response = await fetch(`${API_BASE_URL}/login`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email,
       senha,
     }),
   });

   if (response.ok) {
     const usuario = await response.json();
     return usuario;
   } else {
     console.error('Falha no login:', response.statusText);
     const errorData = await response.json(); 
    console.error('Detalhes do erro:', errorData);
     return null;
   }
 } catch (erro) {
   console.error('Erro durante o login:', erro);
   return null;
 }
};

export const getUserDetails = async (userId: number): Promise<Usuario | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const userDetails = await response.json();
      return userDetails;
    } else {
      console.error('Erro ao obter detalhes do usuário:', response.statusText);
      return null;
    }
  } catch (erro) {
    console.error('Erro durante a obtenção de detalhes do usuário:', erro);
    return null;
  }
};
