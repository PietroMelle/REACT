// Components
import Header from "../Components/HeaderExem";
import Navbar from "../Components/NavbarExem";

// Exemplos
import Ex1FormularioLogin from "../Components/Exemplos/Exemplo1-Formulario";
import Ex2FormularioCheckBox from "../Components/Exemplos/Exemplo2-Checkbox";
import Ex3FormularioSelectERadio from "../Components/Exemplos/Exemplo3-SelectRadio"
import Ex4FormularioNumero from "../Components/Exemplos/Exemplo4-ValidacaoNumero"

function Exemplos() {
  return (
    <>
      <Header />

      <Navbar />

      <br />
      <br />

      <center>

      {/* Exemplo 1 */}
      <h2> Exemplo 1 - Formulário com Input de Formulario </h2>
      <br />
      <section className="container">
        <Ex1FormularioLogin />
      </section>

      <br />
      <hr />
      <br />

      {/* Exemplo 2 */}
      <h2> Exemplo 2 - Formulário com Input de onSubmit (checkBox) </h2>
      <br />
      <section className="container">
        <Ex2FormularioCheckBox />
      </section>

      <br />
      <hr />
      <br />

      {/* Exemplo 3 */}
      <h2> Exemplo 3 - Formulário com Input de onSubmit (Select e Radio) </h2>
      <br />
      <section className="container">
        <Ex3FormularioSelectERadio />
      </section>

      <br />
      <hr />
      <br />

      {/* Exemplo 4 */}
      <h2> Exemplo 3 - Formulário com Input de onSubmit (Validação de Números) </h2>
      <br />
      <section className="container">
        <Ex4FormularioNumero />
      </section>

      <br />
      <hr />
      <br />


      </center>

    </>
  );
}

export default Exemplos;
