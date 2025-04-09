import "./Styles/Style.css"

import {  useState } from "react";

function CadastroValidado() {
    const [username, setUsername] = useState("");
    const [idade, setIdade] = useState("");
    const [erros, setErros] = useState({username: "", idade:""});

    function  validarUsername(nome) {
        const regex = /^[a-zA-Z0-9]*$/; // Apenas letras e números
        return regex.test(nome);
        // 
    }

    function handleSubmit(e){
        e.preventDefault();

        const novosErros = {username: "", idade:""};

        if (!validarUsername(username)) {
            novosErros.username = "Nome de usuário inválido! Use apenas letras e número.";
        }
        if (idade < 18) {
            novosErros.idade = "Você precisa ter pelo menos 18 anos."
        }
        setErros(novosErros);

        // Se não houver erros, prossegue
        if (!novosErros.username && !novosErros.idade) {
            alert(`Cadastro realizado com sucesso! Nome: ${username}, Idade: ${idade}`);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="container-input">
            <section>
                    <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} /> <br />
                    {erros.username && <span style={{color: "red"}}>{erros.username}</span>}
            </section>

            <section>
                <input
                type="number"
                placeholder="Idade"
                value={idade}
                onChange={(e) => setIdade(e.target.value)} /> <br />
                {erros.idade && <span style={{color: "red"}}>{erros.idade}</span>}
            </section>

            <button type="submit">Cadastrar</button>
        </form>
    )


}

export default CadastroValidado;