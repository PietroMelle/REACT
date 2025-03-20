/*
📌Exemplo 1: Manipulando Input de Texto (text)
 🎯 Objetivo: Neste execício, você aprenderá a capturar um valor digitado em um input de texto e exibir em tempo real. 
    Também, poderá limpar o texto com um botão.
*/

import  { useState } from 'react';

function InputTexto() {
    const [nome, setNome] = useState("");

    // Função para mudar o nome e deixar sem nada
    const limparTexto = () => {
        setNome("")
    };

    return (
        <section>
            <h3> Digite seu nome: </h3>
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite seu nome' />
            {/* onChange = fica observando o nome até mudar e, depois de alterar, adiciona à variável */}
            <br />
            <br />
            <button onClick={limparTexto}> Limpar </button>
            {/* onClick = ao clicar, acontece a função desejada */}
            <p> Seu nome: {nome} </p>
        </section>
    )
}

export default InputTexto

