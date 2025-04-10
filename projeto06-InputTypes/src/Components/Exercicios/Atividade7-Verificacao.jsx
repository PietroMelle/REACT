import { useState } from "react";

function Verificacao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemDeErro, setMensagemDeErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.length < 3) {
      setMensagemDeErro("O nome deve ter pelo menos 3 caracteres!");
    } else if (!email.includes("@")) {
      setMensagemDeErro("O email deve conter um @!");
    } else if (senha.length < 6) {
      setMensagemDeErro("A senha deve ter pelo menos 6 caracteres!");
    } else {
      setMensagemDeErro("Cadastro realizado com sucesso!");
      alert("Cadastro realizado com sucesso!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>

        <input
          type="text"
          value={nome}
          placeholder="Digite seu Nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          value={email}
          placeholder="Digite seu Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={senha}
          placeholder="Digite sua Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

      </label>

      <br />

      <button type="submit">Cadastrar</button>
      
      <p style={{ color: 'red' }}>{mensagemDeErro}</p>
    </form>
  );
}

export default Verificacao;
