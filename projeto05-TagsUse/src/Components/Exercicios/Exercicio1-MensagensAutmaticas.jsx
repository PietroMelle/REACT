import { useEffect, useState } from "react";

function MensagensAutomaticas() {
  const [mensagens, setMensagens] = useState([]); // Array de todas as mensagens da API
  const [loading, setLoading] = useState(true); // Estado de carregamento da API
  const [erro, setErro] = useState(null);   // Estado de erro da API
  const [mensagemEscolhida, setMensagemEscolhida] = useState([]); // Array das mensagens selecionadas da API (seráo exibidas)
  const [contador, setContador] = useState(0) // Contador para saber a quantidade de mensagens (de 0 a 9 - 10 mensagens)

  useEffect(() => {
    async function fetchUsuarios() { // Função que vai buscar os usuários
      try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!resposta.ok) {
          throw new Error("Erro ao carregar usuários");
        }
        const dados = await resposta.json(); // Vai converter as respostas em JSON
        setMensagens(dados); // Salva as informações da API na nossa variável "mensagens"
      } catch (erro) {
        setErro(erro.message); // Se estiver algum erro, atualiza o estado do erro
      } finally {
        setLoading(false); //Atualiza o estado do carregamento para true quando carregar
      }
    }
    // Chama a função de buscar usuários
    fetchUsuarios();
  }, []);

  // useEffect para atualizar a mensagem escolhida
  useEffect(() => {
    // Aqui cria um intervalo para aparecer as mensagens (5000 ms = 5 segundos)
    const intervalo = setInterval(() => {
        if (contador <= 9) {    // Checa se a array já possui 10 mensagens (de 0 a 9)
            const mensagemAleatorio = Math.floor(Math.random() * mensagens.length); // Vai gerar um número aleátorio para a mensagem ser aleatória
            // "Math.floor" = arrendonda sempre para o número base. exemplo: 0,8 -> vira 0 - 1,2 -> vira 1
            const novaMensagem = mensagens[mensagemAleatorio]; // Pega e guarda a mensagem aleatória
            setMensagemEscolhida((mensagensAnteriores) => [...mensagensAnteriores, novaMensagem]); 
            // Atualiza o estado com a mensagem escolhida, juntando todos os arrays (...)
            setContador((prev) => prev + 1) // Atualiza o contador
        }
    }, 2000); // Tempo do intervalo  

    // Limpa o intervalo para não somar mais 5 segundos e ficar demorando mais. Sempre vai ser 5 segundos, pois limpa o intervalo.
    return () => clearInterval(intervalo);
  }, [mensagens, contador]);

  // Loading = verifica se a API está carregando
  if (loading) return <h2>Carregando usuários... </h2>;
  // Erro = veifica se houve algum erro
  if (erro) return <h2>Erro: {erro}</h2>;

  return (
    <>
      <h2> Mensagens da API: </h2>
      {/* Vai mapear as mensagens que foram escolhidas e mostra cada uma (.map) */}
      {mensagemEscolhida.map((mensagem) => (
        <section key={mensagem.id}>
            <ul>
          <li> {mensagem.body}</li>
          </ul>
        </section>
      ))}
    </>
  );
}

export default MensagensAutomaticas;