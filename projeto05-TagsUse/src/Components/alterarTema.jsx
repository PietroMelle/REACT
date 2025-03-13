import { useState, useEffect } from "react";

function AlterarTema() {
    const [temaEscuro, setTemaEscuro] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = temaEscuro ? "#222" : "#FFF"; // para alterar o tema do site inteiro
        document.body.style.color = temaEscuro ? "#FFF" : "#000"; // para alterar a cor das letras/fonte do site inteiro
                                                                 // H1 não muda pois está com CSS!

        console.log(`Tema atualizado: ${temaEscuro ? "Escuro" : "Claro"}`);
    }, [temaEscuro]); // Executa sempre que o "temaEscuro" mudar

    return (
        <div>
            <h2> Modo: {temaEscuro ? "Escuro" : "Claro"} </h2>
            <button onClick={() => setTemaEscuro(!temaEscuro)}> Alterar Tema </button>
        </div>
    )
}

export default AlterarTema;