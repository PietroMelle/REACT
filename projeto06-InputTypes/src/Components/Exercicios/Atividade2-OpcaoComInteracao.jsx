import React, { useState } from 'react';

function Formulario() {
  const [contato, setContato] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contato === "whatsapp") {
      alert(`A mensagem será enviada via WhatsApp ${whatsapp}`);
    } else if (contato === "email") {
      alert(`A mensagem será enviada via Email ${email}`);
    } else if (contato === "telefone") {
      alert(`A mensagem será enviada via Telefone ${telefone}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Opções de contato:
        <br />
        <input type="radio" value="whatsapp" name="contato" onChange={(e) => setContato(e.target.value)} />
        WhatsApp
        <input type="radio" value="email" name="contato" onChange={(e) => setContato(e.target.value)} />
        Email
        <input type="radio" value="telefone" name="contato" onChange={(e) => setContato(e.target.value)} />
        Telefone
      </label>
      <br />
      {contato === "whatsapp" && (
        <label>
          <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="Digite seu WhatsApp aqui" />
        </label>
      )}
      {contato === "email" && (
        <label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu Email aqui" />
        </label>
      )}
      {contato === "telefone" && (
        <label>

          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Digite seu Telefone aqui" />
        </label>
      )}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;