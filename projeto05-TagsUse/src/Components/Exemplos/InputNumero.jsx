/*
📌Exemplo 2: Trabalhando com Input Numérico (number)
 🎯Objetivo: Você aprenderá a capturar e validar um número digitado pelo usuário. Também temos como mostrar o que você é.
*/

import { useState } from "react";

function InputNumber() {
    const [idade, setIdade] = useState("")

return (
    <section>
        <h3> Digite sua idade: </h3>
        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Digite sua idade" />
        {idade && ( // Curto Circuito - Se for verdadeiro, faça...
            <p> {idade < 18 ? "Você é menor de idade" : "Você é maior de idade"} </p>
        )}
    </section>
)
}

export default InputNumber;

