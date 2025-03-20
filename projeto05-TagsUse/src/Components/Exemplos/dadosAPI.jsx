import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!resposta.ok) throw new Error("Erro ao buscar usuários!");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsuarios();
  }, []);

  if (loading) return <h2> Carregando usuários... </h2>;
  if (erro) return <h2> Erro: {erro} </h2>;

  return (
    <section>
      <h2> Lista de Usuários </h2>
      <p style={{color: "red"}}> Name ▪ E-mail ▪ Username </p>
      <span>
        {usuarios.map((user) => (
          <p key={user.id}> {user.name} - {user.email} - {user.username} </p>
        ))}
      </span>
    </section>
  );
}

export default ListaUsuarios;
