/*
🔨 1. Desafio: Jogo de Reflexo - Clique Rápido

📌 Objetivo: Criar um jogo onde o usuário deve clicar o mais rápido possível após um sinal visual.
❓ Ajuda: Trabalhar com setTimeout(), useEffect() e Date.now() para calcular tempo de reação.
*/
import "./Desafio1Style.css"

import { useState, useEffect } from "react";

function Reflexo() {
  const tempoDefinido = 2000; // Tempo definido em 2 segundos
  const [mostrarParaClicar, setMostrarParaClicar] = useState(false); // Aqui guarda o valor para mostrar quando deve clicar no botão (true/false)
                                                    // Está false, então mostrar ao usuário para esperar
  const [tempoReacao, setTempoReacao] = useState(null); // Aqui guarda o tempo de reação do usuário
  const [resultadoTempo, setResultadoTempo] = useState(null); // Aqui guarda o resultado do tempo de reação e vai mostrar ao final

  useEffect(() => {
    const intervalo = setTimeout(() => { // Executa uma função após um tempo especifico (aqui é 2s)
      setMostrarParaClicar(true); // Muda o valor para true, então mostra para o usuário a mensagem "Clique Agora!"
      setTempoReacao(Date.now()); // usado para guardar o tempo atual quando o usuário deve começar a reagir (depois de 2s)
    }, tempoDefinido); // Use o tempo definido na variável para esperar

    return () => clearTimeout(intervalo); // Apaga o tempo de espera
  }, []);

  const Clique = () => {
    if (mostrarParaClicar) {
      const tempoAtual = Date.now(); // é usado novamente para pegar o tempo atual quando o usuário clica no botão
      // Agora usamos o primeiro Date.now e o de agora para calcular o tempo de reação
      const tempoReacaoCalculado = tempoAtual - tempoReacao;
      setResultadoTempo(tempoReacaoCalculado);
      setMostrarParaClicar(false); // Aqui vai desativar a opção de clicar (false) para não ficar clicando mais e calulcar outro tempo
    }
  };

  return (
    <section className="reflexo">
      {mostrarParaClicar ? <h2> Clique agora! </h2> : <h2> Espere... </h2>}
      <button onClick={Clique}> Clique </button>
      <p> Seu tempo de reação: {resultadoTempo}ms </p> 
    </section>
  );
}

export default Reflexo;
