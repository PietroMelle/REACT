import { useState } from "react";

function InputRadio() {
    const [comida, setComida] = useState("");

    return (
        <section>
            <h3> Escolha sua comida favorita: </h3>
            {["Pizza", "Hambúrguer", "Sushi"].map((item) => (
                <label key={item}>
                    <input type="radio" name="comida" value={item} checked={comida === item} onChange={(e) => setComida(e.target.value)} />
                    {item}
                </label>
            ))}
            <p> <strong> Sua comida favorita: </strong> {comida} </p>
        </section>
    )
}

export default InputRadio

