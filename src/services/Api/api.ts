const API_BASE_URL = 'https://655b8ecaab37729791a94fab.mockapi.io/user';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export const registerUser = async (nome: string, email: string, senha: string): Promise<Usuario | null> => {
  try {
    const resposta = await fetch(`${API_BASE_URL}`, {
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

    if (resposta.ok) {
      const novoUsuario = await resposta.json();
      return novoUsuario;
    } else {
      console.error('Falha no cadastro:', resposta.statusText);
      return null;
   }
 } catch (erro) {
   console.error('Erro durante o cadastro:', erro);
   return null;
 }
};

export const loginUser = async (email: string, senha: string): Promise<Usuario | null> => {
 try {
   const resposta = await fetch(`${API_BASE_URL}/login`, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email,
       senha,
     }),
   });

   if (resposta.ok) {
     const usuario = await resposta.json();
     return usuario;
   } else {
     console.error('Falha no login:', resposta.statusText);
     return null;
   }
 } catch (erro) {
   console.error('Erro durante o login:', erro);
   return null;
 }
};
