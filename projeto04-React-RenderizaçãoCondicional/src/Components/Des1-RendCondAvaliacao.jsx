import { useState } from "react"
import "./Des1-CSS.css"

function Avaliacao() {
    /* Estado que armazena a avaliação (quantas estrelas foi escolhida) atual do usuário. */
    const [avaliacao, setAvaliacao] = useState(0)

    return (
        <>
            <section className="boxAvaliacao">
                <h2>Avaliação</h2>
                <section className="exibeStar">
                    {/* fa fa-star checked = estrela dourada (pintada) quando clica nela
                        fa fa-star = estrela preta (sem cor) sem ser clicada
                        setAvaliacao = quantas estrelas foram clicadas
                        avaliacao = quantas estrelas vão acender
                    */}
                    <span className={avaliacao >= 1 ? "fa fa-star checked" : "fa fa-star"} onClick={() => setAvaliacao(1)}></span>
                    <span className={avaliacao >= 2 ? "fa fa-star checked" : "fa fa-star"} onClick={() => setAvaliacao(2)}></span>
                    <span className={avaliacao >= 3 ? "fa fa-star checked" : "fa fa-star"} onClick={() => setAvaliacao(3)}></span>
                    <span className={avaliacao >= 4 ? "fa fa-star checked" : "fa fa-star"} onClick={() => setAvaliacao(4)}></span>
                    <span className={avaliacao >= 5 ? "fa fa-star checked" : "fa fa-star"} onClick={() => setAvaliacao(5)}></span>
                </section>
                {avaliacao > 0 && <p><strong>Você avaliou com {avaliacao} estrelas!</strong></p>}
            </section>
        </>
    )
}

export default Avaliacao