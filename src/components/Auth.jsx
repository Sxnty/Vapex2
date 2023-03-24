import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";
function Auth({ children }) {
  const { userLoged } = useContext(AuthContext);
  if (!userLoged) {
    console.log("no logeado, redireccionando a login");
    toast.error("Necesitas estas logeado para usar esta funcionalidad.");
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default Auth;
