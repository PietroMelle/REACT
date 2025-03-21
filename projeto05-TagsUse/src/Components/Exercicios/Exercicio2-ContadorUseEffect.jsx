/*
🔨 2. Contador com useEffect

📌 Objetivo: Criar um contador que aumenta automaticamente a cada segundo.
*/

import { useState, useEffect } from 'react';

function Contador1s() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervaloTempo = setInterval(() => {
      setContador(contador + 1);
    }, 1000); // A cada 1000 milisegundos (1 segundo)

    return () => clearInterval(intervaloTempo);
  }, [contador]);

  return (
    <div>
      <p> <strong> Contador: {contador} </strong> </p>
    </div>
  );
}

export default Contador1s;