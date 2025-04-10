/*
📌 Atividade 5: Criando um Formulário de Login

🎯 Objetivo: Criar um formulário de login que exibe um alerta com os dados digitados
*/


import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`E-mail: ${email}\nSenha: ${senha}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                E-mail:
                <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                Senha:
                <br />
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <br />
                <button type="submit"> Entrar </button>
            </label>
        </form>
    )
}

export default Login