import { useState } from "react";

function InputCheckBox() {
  const [hobbies, setHobbies] = useState([]); // Inicia vazio

  const toggleHobby = (hobby) => {
    setHobbies((prev) =>
      prev.includes(hobby) // includes = incluir
        ? prev.filter((item) => item !== hobby)
        : [...prev, hobby]
        // Scratch (...) = copia de informações sem alterar o original, junta os arrays
    );
  };

  return (
    <section>
        <h3> Selecione seus Hobbies: </h3>
        {["Ler", "Correr", "Viajar"].map((hobby) => (
            <label key={hobby}>
                <input type="checkbox" value={hobby} checked={hobbies.includes(hobby)} onChange={() => toggleHobby(hobby)} />
                {hobby}
            </label>
        ))}
        <p> <strong> Hobbies selecionados: </strong> {hobbies.join(", ")} </p>
    </section>
  )
}

export default InputCheckBox

