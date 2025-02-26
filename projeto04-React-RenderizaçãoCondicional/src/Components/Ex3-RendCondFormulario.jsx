import { useState } from "react";

function Formulario() {
    // Estado para armazenar o nome digitado
  const [nome, setNome] = useState("");
  return (
    <div>
        {/* Input para digitar o nome */}
      <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      {/* Condição para exibir mensagem de erro se o nome for muito curto */}
      {nome.length > 0 && nome.length < 3 && (
        // Mensagem de erro
        <p style={{ color: "red" }}> ⚠️ Nome muito curto! </p>
      )}
    </div>
  );
}

export default Formulario;
