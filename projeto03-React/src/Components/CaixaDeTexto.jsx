import { useState } from "react";
import "./CaixaDeTextoCSS.css"

function caixaDeTexto() {
  const [texto, setCaixaDeTexto] = useState("");

  return (
    <section className="container-texto">
        <label>Digite um texto aqui</label>
      <input type="text" label="" value={texto} onChange={(evento) => setCaixaDeTexto(evento.target.value)} />

      <p>Texto digitado: <b>{texto}</b> </p>
    </section>
  );
}

export default caixaDeTexto;
