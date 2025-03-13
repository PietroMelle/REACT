// Components - Exemplos
import AtualizarTituloPagina from "../Components/attTituloDaPagina";
import TemaDoSitePelaHora from "../Components/temaSiteComHorario";
import MensagemMontada from "../Components/montagemDeMensagem"
import AlterarTema from "../Components/alterarTema";
import ContadorRenderizacao from "../Components/contadorRenderizacao";
import Limpeza from "../Components/cleanUp-Limpeza";

function Exemplos() {
  return (
    <>

    <a href="http://localhost:5173/"> Voltar para Home </a>
    
      {/* ✅ Exemplos */}
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

      {/* 3. Mensagem Montada */}
      <h1> 📣 Mensagem Montada 📝</h1>
      <center>
        <section className="container">
          <MensagemMontada />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 4. Alterar Tema */}
      <h1> 🎨 Alterar Tema 🌗</h1>
      <center>
        <section className="container">
          <AlterarTema />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 5. Contador de Renderizações */}
      <h1> 📱 Contador de Renderizações 👁‍🗨 </h1>
      <center>
        <section className="container">
          <ContadorRenderizacao />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 6. Limpeza */}
      <h1> 🧹 Limpeza - CleanUp 🧼</h1>
      <center>
        <section className="container">
          <p> <strong> Clique no F12 e veja a mágica acontecer! </strong> </p>
          <Limpeza />
        </section>
      </center>
    </>
  );
}

export default Exemplos;