/* 
🔨 1. Atualizando o Título da Página
📌 Objetivo: Sempre que o usuário clicar em um botão, o título da página deve exibir o número de cliques.
*/

import { useState, useEffect } from "react";

function AtualizarTitulo() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Clicou ${contador} vezes`;
    }, [contador]); // Executa apenas quando "contador" muda

    return (
        <div>
            <h2> Você clicou {contador} vezes! </h2>
            <button onClick={() => setContador(contador + 1)}>Clique aqui!</button>
        </div>
    )
}

export default AtualizarTitulo;