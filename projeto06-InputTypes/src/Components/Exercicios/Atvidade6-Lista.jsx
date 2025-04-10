import { useState } from "react";

function Lista() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]); // Começamos com o array vazio

  // Função para adicionar uma tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
    setLista([...lista, tarefa]);
    // Usamos o Spread Operator para concatenar os Arrays, junta um com outro mantendo as informações do antigo
    setTarefa(""); // Aqui vai fazer com que o Input limpe após clicar no botão para adicionar uma tarefa
  };

  // Função para remover uma tarefa
  const handleRemove = (index) => {
    setLista(lista.filter((tarefa, item) => item !== index));
  }; /* O "index" é o índice do item que queremos remover, e o "item" é o índice atual do array. 
     Se eles forem diferentes, mantemos a tarefa na lista. Se for igual, a tarefa é removida. */
  // O ".filter" vai percorrer o array e verficar a condição e depois cria um novo array

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      <br />
      <h3> Lista de Afazeres </h3>
      <ul>
        {lista.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => handleRemove(index)}> ✅ </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Lista;
