import { useState } from "react";
import "./CarrinhoCSS.css";

function Carrinho() {
  const [itens, setItens] = useState(0);
  const [corNumero, setCorNumero] = useState("");

  const adicionarItem = () => {
    setItens((itens) => itens + 1);
    setCorNumero("adicionar");
  };

  const removerItem = () => {
    if (itens > 0) {
      setItens((itens) => itens - 1);
      setCorNumero("remover");
    }
  };

  return (
    <section className="container-carrinho">
      <p> Itens no carrinho: <br /> <span className={corNumero}> {itens}</span> </p>
      <section className="botoes">
      <button onClick={adicionarItem} >🛒✅ </button>
      <button onClick={removerItem} >🛒❌ </button>
      </section>
    </section>
  );
}

export default Carrinho;
