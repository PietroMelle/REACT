import { useState } from "react";
import "./Des2-CSS.css";

function Tema() {
  const [tema, setTema] = useState(false);

  /* 📌 Arrow Function para quando clicar, muda o tema */
  const alterarTema = () => {setTema(!tema);};

  return (
    /* A classe utiliza a Renderização Condicionar, no CSS utilizo o nome e estiliso */
    <section className={tema ? "escuro" : "claro"}>
      <button onClick={alterarTema}> Alterar Tema </button>
    </section>
  );
}

export default Tema;