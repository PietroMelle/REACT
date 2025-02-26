import BotaoLogin from "./Components/RendCondBotaoLogin";
import RendCondCOMCurtoCircuito from "./Components/RendCond(&&)";
import RendCondCOMTernario from "./Components/RendCond(OTernario)";
import Carrinho from "./Components/RendCondCarrinho";
import MostrandoMensagem from "./Components/RendCondMostrandoMnsgs";
import MensagemDeErro from "./Components/RendCondErroMensagem"
import "./App.css";

function App() {
  return (
    <>
      <section>
        <section className="separacao">
          <BotaoLogin />
        </section>

        <hr />

        <section className="separacao">
          <MensagemDeErro />
        </section>

        <hr />
        
        <section className="separacao">
        <RendCondCOMCurtoCircuito isLogado={true} />
        <RendCondCOMCurtoCircuito isLogado={false} />
        </section>

        <hr />

        <section className="separacao">
        <RendCondCOMTernario isLogado={true} />
        <RendCondCOMTernario isLogado={false} />
        </section>

        <hr />

        <section className="separacao">
        <Carrinho itens={["Produto 1", "Produto 2"]} />
        <Carrinho itens={[]} />
        </section>

        <hr />

        <section className="separacao">
        <MostrandoMensagem tipo="erro" />
        <MostrandoMensagem tipo="sucesso" />
        </section>

      </section>
    </>
  );
}

export default App;
