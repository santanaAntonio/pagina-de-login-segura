import "./index.css";
import { Header } from "../../components/header/header.component";
import useGlobalUser from "../../../context/user/user.context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function MeuPerfilScreen() {
  const [user, setUser] = useGlobalUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);


  function editarPerfil(){
    navigate("/editar-perfil")
  }

  return (
    <>
      {user ? (
        <Header>
          <div className="meu-perfil">
            <section className="meu-perfil-usuario">
              <img
                className="foto-usuario"
                src={user.imagemPerfil}
                alt={user.nomeCompleto}
              />
              <h3>{user.nomeCompleto}</h3>
              {user.telefone ? <i>Telefone :{user.telefone} </i> : null}
              <h4>{user.email}</h4>
              <button onClick={editarPerfil}>Editar Perfil</button>
            </section>
            <div>
            </div>
            <div>
            </div>
          </div>
        </Header>
      ) : null}
    </>
  );
}
