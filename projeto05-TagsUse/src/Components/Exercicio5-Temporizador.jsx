/*
🔗 5. Temporizador Personalizado

📌 Objetivo: criar um temporizador ajustável, onde o usuário pode escoher um tepo e iniciar a contagem regressiva.
*/

import { useState, useEffect } from 'react';

function Temporizador() {
  const [tempo, setTempo] = useState(0);
  const [contagem, setContagem] = useState(0);
  const [iniciado, setIniciado] = useState(false);

  useEffect(() => {
    let intervalo;
    if (iniciado) {
      // Inicia a contagem a cada 1 segundo
      intervalo = setInterval(() => {
        if (contagem > 0) {
          setContagem(contagem - 1);
        } else {
          // Para a contagem quando chegar a 0
          setIniciado(false);
        }
      }, 1000);
    }

    // Limpa o intervalo quando o componente é desmontado (coloca outro valor no input)
    return () => clearInterval(intervalo);
  }, [contagem, iniciado]);

  // Função para iniciar a contagem
  const iniciarContagem = () => {
    if (tempo > 0) {
      setContagem(tempo);
      setIniciado(true);
    }
  };

  // Função para parar a contagem
  const pararContagem = () => {
    setIniciado(false);
  };

  // Função para pegar o tempo
  const pegarTempo = (tempo) => {
    setTempo(parseInt(tempo.target.value));
  };

  return (
    <section>
      <input type="number" value={tempo} onChange={pegarTempo} />
      <br />
      <button onClick={iniciarContagem}>Iniciar</button>
      <button onClick={pararContagem}>Parar</button>
      <p>Tempo restante: {contagem} segundos</p>
    </section>
  );
}

export default Temporizador;