import logo from "../../../assets/img/orkut-logo.webp";


import "./index.css";
import Logout from "../logout/logout.component";
import { useNavigate } from "react-router-dom";

export function Header({ children }) {
  const navigate = useNavigate();
  return (
    <div className="screen-wrapper">
      <header className="header">
        <div className="logo">
          <img
            className="logo"
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <Logout />
      </header>
      {children}
    </div>
  );
}
