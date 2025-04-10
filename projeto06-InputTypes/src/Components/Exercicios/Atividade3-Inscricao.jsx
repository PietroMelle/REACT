/*
Atividade 3: Formulário de Inscrição em Evento

Objetivo: Coletar nome completo, email e se deseja receber notificações por email.
1. Combinação de input text, email e checkbox
2. Controle de multiplos estados
3. Mensagem de confirmação ao final (alert)
*/

import { useState } from "react";

function Inscricao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [notificacao, setNotificacao] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notificacao) {
      alert(`Inscrição feita!\nSeu nome: ${nome}\nSeu email: ${email}\nDeseja receber notificações: Não`);
    } else if (notificacao) { // \n serve para pular linha
      alert(`Inscrição feita!\nSeu nome: ${nome}\nSeu email: ${email}\nDeseja receber notificações: Sim`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nome}
        placeholder="Digite seu Nome"
        onChange={(e) => setNome(e.target.value)}
      />

      <br />

      <input
        type="email"
        value={email}
        placeholder="Digite seu Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      Deseja receber notificações por Email?
      <input
        type="checkbox"
        value="notificacao"
        name="notificacao"
        checked={notificacao}
        onChange={(e) => setNotificacao(e.target.checked)}
      />

      <br />
      
      <button type="submit"> Enviar </button>
    </form>
  );
}

export default Inscricao;
