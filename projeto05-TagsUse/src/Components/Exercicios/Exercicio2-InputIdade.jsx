/*
📌 Exercício 2: Input Numérico + Validação + Local Storage
 🎯 Objetivo: criar um input númerico para idade que:
✅ Salve no Local Storage
✅ Exiba mensagens de erro para idades inválidas

🚩 Instruções:
1️⃣ Crie um componente React chamado InputNumeroValidacao.jsx
2️⃣ Adicione um input numérico para a idade do usuário
3️⃣ Valide que a idade deve estar entre 18 e 100 anos
4️⃣ Exiba erro caso a idade seja inválida
*/

import { useState, useEffect } from "react";

function InputIdade() {
  const [idade, setIdade] = useState(() => JSON.parse(localStorage.getItem("idade")) || "")

  useEffect(() => {
    localStorage.setItem("idade", JSON.stringify(idade))
}, [idade])

  return (
    <section>
      <h3> Digite sua idade: </h3>
      <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} placeholder="Digite sua idade" />
        {idade && (
            <p style={{ color: idade < 18 || idade > 100 ? "red" : "green" }}> 
            {idade < 18 || idade > 100 ? "Idade inválida! 🚨 Deve ser entre 18 e 100 anos! " : "Idade válida! ✅"} 
            </p>
        )}
    </section>
  );
}

export default InputIdade