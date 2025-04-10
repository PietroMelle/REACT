import { useState } from "react";

function ProdutoPreco () {
    const [quantidade, setQuantidade] = useState()
    const [produto, setProduto] = useState()

    return (
        <form>
        <select value={produto} onChange={(e)=> setProduto(e.target.value)}>
        <option value=""> Selecione seu produto </option>
        <option value={10000}> PC da NASA </option>
        <option value={2000}> Nootebok </option>
        <option value={5000}> TV LG 100' Polegadas </option>

        </select>

        <input
        type="number"
        placeholder={`Digite a quantidade: `}
        value={quantidade}
        onChange={(e)=>setQuantidade(e.target.value)}
        />

        <p>Total: R$ {produto*quantidade}</p>
        </form>
    )
}

export default ProdutoPreco