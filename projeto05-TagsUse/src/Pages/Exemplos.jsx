// Components - Exemplos
import AtualizarTituloPagina from "../Components/Exemplos/attTituloDaPagina";
import TemaDoSitePelaHora from "../Components/Exemplos/temaSiteComHorario";
import MensagemMontada from "../Components/Exemplos/montagemDeMensagem"
import AlterarTema from "../Components/Exemplos/alterarTema";
import ContadorRenderizacao from "../Components/Exemplos/contadorRenderizacao";
import Limpeza from "../Components/Exemplos/cleanUp-Limpeza";

// Components - API's
import ListaDeUsuarios from "../Components/Exemplos/dadosAPI";
import AlternarModo from "../Components/Exemplos/modoEscuroCookies";
import InputTexto from "../Components/Exemplos/InputTexto";
import InputNumber from "../Components/Exemplos/InputNumero";
import InputCheckBox from "../Components/Exemplos/checkBox";
import InputRadio from "../Components/Exemplos/InputRadio";
import InputSelect from "../Components/Exemplos/InputSelect";
import InputTextArea from "../Components/Exemplos/InputTextarea"
import InputDataFormada from "../Components/Exemplos/InputDataFormada"

function Exemplos() {
  return (
    <>

    <a href="http://localhost:5173/"> Voltar para Home </a>
    
    {/* ✅ Exemplos */}
{/* 1. Atualizar Título da Página */}
{/* <h1> 🔆 Botão de Atualização de Título da Página juntamente com um contador 🔢 </h1>
<center>
  <section className="container">
    <AtualizarTituloPagina />
  </section>
</center>

<br />
<hr />
<br /> */}

{/* 2. Sincronizando Tema do Site com o Horário do Dia */}
{/* <h1> 🔗 Sincronizando Tema do Site com o Horário do Dia 🌙🌞</h1>
<center>
  <section className="container">
    <TemaDoSitePelaHora />
  </section>
</center>

<br />
<hr />
<br /> */}

{/* 3. Mensagem Montada */}
{/* <h1> 📣 Mensagem Montada 📝</h1>
<center>
  <section className="container">
    <MensagemMontada />
  </section>
</center>

<br />
<hr />
<br /> */}

{/* 4. Alterar Tema */}
{/* <h1> 🎨 Alterar Tema 🌗</h1>
<center>
  <section className="container">
    <AlterarTema />
  </section>
</center>

<br />
<hr />
<br /> */}

{/* 5. Contador de Renderizações */}
{/* <h1> 📱 Contador de Renderizações 👁‍🗨 </h1>
<center>
  <section className="container">
    <ContadorRenderizacao />
  </section>
</center>

<br />
<hr />
<br /> */}

{/* 6. Limpeza */}
{/* <h1> 🧹 Limpeza - CleanUp 🧼</h1>
<center>
  <section className="container">
    <p> <strong> Clique no F12 e veja a mágica acontecer! </strong> </p>
    <Limpeza />
  </section>
</center>

<br />
<hr />
<br /> */}

      

      <h1 style={{color: "black"}}> <strong> Exemplos com API's ⬇ </strong> </h1>

      <br />

      {/* 1. Lista de Usuários */}
      <h1> Lista de Usuários com API 📚 </h1>
      <center>
        <section className="container" id="listaUser">
          <ListaDeUsuarios />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 2. Botão de Alternar Modo com Cookies(localStorage) */}
      <h1> Botão de Alternar Modo com Cookies(localStorage) 🌛 </h1>
      <center>
        <section className="container">
          <AlternarModo />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 3. Input onde coloca o nome e pode limpa-lo depois */}
      <h1> Input Texto 📱 </h1>
      <center>
        <section className="container">
          <InputTexto />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 4. Input onde coloca a idade e verifica se é maior de idade */}
      <h1> Input Number 🔢 </h1>
      <center>
        <section className="container">
          <InputNumber />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 5. CheckBox com seus hobbies */}
      <h1> CheckBox 📦 </h1>
      <center>
        <section className="container">
          <InputCheckBox />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 6. Radio Button com suas comidas preferidas */}
      <h1> Radio Button 🚨 </h1>
      <center>
        <section className="container">
          <InputRadio />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 7. Select para selecionar cores */}
      <h1> Select 🔽 </h1>
      <center>
        <section className="container">
          <InputSelect />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 8. Usando textarea */}
      <h1> Textarea 👁‍🗨 </h1>
      <center>
        <section className="container">
          <InputTextArea />
        </section>
      </center>

      <br />
      <hr />
      <br />

      {/* 9. Usando Input para data formada */}
      <h1> Input Data Formada 📆 </h1>
      <center>
        <section className="container">
          <InputDataFormada />
        </section>
      </center>

      <br />
      <hr />
      <br />

    </>
  );
}

export default Exemplos;