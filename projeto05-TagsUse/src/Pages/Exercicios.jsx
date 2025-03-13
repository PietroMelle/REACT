// Components - Exercícios
import Ex1AttTituloPg from "../Components/Exercicio1-AtualizarTituloPagina";
import Ex2Contador1s from "../Components/Exercicio2-ContadorUseEffect";
import Ex3LarguraDaTela from "../Components/Exercicio3-MonitorandoLarguraDaTela";
import Ex4Notificacao from "../Components/Exercicio4-NotificacaoTempoReal"
import Ex5Temporizador from "../Components/Exercicio5-Temporizador"

import Des1Reacao from "../Components/Desafio1-Reacao"

function Exercicios() {
  return (
    <>
    <a href="http://localhost:5173/"> Voltar para Home </a>

    <h2 style={{fontSize: "2.5em"}}> Exercícios </h2>

      {/* 1. Atualizar Título da Página */}
      <h1> Exercício 1 - Atualizar Título da Página 🔨 </h1>
      <center>
        <section className="container">
          <Ex1AttTituloPg />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 2. Contador de 1s */}
      <h1> Exercício 2 - Contador de 1s 📱 </h1>
      <center>
        <section className="container">
          <Ex2Contador1s />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 3. Monitorando Largura e Altura da Tela */}
      <h1> Exercício 3 - Monitorando Largura e Altura  da Tela 📺 </h1>
      <center>
        <section className="container">
          <Ex3LarguraDaTela />
          <p> A largura e a altura muda automaticamente quando você altera ela! </p>
        </section>
      </center>

      <br />
        <hr />
        <br />

        {/* 4. Notificação em Tempo Real */}
        <h1> Exercício 4 - Notificação em Tempo Real 📢 </h1>
        <center>
            <section className="container">
                <Ex4Notificacao />
            </section>
        </center>

        <br />
        <hr />
        <br />

        {/* 5. Temporizador */}
        <h1> Exercício 5 - Temporizador ⏰ </h1>
        <center>
            <section className="container">
                <Ex5Temporizador />
            </section>
            </center>

            <br />
            <hr />
            <br />

            {/* Desafio 1 - Reação */}
            <h1> Desafio 1 - Reação 🤔 </h1>
            <center>
              <section className="container">
                <Des1Reacao />
              </section>
            </center>
    </>
  );
}

export default Exercicios;