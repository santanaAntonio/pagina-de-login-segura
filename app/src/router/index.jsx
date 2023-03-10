import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./private-route.component";
import { LoginScreen } from "../ui/screens";
import { MeuPerfilScreen } from "../ui/screens/meu-perfil/meu-perfil.screen";
import { CadastroScreen } from "../ui/screens/cadastro/cadastro.screen";
import { EditarPerfilScreen } from "../ui/screens/editar-perfil/editar-perfil.screen";
import { ResetarSenhaScreen } from "../ui/screens/resetar-senha/resetar-senha.screen";
import { SolicitarRecuperacaoSenhaScreen } from "../ui/screens/solicitar-recuperacao-senha/solicitar-recuperacao-senha.screen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/cadastro",
    element: <CadastroScreen />,
  },
  {
    path: "/solicitar-recuperacao-senha",
    element: <SolicitarRecuperacaoSenhaScreen />,
  },
  {
    path: "/recuperar-senha/:token",
    element: <ResetarSenhaScreen />,
  },
  {
    path: "/meu-perfil",
    element: <PrivateRoute Screen={MeuPerfilScreen} />,
  },
  {
    path: "/editar-perfil",
    element: <PrivateRoute Screen={EditarPerfilScreen} />,
  },
]);
