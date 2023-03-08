import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalUser from "../../../context/user/user.context";
import { register } from "../../../api/auth/register.api";
import "./index.css";

export default function CadastroForm({ erro }) {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, settelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [imagemPerfil, setImagemPerfil] = useState("");
  const [permissao, setPermissao] = useState("");
  const navigate = useNavigate();

  function voltarLogin() {
    navigate("/");
  }

  async function cadastrar() {
    const response = await register(  
      nomeCompleto,
      email,
      telefone,
      senha,
      imagemPerfil,
      permissao
    );

    function handleChange (event) {
      setPermissao(event.target.value);
    };

    if (response.id) {
      alert("Usuário Criado com Sucesso");
    }
  }

  return (
    <form className="tela-registro" onSubmit={cadastrar}>
      <h2>Cadastro</h2>
      <label htmlFor="nomeCompleto" className="input">
        Nome Completo:{" "}
      </label>
      <input
        id="nomeCompleto"
        type="text"
        value={nomeCompleto}
        onChange={(e) => setNomeCompleto(e.target.value)}
      />
      <label htmlFor="email" className="input">
        Email:{" "}
      </label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="telefone" className="input">
        telefone:{" "}
      </label>
      <input
        id="telefone"
        type="text"
        value={telefone}
        onChange={(e) => settelefone(e.target.value)}
      />
  
      <label htmlFor="imagemPerfil" className="input">
        Link Imagem Perfil:{" "}
      </label>
      <input
        id="imagemPerfil"
        type="text"
        value={imagemPerfil}
        onChange={(e) => setImagemPerfil(e.target.value)}
      />
      <label htmlFor="senha">Senha: </label>
      <input
        id="senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <label htmlFor="permissao">Permissão: </label>
      <select
        name="permissao"
        defaultValue={permissao}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option>
      </select>
      <br />
      <button onClick={cadastrar} type="submit">Cadastrar</button>
      <button onClick={voltarLogin}>Voltar</button>
    </form>
  );
}
