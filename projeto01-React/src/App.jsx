import Mensagem from "./Components/Mensagem";
import Cabecalho from "./Components/Cabecalho";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Cabecalho />
      </div>

      <br></br>
      <br></br>

      <div>
        <Mensagem />
      </div>

      <br></br>
      <br></br>

      <div className="paragrafo">
        <p>
          O React é uma biblioteca JavaScript para a construção de interfaces de
          usuário (UI). Desenvolvido pelo Facebook, ele facilita a criação de
          aplicações web interativas e eficientes. Ele permite que os
          desenvolvedores criem componentes reutilizáveis e componham interfaces
          complexas a partir desses componentes de forma declarativa.
        </p>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <footer>
        <p> Quer aprender mais? acesse o site do react </p>
      </footer>
    </>
  );
}

export default App;
