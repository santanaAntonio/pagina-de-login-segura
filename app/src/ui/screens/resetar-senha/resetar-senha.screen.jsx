import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSenha } from "../../../api/senha";
import "./index.css";

export function ResetarSenhaScreen() {
  const { token } = useParams();
console.log(token);

  const {atualizarSenha} = useSenha();

  const [senha, setsenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (senha != confirmarSenha) {
      alert("As senhas não estão iguais!");
    } else {
      const response = await atualizarSenha(token, senha);
    }
  }

  return (
    <div>
      <h2>Redefinir senha</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="senha">Nova senha:</label>
          <input
            type="senha"
            id="senha"
            value={senha}
            onChange={(event) => setsenha(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-senha">Confirme a nova senha:</label>
          <input
            type="senha"
            id="confirm-senha"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
