/*
    📌 Exercício 1: Input de Texto + Local Storage + API
    🎯 Objetivo: crie um campo de entrada de que:
        ✅Salve automaticamente no Local Storage
        ✅Busque um nome aleátorio de uma API ao iniciar

    🚩 Instruções:
        1️⃣ Crie um componente React chamado InputTextoAPI.jsx
        2️⃣ Adicione um input de texto onde o usuário pode digitar seu nome
        3️⃣ O nome digitado deve ser salvo no Local Storage
        4️⃣ Quando a página carregar, busque um nome da API randomuser.me e exiba como sugestão
*/

import { useEffect, useState } from "react"

function InputTextoAPI() {
    const [nomeUser, setNomeUser] = useState(() => JSON.parse(localStorage.getItem("Nome Usuario")) || "") // Salva o nome digitado
    const [nomeAleatorio, setNomeAleatorio] = useState("") // Armazena um nome aleátorio da API
    const [loading, setLoading] = useState(true)    // Status do carregamento
    const [erro, setErro] = useState(null)  // Status de erro

    // Função para conseguir o nome aleatório
    useEffect(() => {
        async function fetchUsuarios() { // async = função assincrona, espera algo acontecer para acontecer
            try {   // verdadeiro
                const resposta = await fetch("https://randomuser.me/api") // espera buscar a API
                if (!resposta.ok) { // Caso não conseguir achar a API, resulta em mensagem de erro
                    throw new Error("Erro ao buscar dados da API")
                }
                const dados = await resposta.json() // Transforma as informações da API em JSON
                setNomeAleatorio(dados.results[0].name.first)   // Armazena apenas o primeiro nome
                // Results: array com objetos - 0: array com as informações das pessoas - name.first: pega o nome
            } catch (erro) {    // falso ou erro
                setErro(erro.message)
            } finally {
                setLoading(false)
            }
        }
        fetchUsuarios()
    }, []) // Executa o useEffect apenas uma vez, quando atualiza ou entra no site

    useEffect(() => {
        localStorage.setItem("Nome Usuario", JSON.stringify(nomeUser))  // Armazena o valor digitado no input
    }, [nomeUser])  // Faz com que aconteça toda vez que a variável for alterada, no caso, quando o input for atualizado

    if (loading) return <h2>Carregando usuários...</h2>
    if (erro) return <h2>Erro: {erro}</h2>

    return(
        <>
            <section>
                <h3>Digite seu nome:</h3>
                <input 
                    type="text" 
                    value={nomeUser} // Valor que está sendo digitado
                    onChange={(e) => setNomeUser(e.target.value)}   // Armazena os valores que estão sendo digitados
                    placeholder={`Sugestão: ${nomeAleatorio}`}  // Mostra um nome aleátorio dado pela API
                />
                <p>Seu nome: <strong>{nomeUser}</strong></p>    {/* Exibe o nome salvo na variável */}
            </section>
        </>
    )
}

export default InputTextoAPI