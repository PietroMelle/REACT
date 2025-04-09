import "./Styles/Style.css"

import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault();  // Serve para prevenir o carregamento de todas as informações /
        //                      pausa e só vai para a proxima atividade se tudo estiver ok!
        alert(`Login realizado! Email: ${email}`)
    }

    return (
        <form onSubmit={handleSubmit} className="container-input">
            {/* onSubmit = quando clicado, ele é enviado */}
            <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <button type="submit">Entrar</button>
        </form>
    )
}

export default LoginForm;