import "./Styles/Exemplos.css"

import Header from "../Components/HeaderExer";
import Navbar from "../Components/NavbarExer";

// Atividades
import Atv1Formulario from "../Components/Exercicios/Atividade1-Formulario"
import Atv2OpcaoInput from "../Components/Exercicios/Atividade2-OpcaoComInteracao"

function Exercicios() {
  return (
    <>
      <Header />
      <Navbar />
      <br />
      <br />
      <center>

        {/* Exercício 1 */}
        <h2> Exercício 1 - Formulário com Avalição e Comentário </h2>
        <br />
        <section className="container">
          <Atv1Formulario />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 2 */}
        <h2> Exercício 2 - Opções com Inputs alterando </h2>
        <br />
        <section className="container">
          <Atv2OpcaoInput />
        </section>
        <br />
        <hr />
        <br />

      </center>
    </>
  );
}

export default Exercicios;