import { useState } from "react";

function BotaoSeguir() {
    // Estado que controla se o botão está seguindo ou não
    const [seguido, setSeguido] = useState(false);

    return (
        <div>
            {/* Exibe uma mensagem dependendo do estado do botão */}
            <h2>{seguido ? "Você está seguindo!" : "Você não está seguindo!"}</h2>
            {/* Botão que alterna o estado ao ser clicado */}
            <button onClick={() => setSeguido(!seguido)}>{seguido ? "Deixar de seguir" : "Seguir"}</button>

        </div>
    )
}

export default BotaoSeguir;