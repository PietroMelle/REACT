/*
📌 Exemplo 6: Trabalhando com Textarea (textarea)
 🎯 Objetivo: você aprenderá a a capturar textos longos em textareas.

🚩 Instruções:
1️⃣ Crie um componente React chamado InputTextarea.jsx
2️⃣ Adicione um textarea onde o usuário pode escrever um comentário
3️⃣ Exiba o texto digitado abaixo do textarea
*/

import { useState } from "react";

function InputTextarea() {
    const [comentario, setComentario] = useState("");

    return (
        <section>
            <h3> Escreva seu comentário: </h3>
            <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Digite aqui..." />
                <p> Cometário: {comentario} </p>
        </section>
    )
}

export default InputTextarea