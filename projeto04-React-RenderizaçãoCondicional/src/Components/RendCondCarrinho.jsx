function Carrinho({ itens }) {
  return (
    <div>
      {" "}
      <h2>🛒 Meu Carrinho</h2>
      {itens.length > 0 ? ( // Se for verdadeiro faça:
        <ul>
          {itens.map((item, index) => (  // .map passa por todo Array, e depois adiciona a um novo Array para mostrar
            <li key={index}>{item}</li>
          ))}
        </ul> // -----------------------
      ) : ( // Se for falso faça:
        <p>Seu carrinho está vazio 🛍</p>
      )}
    </div>
  );
}

export default Carrinho;
