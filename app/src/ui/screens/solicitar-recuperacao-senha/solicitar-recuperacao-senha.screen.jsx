import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSenha } from "../../../api/senha";
import "./index.css";

export function SolicitarRecuperacaoSenhaScreen() {
  const { solicitarRecuperacaoSenha } = useSenha();
  const [email, setEmail] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await solicitarRecuperacaoSenha(email);
  }

  return (
    <div>
      <h2>Esqueci minha senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="senha">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
}
