import { useState, useEffect } from "react";

function TemaDoSite() {
    const [escuro, setEscuro] = useState(false);

    useEffect(() => {
        const horaAtual = new Date().getHours();
        setEscuro(horaAtual >= 18 || horaAtual < 6);
    }, []);

    return (
        <div className={escuro ? "modo-noturno" : "modo-diurno"}>
            <h2> Modo {escuro ? "Noturno" : "Diurno"} </h2>
        </div>
    )
}

export default TemaDoSite;