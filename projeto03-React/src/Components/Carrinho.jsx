import { useState } from "react";
import "./CarrinhoCSS.css";

function Carrinho() {
  const [itens, setItens] = useState(0);
  const [corNumero, setCorNumero] = useState(false);

  const adicionarItem = () => {
    setItens((itens) => itens + 1);
    setCorNumero(true);
  };

  const removerItem = () => {
    if (itens > 0) {
      setItens((itens) => itens - 1);
      setCorNumero(false);
    }
  };

  return (
    <section className="container-carrinho">
      <p> Itens no carrinho: <br /> <span className={corNumero ? "adicionar" : "remover"}>{itens}</span> </p>
      <section className="botoes">
      <button onClick={adicionarItem} >🛒✅ </button>
      <button onClick={removerItem} >🛒❌ </button>
      </section>
    </section>
  );
}

export default Carrinho;
