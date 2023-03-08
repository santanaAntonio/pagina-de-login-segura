import useGlobalUser from "../../context/user/user.context";
import useToastNotification from "../../hooks/useToastNotification";
import { axiosInstance } from "../_base/axiosInstance";


export function useLogin() {
  const { toastSuccess, toastError } = useToastNotification()
  async function login({ username, password }) {
    try {
      const response = await axiosInstance.post(
        "/login",
        {},
        {
          auth: {
            username,
            password,
          },
        }
      );
      toastSuccess(`Bem-vindo ${response.data.nomeCompleto}`)
      return response.data;
    } catch (erro) {
      toastError("Usuário ou senha incorretos");
    }

  }
  return { login };
}
