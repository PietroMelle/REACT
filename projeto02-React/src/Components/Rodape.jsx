import "./RodapeCSS.css";

function textoRodape(props) {
  return (
    <div className="container-rodape">
      <p>{props.texto}</p>
      <img src={props.imagem} />
    </div>
  );
}

export default textoRodape;