import "./index.css";
import { Header } from "../../components/header/header.component";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePerfil } from "../../../api/perfil";
import useGlobalUser from "../../../context/user/user.context";


export function EditarPerfilScreen() {
  const [user, setUser] = useGlobalUser();

  const [perfil, setPerfil] = useState({});
  const { buscarPerfilPorId, atualizarPerfil } = usePerfil();
  const navigate = useNavigate();

  const [imagemPerfil, setImagemPerfil] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");

  useEffect(() => {
    async function carregarPerfil() {
      const response = await buscarPerfilPorId(user.id);
      setPerfil(response);
      setImagemPerfil(response.imagemPerfil);
      setTelefone(response.telefone);
      setNomeCompleto(response.nomeCompleto);
    }
    carregarPerfil();
  }, []);

  async function  handleEditarPerfil(event) {
    event.preventDefault();
    const perfilAtualizado =await atualizarPerfil(imagemPerfil,nomeCompleto,telefone);
     //await buscarPerfilPorId(user.id);
    setPerfil(perfilAtualizado);
    setUser(perfilAtualizado);
  };

  return (
    <>
      <Header>
        <form onSubmit={handleEditarPerfil}>
          <div className="perfil-edicao">
            <section className="usuario-edicao">
              <img
                className="foto-usuario"
                src={perfil.imagemPerfil}
                alt={perfil.nomeCompleto}
              />
              <input
                type="text"
                value={imagemPerfil}
                placeholder="Url Imagem Perfil"
                onChange={(event) => setImagemPerfil(event.target.value)}
              />
              <input
                type="text"
                value={nomeCompleto}  
                onChange={(event) => setNomeCompleto(event.target.value)}
              />
              <input
                type="text"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
              />
              <button type="submit">Salvar</button>
            </section>
          </div>
        </form>
      </Header>
    </>
  );
}
