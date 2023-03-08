import useGlobalUser from "../context/user/user.context";
import useToastNotification from "../hooks/useToastNotification";
import { axiosInstance } from "./_base/axiosInstance";



export function usePerfil() {
  
  const [user, setUser] = useGlobalUser();
  const { toastSuccess, toastError } = useToastNotification()



  async function buscarPerfilPorId(id) {
    try {
      const response = await axiosInstance.get(`/perfil/${id}`);
      return response.data;
    } catch (erro) {
    toastError(erro);
    }
  }

  async function atualizarPerfil(imagemPerfil,nomeCompleto,telefone) {
    try {
      const response = await axiosInstance.post(`/perfil/${user.id}/atualizar`,
      {
        imagemPerfil:imagemPerfil,
        nomeCompleto:nomeCompleto,
        telefone:telefone
      });
    toastSuccess("Atualizando Perfil")
      return response.data;
    } catch (erro) {
      toastError(erro);
    }
  }

  
  return {
    buscarPerfilPorId,
    atualizarPerfil
  };
}
