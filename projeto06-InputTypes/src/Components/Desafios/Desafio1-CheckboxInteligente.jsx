/*
🎯 Desafio 1: Formulário de Checkbox Inteligente

📌 Objetivo: Mostrar campos diferentes com base na opção de pagamento.

🧩 Passo a Passo:
1️⃣ Crie um estado formaPagamento com valor inicial vazio ou "cartão"
2️⃣ Use <select> ou <input type="radio"> para permitir seleção da forma de pagamento
3️⃣ Renderize condicionalmente os campos com base no valor selecionado
*/

import "../Exercicios/Style/Desafio1-CSS.css";

import { useState } from "react";

function Pagamentos() {
  const [formaPagamento, setFormaPagamento] = useState("");

  return (
    <section>
      <h2>Formulário de Pagamento</h2>
      <select value={formaPagamento} onChange={(e) => setFormaPagamento(e.target.value)}>
        <option value=""> Selecione uma forma de pagamento </option>
        <option value="cartao"> Cartão </option>
        <option value="boleto"> Boleto </option>
        <option value="pix"> Pix </option>
      </select>

      {formaPagamento === "cartao" && (
        <section>
          <label>Número do cartão:</label>
          <br />
          <input type="text" placeholder="Número do cartão" maxLength="16" />
          <br />
          <label>Validade:</label>
          <br />
          <input type="month" />
          <br />
          <label>Código de segurança:</label>
          <br />
          <input type="text" placeholder="Código de segurança" maxLength="3" />
        </section>
      )}

      {formaPagamento === "boleto" && (
        <section>
          <br />
          <label> Leia o Código de Barras para pagar com Boleto </label>
          <br />
          <br />
          <img src="../../../public/barcode.png" alt="Boleto" />
        </section>
      )}

      {formaPagamento === "pix" && (
        <section>
          <br />
          <label> Leia o QR Code para pagar com Pix </label>
          <br />
          <br />
          <img src="../../../public/My_Video_Page.png" alt="QR Code Pix" />
        </section>
      )}
    </section>
  );
}

export default Pagamentos;
