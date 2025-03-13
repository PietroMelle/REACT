/*
🔨 2. Contador com useEffect

📌 Objetivo: Criar um contador que aumenta automaticamente a cada segundo.
*/

import { useState, useEffect } from 'react';

function Largura() {
  const [largura, setLargura] = useState(0);

  useEffect(() => {
    const larguraAtual = setInterval(() => {
      setLargura(screen.width);
    }, 10); // Tempo para atualizar o valor da largura

    return () => clearInterval(larguraAtual);
  }, [largura]);

  return (
    <div>
      <p><strong> Largura atual: {largura} px </strong> </p>
    </div>
  );
}

export default Largura;