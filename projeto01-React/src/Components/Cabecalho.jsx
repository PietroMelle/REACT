import reactFoto from "../assets/React.png";
import "../Components/CabecalhoCSS.css";

function Cabecalho() {
  return (
    <header className="titulo">
      <h1>Bem-Vindo ao React! </h1>
      <img src={reactFoto} className="logo react" alt="React logo" />
    </header>
  );
}

export default Cabecalho;
