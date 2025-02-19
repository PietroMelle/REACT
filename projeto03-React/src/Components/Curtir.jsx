import { useState } from 'react'
import "./CurtirCSS.css"

function Curtidas() {
    const [contador, setContador] = useState(0)
    const [curtida, setCurtida] = useState(true)
    const [coracoes, setCoracoes] = useState([])

    /* Função que é chamada quando o usuário clica no botão de curtir. */
    const curtir = () => {  
        // Aumenta o número de curtidas
        setContador((contador) => contador + 1)
        setCurtida(false)
        // Adiciona um novo coração à lista de corações existentes
        setCoracoes((coracoes) => [...coracoes, '💕']) 
        // Usamos aqui o Spread Operator (...) para criar um novo array que inclui todos os outros arrays
    }

    return (
        <section className='container-curtidas'>
            {/* Exibe o número total de curtidas */}
            <p> Total de Curtidas: {contador}</p>
            
            {/* Botão de curtir */}
            <button className={curtida ? "azul" : "vermelho"} onClick={curtir}> Curtir 👍 </button>
            
            <br />
            <br />

            {/* Exibe a lista de corações */}
            <section>
                {coracoes.map((coracao) => <span> {coracao} </span> )}
            {/* Usamos aqui o método map para exibir todos os elementos de todos os arrays */}
            </section>
        </section>
    )
}

export default Curtidas