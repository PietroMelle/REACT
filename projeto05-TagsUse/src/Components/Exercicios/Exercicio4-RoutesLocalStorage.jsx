

import { useState } from "react";

function RouteLocalStorage() {
    const [nomeUsuario, setNomeUsuario] = useState (() => JSON.parse(localStorage.getItem("Nome Usuario")) || "")

    return (
        <section>
            <h3> Exercicio Local Storage com Route </h3>
            <p> Seu nome: <strong> {nomeUsuario} </strong></p>
        </section>
    )
}

export default RouteLocalStorage;