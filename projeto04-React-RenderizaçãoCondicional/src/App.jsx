/* 📌 Exercícios 1 - 4 */
import BotaoSeguir from "./Components/Ex1-RendCondSeguirSeguindo"
import Notificacao from "./Components/Ex2-RendCondNotificacoes";
import Fomulario from "./Components/Ex3-RendCondFormulario";
import ListaDeProdutos from "./Components/Ex4-RendCondListaDeProdutos"

/* 📌 Atividades 1 - 4 */
import PainelDeUsuario from "./Components/Atv1-RendCondPainelDeUsuario";
import CarrinnhoDinamico from "./Components/Atv2-RendCondCarrinhoDinamico";
import MensagemBoasVindas from "./Components/Atv3-RendCondBoasVindas";
import Notificacoes from "./Components/Atv4-RendCondNotificações"

/* 📌 Desafios 1 - 3 */
import AvaliacaoEstrelas from "./Components/Des1-RendCondAvaliacao"
import Tema from "./Components/Des2-RendCondTema"
import Jogo from "./Components/Des3-RendCondJogoAdvinha"

import "./App.css";

function App() {
  return (
    <>
      <section>

        {/* 1️⃣ Exercício 1 */}
        <section className="separacao">
          <h2> Exercício 1 - Botão “Seguir / Deixar de Seguir” </h2>
          <BotaoSeguir />
        </section>

        <hr />

        {/* 2️⃣ Exercício 2 */}
        <section className="separacao">
          <h2> Exercício 2 - Exibir Notificação Condicionalmente </h2>
          <Notificacao notificacoes={10} />
        </section>

        <hr />

        {/* 3️⃣ Exercício 3 */}
        <section className="separacao">
          <h2> Exercício 3 - Formulário com Mensagem de Erro </h2>
          <Fomulario />
        </section>

        <hr />

        {/* 4️⃣ Exercício 4 */}
        <section className="separacao">
          <h2> Exercício 4 - Lista de Produtos </h2>
          <ListaDeProdutos produtos={["Banana"]} />
        </section>

        <hr />

        {/* 1️⃣ Atividade 1 */}
        <section className="separacao">
          <h2> Atividade 1 - Painel do Usuário (Login/Logout) </h2>
          <PainelDeUsuario />
        </section>

        <hr />

        {/* 2️⃣ Atividade 2 */}
        <section className="separacao">
          <h2> Atividade 2 - Carrinho de Compras Dinâmico </h2>
          <CarrinnhoDinamico produtos={["Banana", "Kiwi", "Batata"]}/>
        </section>

        <hr />

        {/* 3️⃣ Atividade 3 */}
        <section className="separacao">
          <h2> Atividade 3 - Mensagem de Boas-Vindas Personalizada </h2>
          <MensagemBoasVindas />
        </section>

        <hr />

        {/* 4️⃣ Atividade 4 */}
        <section className="separacao">
          <h2> Atividade 4 - Dashboard com Notificações </h2>
          <Notificacoes notificacoes={1}/>
        </section>

        <hr />

        {/* 1️⃣ Desafio 1 */}
        <section className="separacao">
          <h2> Desafio 1 - Sistema de Avaliação com Estrelas ⭐⭐⭐⭐⭐ </h2>
          <AvaliacaoEstrelas />
        </section>

        <hr />

        {/* 2️⃣ Desafio 2 */}
        <section className="separacao">
          <h2> Desafio 2 - Criar um Modo Escuro (Dark Mode) 🌙 </h2>
          <Tema />
        </section>

        <hr />

        {/* 3️⃣ Desafio 3 */}
        <section className="separacao">
          <h2> Desafio 3 - Jogo de Adivinhação 🎲 </h2>
          <Jogo />
        </section>

      </section>
    </>
  );
}

export default App;
