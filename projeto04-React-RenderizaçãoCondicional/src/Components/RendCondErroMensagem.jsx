import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");
  return (
    <div>
      <h2>📋 Formulário de Cadastro</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)} />
      {nome.length > 0 && nome.length < 3 && (
        <p style={{ color: "red" }}> ⚠️ O nome deve ter pelo menos 3 caracteres </p>
      )}
    </div>
  );
}

export default Formulario;
