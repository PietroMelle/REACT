import { useState, useEffect } from 'react';

function Largura() {
  const [largura, setLargura] = useState(0);
  const [altura, setAltura] = useState(0);

  useEffect(() => {
    const larguraAtual = setInterval(() => {
      setLargura(screen.width);
    }, 10); // Tempo para atualizar o valor da largura

    const alturaAtual = setInterval(() => {
      setAltura(screen.height);
    }, 10)

    return () => {
      clearInterval(larguraAtual);
      clearInterval(alturaAtual);
    };
  }, [largura, altura]);

  return (
    <div>
      <p><strong> Largura atual: {largura} px </strong> </p>
      <p><strong> Altura atual: {altura} px </strong> </p>
    </div>
  );
}

export default Largura;