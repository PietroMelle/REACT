import { useState } from "react";

function LoginValidadoBot() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemDeErro, setMensagemDeErro] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = () => {
    // Validação em tempo real
    if (nome.length < 3) {
      setMensagemDeErro("O nome deve ter pelo menos 3 caracteres!");
      setIsValid(false);
    } else if (!email.includes("@")) {
      setMensagemDeErro("O email deve conter um @!");
      setIsValid(false);
    } else if (senha.length < 6) {
      setMensagemDeErro("A senha deve ter pelo menos 6 caracteres!");
      setIsValid(false);
    } else {
      setMensagemDeErro("");  // Limpar mensagem de erro se tudo estiver válido
      setIsValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // A submissão será permitida apenas se tudo estiver válido
    if (isValid) {
      alert("Cadastro realizado com sucesso!");
    } else {
      setMensagemDeErro("Por favor, corrija os erros antes de enviar.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          placeholder="Digite seu Nome"
          onChange={(e) => {
            setNome(e.target.value);
            handleInputChange();
          }}
        />
      </label>

      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          placeholder="Digite seu Email"
          onChange={(e) => {
            setEmail(e.target.value);
            handleInputChange();
          }}
        />
      </label>

      <br />

      <label>
        Senha:
        <input
          type="password"
          value={senha}
          placeholder="Digite sua Senha"
          onChange={(e) => {
            setSenha(e.target.value);
            handleInputChange();
          }}
        />
      </label>

      <br />

      <button type="submit" disabled={!isValid}>
        Cadastrar
      </button>

      {/* Exibição da mensagem de erro */}
      {mensagemDeErro && <p style={{ color: "red" }}>{mensagemDeErro}</p>}
    </form>
  );
}

export default LoginValidadoBot;