import useGlobalUser from "../context/user/user.context";
import useToastNotification from "../hooks/useToastNotification";
import { axiosInstance } from "./_base/axiosInstance";

export function useSenha() {
  const { toastSuccess, toastError } = useToastNotification();
  async function atualizarSenha(token, novaSenha) {
    try {
      const response = await axiosInstance.post(`/senha/recuperar-senha`, {
        token: token,
        novaSenha: novaSenha,
      });
      toastSuccess("Senha alterada com sucesso!")
      return response.data;
    } catch (erro) {
      toastError(erro);
    }
  }
  async function solicitarRecuperacaoSenha(email) {
    try {
      const response = await axiosInstance.post(`/senha/esqueci-senha`, {
        email: email,
      });
      toastSuccess("Link enviado para seu email!")
      return response.data;
    } catch (erro) {
      toastError(erro);
    }
  }

  return {
    atualizarSenha,
    solicitarRecuperacaoSenha
  };
}
