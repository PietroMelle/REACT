import { useState } from "react";
import "./ContadorCSS.css"

function Contador() {
    // Criamos um estado "contador" e uma função "setContador" para atualizar o Estado
  const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir() {
        setContador(contador - 1);
    }

  return (
    <section className="contador-container">
      <h2> Contador: {contador} </h2>
      <button onClick={aumentar}> Aumentar </button>
      <button onClick={diminuir}> Diminuir </button>
    </section>
  );
}

export default Contador;