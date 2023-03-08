import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./private-route.component";
import { LoginScreen } from "../ui/screens";
import { MeuPerfilScreen } from "../ui/screens/meu-perfil/meu-perfil.screen";
import { CadastroScreen } from "../ui/screens/cadastro/cadastro.screen";
import { EditarPerfilScreen } from "../ui/screens/editar-perfil/editar-perfil.screen";

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
    path: "/meu-perfil",
    element: <PrivateRoute Screen={MeuPerfilScreen} />,
  },
  {
    path: "/editar-perfil",
    element: <PrivateRoute Screen={EditarPerfilScreen} />,
  },
]);
