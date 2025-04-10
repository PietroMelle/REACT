import { useState } from "react";

function Cadastro() {
  const [responsavel, setResponsavel] = useState({ nome: "", email: "" });
  const [dependentes, setDependentes] = useState([]);

  const handleAddDependente = () => {
    setDependentes([...dependentes, { nome: "", idade: "" }]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (index >= 0) {
      setDependentes(
        dependentes.map((dependente, i) =>
          i === index ? { ...dependente, [name]: value } : dependente
        )
      );
    } else {
      setResponsavel({ ...responsavel, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ responsavel, dependentes });
    alert("Cadastro enviado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h3>Responsável</h3>

      <label>

        <input
          type="text"
          name="nome"
          value={responsavel.nome}
          placeholder="Nome do responsável"
          onChange={(e) => handleInputChange(e, -1)}
        />
      
        <input
          type="email"
          name="email"
          value={responsavel.email}
          placeholder="Email do responsável"
          onChange={(e) => handleInputChange(e, -1)}
        />

      </label>

      <h3>Dependentes</h3>

      <button type="button" onClick={handleAddDependente}> + Adicionar dependente </button>

      {dependentes.map((dependente, index) => (

        <section key={index}>

          <label>

            Nome:
            <input
              type="text"
              name="nome"
              placeholder="Nome do dependente"
              value={dependente.nome}
              onChange={(e) => handleInputChange(e, index)}
            />

            Idade:
            <input
              type="number"
              name="idade"
              placeholder="Idade do dependente"
              value={dependente.idade}
              onChange={(e) => handleInputChange(e, index)}
            />

          </label>

          <br />

          <button type="button" onClick={() => handleRemoveDependente(index)}> - Remover dependente </button>
        </section>
      ))}

      <button type="submit">Enviar</button>
      
    </form>
  );
}

export default Cadastro;
