import { useState, useEffect } from "react";

function ContadorRenderizacoes() {

    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("O componente foi renderizado!")
    }); // Sem array de dependências ➡ Executa em toda renderização

    return (
        <div>
            <h2> Contador: {contador} </h2>
            <button onClick={() => setContador(contador + 1)}> Incrementar </button>
        </div>
    )
}

export default ContadorRenderizacoes;