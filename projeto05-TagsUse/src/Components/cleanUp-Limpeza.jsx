import { useEffect } from "react";

function Limpeza() {

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Executando a cada 1 segundo...")
        }, 1000)

        return () => {
            clearInterval(timer) // CleanUp: remove o timer ao desmontar
        }
    }, [])
}

export default Limpeza;

/*
✅ O que aconteceu aqui?

1. Quando o componente for removido, o clearInterval() é executado.
2. Isso evita vazamento de memória e melhora a performance.
*/