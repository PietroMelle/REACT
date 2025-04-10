import { useEffect, useState } from "react"

function MudarTemaCheck() {
    const [tema, setTema] = useState(() => JSON.parse(localStorage.getItem("TemaPagina")) || false)

    useEffect(() => {
        localStorage.setItem("TemaPagina", tema)
        if (tema) {
            document.body.style.background = "white"
            document.body.style.color = "black"
        }

        if (!tema) {
            document.body.style.background = "black"
            document.body.style.color = "white"
        }
    }, [tema]) 

    return(
        <>
            <section>
                <form>
                    <label>
                        <input
                            type="checkbox"
                            checked={tema}
                            onChange={() => setTema(!tema)}
                        />
                        Tema Escuro
                    </label>
                </form>
            </section>
        </>
    )
}

export default MudarTemaCheck