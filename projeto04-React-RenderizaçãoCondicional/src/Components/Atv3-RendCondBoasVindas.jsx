
function BoasVindas() { 
  // Obtem as horas e guarda elas em uma variavel
  const horaAtual = new Date().getHours();

  // Variável que armazena a mensagem
  let mensagem;

  if (horaAtual < 12) {
    // Se a hora for antes do meio-dia, exibe "Bom dia!"
    mensagem = 'Bom dia!'; // Mesangem onde insere a escrita dentro da variavel mensagem
  } 
  else if (horaAtual < 18) {
    // Se a hora for entre o meio-dia e as 18 horas, exibe "Boa tarde!"
    mensagem = 'Boa tarde!';
  } 
  else {
    // Se a hora for após as 18 horas, exibe "Boa noite!"
    mensagem = 'Boa noite!';
  }

  // Retorna a mensagem de boas-vindas em um elemento h1
  return (
    <div>
      <h1>{mensagem}</h1>
    </div>
  );
};

export default BoasVindas;