import "./Styles/Style.css";

import { useState } from "react";

function TermosForm() {
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // Serve para prevenir o carregamento de todas as informações /
    if (!aceitouTermos) {
      setErro("Você precisa aceitar os termos!");
      return;
    }
    alert(" Formulário enviado com sucesso!");
  }

  return (
    <form onSubmit={handleSubmit} className="container-input">
      <label>
        Aceito os termos e condições
        <input
          type="checkbox"
          checked={aceitouTermos}
          onChange={(e) => setAceitouTermos(e.target.checked)}
        />
      </label>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default TermosForm;
