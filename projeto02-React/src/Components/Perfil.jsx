import "./PerfilCSS.css";

function usuario(props) {
  return (
    <div className="container-perfil">
      <img src={props.imagem} />
      <h1>{props.nome}</h1>
      <p>{props.descricao}</p>
    </div>
  );
}

export default usuario;
