/*
📌 Exemplo:

useEffect (() => {
    async function fetchData() {
        const resposta = await fetch("https://api.exemplo.com");
        const dados = await resposta.json();
        console.log(dados);
    }
    fetchData()
}, [])

✅ O que aconteceu aqui?
Criamos uma funcção fetchData() dentro do useEffect
Chamamos fetchData() imediatamente para buscar dados
*/