import { useState } from "react";

function InputDataFormada() {
    const [data, setData] = useState("")
    const [erro, setErro] = useState("")

    // Captura a data e valida se é menor que hoje
    const handleChange = (e) => {
        const dataSelecionada = e.target.value;
        setData(dataSelecionada)

        // Verificar se a data é anterior ao dia atual
        const hoje = new Date().toISOString().split("T")[0]
        if (dataSelecionada < hoje) {
            setErro("⚠ A data não pode ser anterior ao dia atual!")
        } else {
            setErro("")
        }
    }

    // Formatar a data para DD/MM/AAAA
    const formatarData = (data) => {
        if (!data) return "";
        const [ano, mes, dia] = data.split("-")
        return `${dia}/${mes}/${ano}`;
    }

    return (
        <section>
            <h3> Escolha uma data: </h3>
            <input type="date" value={data} onChange={handleChange} />
            {erro && <p style={{color: "red"}}> {erro} </p>}
            {data && !erro && <p> <strong> Data escolhida: </strong> {formatarData(data)} </p>}
        </section>
    )
}

export default InputDataFormada