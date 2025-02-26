import { useState } from 'react';

function JogoAdivinhacao() {
  // Estado que armazena um número aleatório entre 1 e 10
  const [numeroAleatorio] = useState (Math.round(Math.random() * 10));
  /*
  Math.round(Math.random() * 10): Essa é a expressão que gera o número aleatório entre 1 e 10.
  Math.random(): Essa função gera um número aleatório entre 0 e 1.
  * 10: Multiplica o número aleatório por 10, assim, fica ate o número 10 para escolher randomicamente
  Math.round(): arredonda o número aleatório para o número inteiro mais próximo, ou seja, 10.
  */
  
  // Estado que armazena o resultado da verificação do número
  const [resultado, setResultado] = useState('');
  
  // Estado que armazena o número digitado pelo usuário
  const [numeroDigitado, setNumeroDigitado] = useState('');

  // Função que verifica se o número digitado é igual ao número aleatório
  const verificarNumero = () => {
    // Verifica se o número digitado é igual ao número aleatório
    if (numeroDigitado == numeroAleatorio) {
      setResultado('🎉 Você acertou!');
    } else {
      setResultado('❌ Tente novamente!');
    }
  };

  return (
    <div>
      <h1>Jogo de Adivinhação</h1>
      {/* Input que recebe o número digitado pelo usuário */}
      <input type="number" value={numeroDigitado} onChange={(numero) => setNumeroDigitado(numero.target.value)} />
      <br />
      <br />
      {/* Botão que chama a função verificarNumero quando clicado */}
      <button onClick={verificarNumero}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default JogoAdivinhacao;