import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useGlobalUser from "../../../context/user/user.context";
import { toast } from "react-toastify";
import LoginForm from "../../components/login-form/login-form.component";
import { useLogin } from "../../../api/auth/login.api";

export function LoginScreen() {
  const {login} = useLogin();
  const navigate = useNavigate();
  const [user, setUser] = useGlobalUser();
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(formFields) {
    try {
      const response = await login({
        username: formFields.username.value,
        password: formFields.password.value,
      });

      setUser(response);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/meu-perfil");
    }
  }, [user, navigate]);

  return (
    <div className="login-screen">
      <LoginForm onSubmit={onSubmit} error={errorMessage} />
    </div>
  );
}
