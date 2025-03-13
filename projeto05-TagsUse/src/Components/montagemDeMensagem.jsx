import { useEffect } from 'react';

function MensagemBoasVindas() {
    useEffect(() => {
        alert("Bem-vindo ao site! 🎉")
        console.log("Componente foi montado");
}, []);
return <h2> Bem-vindo ao nosso site! </h2>
}

export default MensagemBoasVindas;