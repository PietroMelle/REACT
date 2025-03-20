// Components - Exercícios
import Ex1AttTituloPg from "../Components/Exercicios/Exercicio1-AtualizarTituloPagina";
import Ex2Contador1s from "../Components/Exercicios/Exercicio2-ContadorUseEffect";
import Ex3LarguraDaTela from "../Components/Exercicios/Exercicio3-MonitorandoLarguraDaTela";
import Ex4Notificacao from "../Components/Exercicios/Exercicio4-NotificacaoTempoReal";
import Ex5Temporizador from "../Components/Exercicios/Exercicio5-Temporizador";

import Des1Reacao from "../Components/Exercicios/Desafio1-Reacao";

// Components - API
import Ex1MensagemAutomaticaAPI from "../Components/Exercicios/Exercicio1-MensagensAutmaticas"
import Ex2LocalStorage from "../Components/Exercicios/Exercicio2-MensagemLocalStorage"
import Ex1InputTextAPI from "../Components/Exercicios/Exercicio1-InputTextLocalStorageAPI"
import Ex2InputIdade from "../Components/Exercicios/Exercicio2-InputIdade"
import Ex3InputPreferencias from "../Components/Exercicios/Exercicio3-InputPreferencias"
import Ex4RoutesLocalStorage from "../Components/Exercicios/Exercicio4-RoutesLocalStorage"

function Exercicios() {
  return (
    <>
      <a href="http://localhost:5173/"> Voltar para Home </a>

      <h2 style={{ fontSize: "2.5em" }}> Exercícios </h2>

      {/* 1. Atualizar Título da Página */}
      {/* <h1> Exercício 1 - Atualizar Título da Página 🔨 </h1>
      <center>
        <section className="container">
          <Ex1AttTituloPg />
        </section>
      </center>

      <br />
      <hr />
      <br /> */}

      {/* 2. Contador de 1s */}
      {/* <h1> Exercício 2 - Contador de 1s 📱 </h1>
      <center>
        <section className="container">
          <Ex2Contador1s />
        </section>
      </center>

      <br />
      <hr />
      <br /> */}

      {/* 3. Monitorando Largura e Altura da Tela */}
      {/* <h1> Exercício 3 - Monitorando Largura e Altura da Tela 📺 </h1>
      <center>
        <section className="container">
          <Ex3LarguraDaTela />
          <p> A largura e a altura muda automaticamente quando você altera ela! </p>
        </section>
      </center>

      <br />
      <hr />
      <br /> */}

      {/* 4. Notificação em Tempo Real */}
      {/* <h1> Exercício 4 - Notificação em Tempo Real 📢 </h1>
      <center>
        <section className="container">
          <Ex4Notificacao />
        </section>
      </center>

      <br />
      <hr />
      <br /> */}

      {/* 5. Temporizador */}
      {/* <h1> Exercício 5 - Temporizador ⏰ </h1>
      <center>
        <section className="container">
          <Ex5Temporizador />
        </section>
      </center>

      <br />
      <hr />
      <br /> */}

      {/* Desafio 1 - Reação */}
      {/* <h1> Desafio 1 - Reação 🤔 </h1>
      <center>
        <section className="container">
          <Des1Reacao />
        </section>
      </center> */}

      {/* Exercícios com API's */}

      {/* Exercício 1 - Mensagens Automáticas */}
      <h1> Mensagens Automáticas a cada 5 segundos com API </h1>
      <center>
        <section className="container" id="listaUser">
        {/* <Ex1MensagemAutomaticaAPI /> */}
        </section>
      </center>

      <br />
      <hr />
      <br />

      <h1> Mensagens Automáticas com o LocalStorage </h1>
      <center>
        <section className="container" id="listaUser">
        {/* <Ex2LocalStorage /> */}
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* Exercício 1 - Input de Texto com API e Local Storage */}
      <h1> Input de Texto com API e Local Storage </h1>
      <center>
        <section className="container">
        <Ex1InputTextAPI />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* Exercício 2 - Input para verificar a idade */}
      <h1> Input de Verificação de Idade 👴 </h1>
      <center>
        <section className="container">
        <Ex2InputIdade />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* Exercício 3 - Input com flag de Preferencias */}
      <h1> Input de Verificação de Idade 👴 </h1>
      <center>
        <section className="container">
        <Ex3InputPreferencias />
        </section>
      </center>

      <br />
      <hr />
      <br />

      <h1> Input de Verificação de Idade 👴 </h1>
      <center>
        <section className="container">
        <Ex4RoutesLocalStorage />
        </section>
      </center>

      <br />
      <hr />
      <br />

    </>
  );
}

export default Exercicios;
