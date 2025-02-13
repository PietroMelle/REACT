/*
Este componente recebe uma PROP chamada "texto" e exibe o conteúdo.
*/

function Mensagem(props) {
  return (
      <p>{props.texto}</p>
  );
}

export default Mensagem;