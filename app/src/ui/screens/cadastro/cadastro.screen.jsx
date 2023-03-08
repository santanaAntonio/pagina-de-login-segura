import "./index.css";
import { useEffect, useState } from "react";
import CadastroForm from "../../components/cadastro-form/cadastro-form.component";

export function CadastroScreen() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="cadastro-screen">
      <CadastroForm erro={errorMessage} />
    </div>
  );
}
