function ListaDeProdutos ({ produtos }) {

  return (
    <section>
      <h2> Lista de Produtos </h2>
      {/* Verifica quantos produtos temna lista */}
      {produtos.length > 0 ? (
        // Se a lista de produtos não estiver vazia, exibe a lista.
        <ul>
          {produtos.map((produto, index) => (
            // Cada produto é exibido em uma lista não ordenada.
            <li key={index} > {produto} </li>
          ))}
        </ul>
      ) : (
        // Se a lista de produtos estiver vazia, exibe a mensagem
        <p> Nenhum produto disponível. </p>
      )}
    </section>
  )
}

export default ListaDeProdutos;