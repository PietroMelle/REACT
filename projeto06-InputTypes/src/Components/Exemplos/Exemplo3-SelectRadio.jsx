import { useState } from "react";

function CadastroForm() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [genero, setGenero] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Cadastro feito! Nome: ${nome}, Cidade: ${cidade}, Gênero: ${genero}`);
  }

  return (
    <form onSubmit={handleSubmit} className="container-input">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
        <option value="">Selecione uma cidade</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
      </select>

      <label>
      Masculino
      <br />
        <input
          type="radio" // Chega se vai ser assinalado ou não
          name="genero"
          value="Masculino"
          checked={genero === "Masculino"} // Checa se o valor é igual ao que está no estado
          onChange={(e) => setGenero(e.target.value)}
        />
      </label>

      <label>
      Feminino
      <br />
        <input 
        type="radio" // Chega se vai ser assinalado ou não
        name="genero"
        value="Feminino"
        checked={genero === "Feminino"} // Checa se o valor é igual ao que está no estado
        onChange={(e) => setGenero(e.target.value)}
        />
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroForm;