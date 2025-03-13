// Components - Exercícios
import Ex1AttTituloPg from "../Components/Exercicio1-AtualizarTituloPagina";
import Ex2Contador1s from "../Components/Exercicio2-ContadorUseEffect";

function Exercicios() {
  return (
    <>
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
    </>
  );
}

export default Exercicios;