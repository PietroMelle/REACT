import "./Styles/Exemplos.css";

import Header from "../Components/HeaderDes";
import Navbar from "../Components/NavbarDes";

// Atividades
import Des1CheckboxInteligente from "../Components/Desafios/Desafio1-CheckboxInteligente";
import Des2TypeRadio from "../Components/Desafios/Desafio2-TypeRadio";
import Des3ReservaInteligente from "../Components/Desafios/Desafio3-ReservaInteligente";

function Desafios() {
  return (
    <>
      <Header />
      <Navbar />
      <br />
      <br />

    <center>

      {/* Desafio 1 */}
      <h2> Desafio 1 - Checkbox Inteligente </h2>
      <br />
      <section className="container">
        <Des1CheckboxInteligente />
      </section>
      <br />
      <hr />
      <br />

      {/* Desafio 2 */}
      <h2> Desafio 2 - Type Radio Inteligente </h2>
      <br />
      <section className="container">
        <Des2TypeRadio />
      </section>
      <br />
      <hr />
      <br />

      {/* Desafio 3 */}
      <h2> Desafio 3 - Reserva Inteligente </h2>
      <br />
      <section className="container">
        <Des3ReservaInteligente />
      </section>
      <br />
      <hr />
      <br />

    </center>
    </>
  );
}

export default Desafios;
