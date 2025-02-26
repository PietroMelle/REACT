import { useState } from "react";

function PainelUsuario() {
  const [isLogado, setIsLogado] = useState(false);
  return (
    <div>

      <h2>👤 {isLogado ? "Painel do Usuário" : "Visitante"}</h2>
      {isLogado ? ( <>
          <p>Bem-vindo ao sistema!</p>
          <button onClick={() => setIsLogado(false)}> Sair</button>
          </>) : (<>
          <p>Faça login para acessar suas informações.</p>
          <button onClick={() => setIsLogado(true)}>Fazer Login</button>
          </>)}
    </div>
  );
}
export default PainelUsuario;
