/*
📌 Exercício 5: Select + API + Local Storage
 🎯 Objetivo: Criar um dropdown de países que:
✅ Busque países da API "restcountries.com"
✅ Salve o país selecionado no Local Storage

🚩 Instruções:
1️⃣ Crie um componente React chamado InputSelectAPI.jsx
2️⃣ Busque a lista de países de uma API
3️⃣ O país escolhido deve ser salvo no Local Storage
*/

import "../Exercicios/Exercicio5Style-InputSelectAPI.css";

import { useState, useEffect } from "react";

function PaisesAPI() {
  const [paises, setPaises] = useState([]);
  const [paisSelecionado, setPaisSelecionado] = useState(JSON.parse(localStorage.getItem("paisSelecionado")) || "");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarPaises() {
      try {
        const resposta = await fetch("https://restcountries.com/v3.1/all");
        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os países");
        }
        const dados = await resposta.json();
        setPaises(dados);
      } catch (erro) {
        setErro(erro.message);
      } finally {
        setLoading(false);
      }
    }
    buscarPaises();
  }, []);

  const guardarPais = (pais) => {
    const paisSelecionado = {
      nome: pais.target.value,
      imagem: paises.find((paisImg) => paisImg.name.common === pais.target.value).flags.png};
    setPaisSelecionado(paisSelecionado);
    localStorage.setItem("paisSelecionado", JSON.stringify(paisSelecionado));
  };

  if (loading) return <h2>Carregando usuários...</h2>;
  if (erro) return <h2>Erro: {erro}</h2>;

  return (
    <>
      <h3> Selecione seu país: </h3>
      <br />

      <select value={paisSelecionado.nome} onChange={guardarPais}>
        <option>Selecione um país</option>

        {paises.map((pais) => (
          <option>{pais.name.common}</option>
        ))}
      </select>

      {paisSelecionado && (
        <section>
          <p> <br /> Pais selecionado: <strong> {paisSelecionado.nome} </strong> </p>
          <br />
          <img src={paisSelecionado.imagem} alt={paisSelecionado.nome} />
        </section>
      )}
    </>
  );
};

export default PaisesAPI;
