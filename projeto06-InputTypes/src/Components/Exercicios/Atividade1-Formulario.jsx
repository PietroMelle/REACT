import React, { useState } from 'react';

function Formulario() {
  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Comentário "${comentario}" e nota "${nota}" enviados!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comentário:
        <br />
        <textarea value={comentario} onChange={(e) => setComentario(e.target.value)} placeholder="Digite seu comentário aqui" />
      </label>
      <br />
      <label>
        Nota:
        <br />
        <select value={nota} onChange={(e) => setNota(e.target.value)}>
          <option value="">Selecione uma nota</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;