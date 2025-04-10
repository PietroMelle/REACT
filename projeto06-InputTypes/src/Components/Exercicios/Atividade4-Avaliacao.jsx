/*
📌 Atividade 4: Pesquisa de Satisfação com Estrelas

🎯 Objetivo: Coletar uma avaliação de 1 a 5 estrlas com emojis e comentário opcional.

💡 Conceitos Praticados:
1️⃣ Uso de radio para avaliação visual (estrelas)
2️⃣ Estado controlado para feedback textual opcional
3️⃣ Exibição personalizada da resposta
*/

import { useState } from "react";

function Avaliacoes() {
    const [avaliacao, setAvaliacao] = useState("")
    const [comentario, setComentario] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!comentario) {
            alert(`Sua nota de avaliação é: ${avaliacao}\nSeu comentário: Nenhum`)
        } else {
            alert(`Sua nota de avaliação é: ${avaliacao}\nSeu comentário: ${comentario}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="radio" value="5 ⭐" name="avaliacao" onChange={(e) => setAvaliacao(e.target.value)} />
                ⭐⭐⭐⭐⭐
                

                <br />

                <input type="radio" value="4 ⭐" name="avaliacao" onChange={(e) => setAvaliacao(e.target.value)} />
                ⭐⭐⭐⭐

                <br />

                <input type="radio" value="3 ⭐" name="avaliacao" onChange={(e) => setAvaliacao(e.target.value)} />
                ⭐⭐⭐

                <br />

                <input type="radio" value="2 ⭐" name="avaliacao" onChange={(e) => setAvaliacao(e.target.value)} />
                ⭐⭐

                <br />

                <input type="radio" value="1 ⭐" name="avaliacao" onChange={(e) => setAvaliacao(e.target.value)} />
                ⭐

                <br />

                Comentário (opcional):
                <br />
                <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Digite seu comentário aqui" />
                <br />
            </label>
            <button type="submit"> Enviar </button>
        </form>
    )
}

export default Avaliacoes