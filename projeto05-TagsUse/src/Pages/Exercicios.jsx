// Components - Exercícios
import Ex1AttTituloPg from "../Components/Exercicio1-AtualizarTituloPagina";
import Ex2Contador1s from "../Components/Exercicio2-ContadorUseEffect";
import Ex3LarguraDaTela from "../Components/Exercicio3-MonitorandoLarguraDaTela";

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

      {/* 3. Monitorando Largura da Tela */}
      <h1> Exercício 3 - Monitorando Largura da Tela 📺 </h1>
      <center>
        <section className="container">
          <Ex3LarguraDaTela />
          <p> A largura muda automaticamente quando você altera ela!</p>
        </section>
      </center>
    </>
  );
}

export default Exercicios;