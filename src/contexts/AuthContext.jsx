import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [idUsuario, setIdUsuario] = useState(localStorage.getItem("idUsuario"));
  const [logado, setLogado] = useState(localStorage.getItem("logado"));

  const login = (jwtToken, id) => {
    setToken(jwtToken);
    setIdUsuario(id);
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("idUsuario", id);
    localStorage.setItem("logado", true)
    setLogado(true)
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("idUsuario");
    localStorage.remove("logado", false)
    setLogado(false)
  };

  const isAuthenticated = () => !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated, idUsuario, logado}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
