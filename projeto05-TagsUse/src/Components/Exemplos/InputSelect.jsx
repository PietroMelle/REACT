/*
📌 Exemplo 5: Trabalhando com Select (select)
 🎯 Objetivo: Neste exemplo, você aprenderá a capturar e manipular um select (dropdown)

🚩 Instruções:
1️⃣ Crie um componente React chamado InputSelect.jsx
2️⃣ Adicione um select com 3 opções de cores (Vermelho, Azul, Verde)
3️⃣ Exiba a cor escolhida abaixo do select
4️⃣ Mude a cor do texto para a cor escolhida
*/

import {  useState } from 'react';

function InputSelect() {
    const [cor, setCor] = useState('')

    return (
        <section>
            <h3> Escolha uma cor: </h3>
            <select value={cor} onChange={(e) => setCor(e.target.value)}>
                <option value=""> Selecione... </option>
                <option value="Red">Vermelho</option>
                <option value="Blue">Azul</option>
                <option value="Green">Verde</option>
            </select>
            <p style={{color: cor.toLowerCase()}}> Cor escolhida: {cor} </p>
        </section>
    )
}

export default InputSelect;
