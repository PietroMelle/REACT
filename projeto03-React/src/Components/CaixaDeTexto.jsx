import { useState } from "react";
import "./CaixaDeTextoCSS.css"

function caixaDeTexto() {
  const [texto, setCaixaDeTexto] = useState("");

  return (
    <section className="container-texto">
      <input type="text" value={texto} onChange={(evento) => setCaixaDeTexto(evento.target.value)} />

      <p>Texto digitado: {texto}</p>
    </section>
  );
}

export default caixaDeTexto;
