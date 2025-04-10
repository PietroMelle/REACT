import { useState } from "react"

function CadastroFamiliaLS() {
    const [participantes, setParticipantes] = useState(() => JSON.parse(localStorage.getItem("Participantes")) || [])
    const [erro, setErro] = useState(() => JSON.parse(localStorage.getItem("Erro")) || false)

    const handleSubmit = (e) => {
        e.preventDefault()

        for (const participante of participantes) { 
            if (participante.nome.length < 3) {
                setErro(true)
                return alert(`Insira mais de 3 caracteres para o nome do participante.`)
            }
            if (!participante.email.includes('@')) {
                setErro(true)
                return alert(`Insira um email válido para o participante.`)
            }
        }

        setErro(false)
        localStorage.setItem("Participantes", JSON.stringify(participantes))
        localStorage.setItem("Erro", JSON.stringify(erro))
        alert(`Cadastro realizado com sucesso! \n Participantes: ${participantes.length}`)
        console.log(participantes)    
    }

    const onChangeTratamento = (e, index) => { 
        const {name, value} = e.target  
        setParticipantes(
          participantes.map((participante, i) => i === index ? { ...participante, [name]: value } : participante)   
        )
    }

    const addParticipantes = () => {
        setParticipantes([...participantes, {nome: '', email: ""}]) 
    }

    const removeParticipantes = (index) => {
        setParticipantes(participantes.filter((conteudo, i) => i !== index))    
    }

    return(
        <>
            <section>
                <form onSubmit={handleSubmit}>
                    <h1>Participantes</h1>
                    <section>
                        {participantes.length > 0 && participantes.map((participante, index) => (    
                            <section key={index}>
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder={`Nome do participante ${index +1}`}
                                    value={participante.nome}
                                    onChange={(e) => onChangeTratamento(e, index)}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={`Email do participante ${index +1}`}
                                    value={participante.email}
                                    onChange={(e) => onChangeTratamento(e, index)}
                                />
                                <button type="button" onClick={() => removeParticipantes(index)}>Remove participante</button>
                            </section>
                        ))}
                    </section>
                    <button type="button" onClick={addParticipantes}>Adicionar Participantes</button>
                    {erro && <p style={{color: "red"}}>Preencha os inputs conforme instruido.</p>}
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}

export default CadastroFamiliaLS