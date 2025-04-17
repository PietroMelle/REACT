/*
🎯 Desafio 2: Cadastro com Depêndecia de Campos

📌 Objetivo: Exibir CPF para Pessoa Física e CNPJ/Razão Social para Pessoa Jurídica.

🧩 Passo a Passo:
1️⃣ Crie um estado tipoPessoa
2️⃣ Mostre campos diferentes com base em tipoPessoa
3️⃣ Adicione validações específicas
*/

import { useState } from "react";

function Desafio2() {
    const [tipoPessoa, setTipoPessoa] = useState("");

    return (
        <form>
        <section>
            <h2> Selecione qual o seu tipo de Pessoa: </h2>

            <section>
                <input type="radio" value="Pessoa Física" checked={tipoPessoa === "Pessoa Física"} onChange={(e) => setTipoPessoa(e.target.value)} />
                <label>Pessoa Física</label>
            </section>

            <section>
                <input type="radio" value="Pessoa Jurídica" checked={tipoPessoa === "Pessoa Jurídica"} onChange={(e) => setTipoPessoa(e.target.value)} />
                <label>Pessoa Jurídica</label>
            </section>

            {tipoPessoa === "Pessoa Física" && (
                <section>
                    <label>Nome:</label>
                    <br />
                    <input type="text" placeholder="Digite seu nome" />
                    <br />
                    <label>CPF:</label>
                    <br />
                    <input type="text" placeholder="Digite seu CPF" maxLength="11" />
                </section>
            )}

            {tipoPessoa === "Pessoa Jurídica" && (
                <section>
                    <label>CNPJ:</label>
                    <br />
                    <input type="text" placeholder="Digite seu CNPJ" maxLength="14" />
                    <br />
                    <label>Razão Social:</label>
                    <br />
                    <input type="text" placeholder="Digite sua Razão Social" />
                </section>
            )}

        </section>
        </form>
    )
}

export default Desafio2;