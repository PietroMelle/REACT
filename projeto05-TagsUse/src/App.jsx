// CSS
import "./App.css";

// Components
import AtualizarTituloPagina from "./Components/attTituloDaPagina";
import TemaDoSitePelaHora from "./Components/temaSiteComHorario";

function App() {
  return (
    <>
    {/* 1. Atualizar Título da Página */}
      <h1> 🔆 Botão de Atualização de Título da Página juntamente com um contador 🔢 </h1>
      <center>
      <section className="container">
        <AtualizarTituloPagina />
      </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 2. Sincronizando Tema do Site com o Horário do Dia */}
      <h1> 🔗 Sincronizando Tema do Site com o Horário do Dia 🌙🌞</h1>
      <center>
      <section className="container">
        <TemaDoSitePelaHora />
        </section>
      </center>

      <br />
      <hr />
      <br />


    </>
  );
}

export default App;
