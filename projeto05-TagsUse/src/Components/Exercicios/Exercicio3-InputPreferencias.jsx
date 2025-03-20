/*
📌 Exercício 3: Checkbox + Local Storage
 🎯 Objetivo: Criar um sistema de preferências que:
✅Salve os checkboxes marados no Local Storage

🚩 Instruções:
1️⃣ Crie um componente React chamado InputCheckbox.jsx
2️⃣ Adicione 3 checkboxes para opções de interesse (Ex.: "Esportes", "Música", "Cinema")
3️⃣ Salve no Local Storage e mantenha os valores ao carregar
*/

import { useState, useEffect } from "react";

function InputCheckBox() {
  const [preferencias, setPreferencias] = useState(() => JSON.parse(localStorage.getItem("hobbies")) || [])

  const toggleHobby = (preferencia) => {
    setPreferencias((prev) =>
      prev.includes(preferencia)
        ? prev.filter((item) => item !== preferencia)
        : [...prev, preferencia]
    );
  };

  useEffect(() => {
    localStorage.setItem("hobbies", JSON.stringify(preferencias));
  }, [preferencias]);

  return (
    <section>
      <h3> Selecione suas preferências: </h3>
      {["Esportes", "Música", "Cinema"].map((hobby) => (
        <label key={hobby}>
          <input type="checkbox" value={hobby} checked={preferencias.includes(hobby)} onChange={() => toggleHobby(hobby)} />
          {hobby}
        </label>
      ))}
      <p> <strong> Preferências selecionados: </strong> {preferencias.join(", ")} </p>
    </section>
  )
}

export default InputCheckBox