import { useState } from "react";

function CorFavorita() {
  // Estado que armazena a cor favorita do usuário
  const [corFavorita, setCorFavorita] = useState("");

  return (
    <div>
        {/* 📌 onChange: quando o usuário seleciona uma opção, o onChange chama a função 
        que atualiza o valor de corFavorita com o valor da opção selecionada.
        📌 setCorFavorita é uma função que atualiza o estado do componente, definindo o novo valor de corFavorita.
        📌 target: pega o valor que foi selecionado */}
      <section className="container-select">
        <select value={corFavorita} onChange={(e) => setCorFavorita(e.target.value)}>
          {/* Opção padrão */}
          <option value="">Selecione uma cor</option>
          {/* Opções de cores */}
          <option value="Azul">Azul</option>
          <option value="Vermelho">Vermelho</option>
          <option value="Verde">Verde</option>
        </select>
      </section>
      {/* Onde exibe a cor favorita do usuário */}
      <p>Sua cor favorita é: {corFavorita}</p>
    </div>
  );
}

export default CorFavorita;