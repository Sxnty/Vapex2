import React, {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io5";
import "../styles/login.scss";
function Login() {
  const { loginWithGoogle, userLoged } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <section className="login">
      <form className="login__form">
        <h2>Iniciar sesion</h2>
        <span onClick={handleLogin}>
          <IoLogoGoogle /> Iniciar sesion con google
        </span>
      </form>
    </section>
  );
}

export default Login;
