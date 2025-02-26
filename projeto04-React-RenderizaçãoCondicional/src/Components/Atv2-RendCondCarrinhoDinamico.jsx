function CarrinhoDeCompras({ produtos }) {

  return (
    <section>
      <h2>Carrinho de Compras</h2>
      {/* Verifica se a lista de produtos está vazia */}
      {produtos.length > 0 ? (

        // Se a lista não estiver vazia, mostra a lista de produtos
        <div>
          <ul>

            {/* Ve toda a lista de produtos e mostra cada item (.map faz isso) */}
            {produtos.map((produto, index) => (

              // Saem como uma lista não ordenada
              <li key={index}> {produto} </li>
            ))}
          </ul>

          {/* Exibe a quantidade de produtos no carrinho (.lenght faz isso) */}
          <p>Quantidade de produtos: {produtos.length}</p>
        </div>
      ) : (
        
        // Se a lista estiver vazia, exibe uma mensagem
        <p>Seu carrinho está vazio</p>
      )}
    </section>
  );
}

export default CarrinhoDeCompras