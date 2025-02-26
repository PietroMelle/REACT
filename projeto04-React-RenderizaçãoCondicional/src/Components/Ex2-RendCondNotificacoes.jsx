
function Notificacao({ notificacoes }) {
  // Verifica se há novas notificações e exibe a mensagem correspondente.
  return (
    // se notificacoes for maior que 0, faça acontecer. Caso não, não mostre nada. && = Curto Circuito
    notificacoes > 0 && (
      <div>
        {/* Exibe a mensagem de notificação com a quantidade de novas notificações. */}
        Você tem {notificacoes} novas notificações
      </div>
    )
  );
}

export default Notificacao;