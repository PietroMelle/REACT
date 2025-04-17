import "./Styles/Exemplos.css"

import Header from "../Components/HeaderExer";
import Navbar from "../Components/NavbarExer";

// Atividades
import Atv1Formulario from "../Components/Exercicios/Atividade1-Formulario"
import Atv2OpcaoInput from "../Components/Exercicios/Atividade2-OpcaoComInteracao"
import Atv3Inscricao from "../Components/Exercicios/Atividade3-Inscricao"
import Atv4Avaliacao from "../Components/Exercicios/Atividade4-Avaliacao"
import Atv5Login from "../Components/Exercicios/Atividade5-Login"
import Atv6Lista from "../Components/Exercicios/Atvidade6-Lista"
import Atv7Verificacao from "../Components/Exercicios/Atividade7-Verificacao"
import Atv8Cadastro from "../Components/Exercicios/Atividade8-Cadastro"
import Atv9Participantes from "../Components/Exercicios/Atividade9-Participantes"
import Atv10CadastroValidado from "../Components/Exercicios/Atividade10-CadastroValidacao"
import Atv11Tema from "../Components/Exercicios/Atividade11-Tema"
import Atv12Produtos from "../Components/Exercicios/Atividade12-Produtos"

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

        {/* Exercício 3 */}
        <h2> Exercício 3 - Inscrição com CheckBox, Email e Nome </h2>
        <br />
        <section className="container">
          <Atv3Inscricao />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 4 */}
        <h2> Exercício 4 - Avaliação e Comentário Opcional </h2>
        <br />
        <section className="container">
          <Atv4Avaliacao />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 5 */}
        <h2> Exercício 5 - Login com Senha </h2>
        <br />
        <section className="container">
          <Atv5Login />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 6 */}
        <h2> Exercício 6 - Lista </h2>
        <br />
        <section className="container">
          <Atv6Lista />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 7 */}
        <h2> Exercício 7 - Verificação dos Campos </h2>
        <br />
        <section className="container">
          <Atv7Verificacao />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 8 */}
        <h2> Exercício 8 - Cadastro e Seus Dependentes </h2>
        <br />
        <section className="container">
          <Atv8Cadastro />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 9 */}
        <h2> Exercício 9 - Participantes com localStorage </h2>
        <br />
        <section className="container">
          <Atv9Participantes />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 10 */}
        <h2> Exercício 10 - Cadastro com Validação em Tempo Real </h2>
        <br />
        <section className="container">
          <Atv10CadastroValidado />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 11 */}
        <h2> Exercício 11 - Mudança de Tema </h2>
        <br />
        <section className="container">
          <Atv11Tema />
        </section>
        <br />
        <hr />
        <br />

        {/* Exercício 12 */}
        <h2> Exercício 12 - Produtos, Quantidades e seus Preços </h2>
        <br />
        <section className="container">
          <Atv12Produtos />
        </section>
        <br />
        <hr />
        <br />

      </center>
    </>
  );
}

export default Exercicios;