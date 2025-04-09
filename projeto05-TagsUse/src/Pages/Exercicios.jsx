// Components
import Header from "../Components/HeaderExer";
import Navbar from "../Components/NavbarExer";

import "./Styles/Exercicios.css"

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
import Ex5PaisesAPI from "../Components/Exercicios/Exercicio5-InputSelectAPI"

function Exercicios() {
  return (
    <>
      
      <Header />

      <Navbar />


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
      
      <br />
      <br />

      <center>
      <h1> Selecionando Países da API </h1>
        <section className="container">
        <Ex5PaisesAPI />
        </section>
      </center>

      <br />
      <hr />
      <br />

    </>
  );
}

export default Exercicios;
