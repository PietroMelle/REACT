import { useState, useEffect } from "react"

function ChatPersistenteLS() {
    const [mensagens, setMensagens] = useState([])    // Resposta da API será um array
    const [msgMostrar, setMsgMostrar] = useState(
        () => JSON.parse(localStorage.getItem("Historico de Mensagem")) || []
    )    // Mensagens da API q será mostra
    const [loading, setLoading] = useState(false)   // Mensagem de carregando
    const [erro, setErro] = useState(null)          // Mensagem de erro
    const [email, setEmail] = useState(false)       // Mostrar email
    const [contador, setContador] = useState(
        () => JSON.parse(localStorage.getItem("Contador")) || 0
    )     // Contador de mensagens

    useEffect(() => {
        async function fetchMensagens() {
            try {   // verdadeiro
                const resposta = await fetch("https://jsonplaceholder.typicode.com/comments")
                if (!resposta.ok) {
                    throw new Error("Erro ao carregar mensagens")
                }
                const dados = await resposta.json()
                setMensagens(dados)
            } catch (erro) {    // falso ou erro
                setErro(erro.message)
            } finally {
                setLoading(false)
            }
        }
        fetchMensagens()
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            if (contador <= 9) {
                setMsgMostrar([...msgMostrar, mensagens[contador]])
                setContador((prev) => prev+1)
            }
        }, 5000)

        return () => clearInterval(timer)
    }, [contador, mensagens, msgMostrar])

    useEffect(() => {
        localStorage.setItem("Historico de Mensagem", JSON.stringify(msgMostrar))
        localStorage.setItem("Contador", JSON.stringify(contador))
    }, [msgMostrar, contador, mensagens])

    if (loading) return <h2>Carregando mensagens...</h2>
    if (erro) return <h2>Erro: {erro}</h2>

    return( 
        <section>
            <p>Mensagens Totais: <strong>{contador}</strong></p>
            <button onClick={() => setEmail(!email)} style={contador >=1 ? {display: "block"} : {display: "none"}}>{email ?  "Ocultar" : "Mostrar"} Emails</button>
            <section className="chat">

                {msgMostrar.map((msg) => (
                    <section key={msg.id} className="blocoMsg">
                        <h4>{msg.name} {email ? `| ${msg.email}` : ""}</h4>
                        <p>{msg.body}</p>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default ChatPersistenteLS