/*
🔨 4. Simulador de Notificações em Tempo Real

📌 Objetivo: exibir notificações automáticas a cada 5 segundos.
*/

import { useState, useEffect } from 'react';

function Notificacoes() {
  const [notificacao, setNotificacao] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setNotificacao(notificacao + 1);
    }, 5000);

    return () => {
      clearInterval(intervalo);
    };
  }, [notificacao]);

  return (
    <div>
      <h3> <strong> Notificação: {notificacao} </strong></h3>
      <p> Recebendo notificações em tempo real, a cada 5 segundos.</p>
    </div>
  );
}

export default Notificacoes;