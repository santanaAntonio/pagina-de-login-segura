import "./index.css";
import { Header } from "../../components/header/header.component";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePerfil } from "../../../api/perfil";

export function UsuarioScreen() {
  const params = useParams();
  const { id } = params;
  const [perfilAtual, setPerfilAtual] = useState([]);
  const navigate = useNavigate();
  const { buscarPerfilPorId } = usePerfil();
  
   useEffect(() => {
     async function carregarPerfil() {
       const response = await buscarPerfilPorId(id);
      setPerfilAtual(response);
     }
     carregarPerfil();
   }, []);

  return (
    <>
      <Header>
        <div className="meu-perfil">
          <section className="usuario">
            <img
              className="foto-usuario"
              src={perfilAtual?.imagemPerfil}
              alt={perfilAtual?.nomeCompleto}
            />
            <h3>{perfilAtual?.nomeCompleto}</h3>
          </section>
          <div></div>
        </div>
      </Header> 
    </>
  );
}
