import Links from "./Components/Links";
import Mensagem from "./Components/Mensagem";
import Rodape from "./Components/Rodape";
import fotoReact from "./assets/React.png";
import fotoUsuario from "./assets/fotoPerfil.png";
import fotoUsuario2 from "./assets/fotoPerfil2.png";
import Usuario from "./Components/Perfil";
import Botoes from "./Components/Botao";
import "./App.css";

function App() {
  return (
    <div className="app-container">

      <div className="links-container">
        <Links />
        <Mensagem texto="Este é um componente reutilizável com PROPS!" />
      </div>
      <br />

      <div className="perfil-container">
        <Usuario nome="XXXTENTACION_SAD" descricao="Jogador de Xbox 360 mais antigo da história (e também o melhor)." imagem={fotoUsuario} />
        <br />
        <br />
        <Usuario nome="Authentic Games" descricao="O melhor jogador e Youtuber de Minecraft da História" imagem={fotoUsuario2} />
      </div>

      <br />
      <br />

      <section className="container-botoes">
      <Botoes  classe="primario-botao" texto="Clique aqui" />
      <br />
      <Botoes classe="secundario-botao" texto="Clique aqui" />
      </section>

      <br />
      <br />

      <footer className="rodape-container">
        <Rodape texto="Todos os direitos reservados para o criador Pietro Melle." imagem={fotoReact} />
      </footer>

    </div>
  );
}

export default App;