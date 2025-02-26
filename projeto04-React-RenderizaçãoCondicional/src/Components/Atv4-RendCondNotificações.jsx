import { useState } from 'react';

function Dashboard({ notificacoes }) {
  const [usuarioLogado, setUsuarioLogado] = useState(false);

  // Função para efetuar o login
  const efetuarLogin = () => {setUsuarioLogado(true)};

  // Verifica se o usuário está logado
  if (!usuarioLogado) {
    // Se não estiver logado, exibe a mensagem e o botão Entrar
    return (
      <div>
        <p>🔑 Faça login para ver suas notificações</p>
        <button onClick={efetuarLogin}>Entrar</button>
      </div>
    );
  }

  return (
    <div>
      {notificacoes > 0 ? (
        <div>📩 Você tem {notificacoes} novas mensagens!</div>
      ) : (
        <div>🔕 Nenhuma nova mensagem</div>
      )}
    </div>
  );
}

export default Dashboard;