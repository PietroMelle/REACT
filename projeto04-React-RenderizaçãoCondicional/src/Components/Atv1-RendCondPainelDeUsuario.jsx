import { useState } from "react";

function PainelUsuario() {
  // Estado que controla se o usuário está logado ou não
  const [isLogado, setIsLogado] = useState(false);

  return (
    <div>
      {isLogado ? (
        // Se o usuário está logado, exibe uma mensagem de boas-vindas e um botão para sair
        <>
          <h2>Bem-vindo, usuário!</h2>
          <button onClick={() => setIsLogado(false)}> Sair</button>
        </>
      ) : (
        // Se o usuário não está logado, exibe um botão para fazer login
        <>
          <button onClick={() => setIsLogado(true)}>Fazer Login</button>
        </>
      )}
    </div>
  );
}

export default PainelUsuario;