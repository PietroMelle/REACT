import { useState, useEffect } from "react"; // Hooks

function ReservaInteligente3() {
  const [hospedes, setHospedes] = useState(() => JSON.parse(localStorage.getItem("hospedes")) || []); // Salvando no localStorage
  const [erros, setErros] = useState([]);

  // useEffect que atualiza o localStorage sempre que a lista de hóspedes é alterada
  useEffect(() => {
    localStorage.setItem("hospedes", JSON.stringify(hospedes));
  }, [hospedes]);

  const handleNomeChange = (index, value) => {
    const novosHospedes = [...hospedes]; // Cria uma cópia do array de hóspedes
    novosHospedes[index].nome = value; // Atualiza o nome do hóspede no índice especificado
    setHospedes(novosHospedes); // Atualiza o estado com a nova lista de hóspedes
  };

  const adicionarHospede = () => {
    setHospedes([...hospedes, { nome: "" }]); // Usa o ... (Spread Operator) para concatenar os Arrays quando adiciona um novo hóspede
  };

  const removerHospede = (index) => {
    const novosHospedes = hospedes.filter((_, i) => i !== index); // Filtra a lista para excluir o hóspede no índice especificado
    setHospedes(novosHospedes); // Atualiza o estado com a nova lista de hóspedes
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página

    // Verifica se todos os erros foram corrigidos
    if (erros.every((erro) => erro === "")) {
      const nomesHospedes = hospedes.map(h => h.nome).join(", "); // Concatena os nomes dos hóspedes em uma string
      alert(`Sua reserva foi realizada! \n Hóspedes: ${nomesHospedes}`); // Exibe uma mensagem de confirmação
    } else {
      alert("Por favor, corrija os erros antes de enviar."); // Exibe uma mensagem de erro
    }
  };

  // useEffect que valida os nomes dos hóspedes e atualiza o estado de erros
  useEffect(() => {
    const novosErros = []; // Array para armazenar os erros

    hospedes.forEach((hospede, index) => {
      // Verifica se o nome do hóspede tem menos de 6 caracteres
      if (hospede.nome.length < 6) {
        novosErros[index] = `Hóspede ${index + 1}: Insira um nome completo!`; // Adiciona uma mensagem de erro
      } else {
        novosErros[index] = ""; // Limpa o erro se o nome for válido
      }
    });

    setErros(novosErros); // Atualiza o estado de erros
  }, [hospedes]);

  // Renderiza o formulário e a lista de hóspedes
  return (
    <section className="desafio3">
      <form onSubmit={handleSubmit}>
        <h1>Dados dos Hóspedes:</h1>
        {hospedes.map((hospede, index) => (
          <div key={index}>
            <label>
              Hóspede {index + 1}:
              <input
                type="text" // Campo de entrada de texto
                placeholder="Nome Completo" // Placeholder do campo
                value={hospede.nome} // Valor do campo vinculado ao estado
                onChange={(e) => handleNomeChange(index, e.target.value)} // Atualiza o nome do hóspede ao alterar o valor
              />
            </label>
            {erros[index] && <p style={{ color: "red" }}>{erros[index]}</p>} {/* Exibe a mensagem de erro, se houver */}
            <button type="button" onClick={() => removerHospede(index)}>Remover</button> {/* Botão para remover o hóspede */}
          </div>
        ))}
        <button type="button" onClick={adicionarHospede}>Adicionar Hóspede</button> {/* Botão para adicionar um novo hóspede */}
        <button type="submit">Enviar</button> {/* Botão para enviar o formulário */}
      </form>
    </section>
  );
}

export default ReservaInteligente3;