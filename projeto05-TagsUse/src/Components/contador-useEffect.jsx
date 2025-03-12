import { useEffect } from "react";

function jeitoErrado(){
useEffect(async () => {
    const dados = await fetch("https://api.exemplo.com");
}, []);
}

export default jeitoErrado 

function jeitoCerto() {
    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("https://api.exemplo.com");
            const dados = await resposta.json();
            console.log(dados);
        }
        fetchData();
    }, []);
}

export default jeitoCerto