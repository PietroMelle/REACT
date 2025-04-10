import { useState } from 'react';

function Formulario() {
  const [contato, setContato] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contato === "whatsapp") { // Caso for escolhido WhatsApp, ao enviar a mensagem, retorna um alert de WhatsApp
      alert(`A mensagem será enviada via WhatsApp ${whatsapp}`);
    } else if (contato === "email") { // Caso for escolhido Email, ao enviar a mensagem, retorna um alert de Email
      alert(`A mensagem será enviada via Email ${email}`);
    } else if (contato === "telefone") { // Caso for escolhido Telefone, ao enviar a mensagem, retorna um alert de Telefone
      alert(`A mensagem será enviada via Telefone ${telefone}`);
    } // Essas ações dependem do que o usuário escolher, que é a variável "contato" e "setContato"
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Opções de Contato */}
      <label>
        Opções de contato:
        <br />
        {/* O "type="radio"" é o que faz a caixinha de selecionar */}
        <input type="radio" value="whatsapp" name="contato" onChange={(e) => setContato(e.target.value)} />
        WhatsApp
        <input type="radio" value="email" name="contato" onChange={(e) => setContato(e.target.value)} />
        Email
        <input type="radio" value="telefone" name="contato" onChange={(e) => setContato(e.target.value)} />
        Telefone
      </label>
      <br />

      {/* Caso a variável "contato" for igual a opção, mostre um input com o placeholder daquela opção */}
      {/* Usamo o Curto-Circuito (&&) para verificar se realmente aquilo está acontecendo, se estiver, mostre, se não,não mostre. */}
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

      {/* Botão para enviar a mensagem */}
      <button type="submit">Enviar</button>
      {/* Type="submit" significa que esse botão está usando o onSubmit, então está usando a função handleSubmit */}
    </form>
  );
}

export default Formulario;