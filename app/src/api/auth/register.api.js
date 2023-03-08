import useToastNotification from "../../hooks/useToastNotification";
import { axiosInstance } from "../_base/axiosInstance";

export async function register(nomeCompleto, email, telefone, senha, imagemPerfil,permissao) {
  const { toastSuccess, toastError } = useToastNotification()
  try {
    const response = await axiosInstance.post("/usuarios", {
      nomeCompleto: nomeCompleto,
      email: email,
      telefone: telefone,
      senha: senha,
      imagemPerfil: imagemPerfil,
      permissao:permissao,
    });
    toastSuccess("Cadastrado com Sucesso!")
    return response.data
  } catch (erro) {
    toastError(erro)
  }
}