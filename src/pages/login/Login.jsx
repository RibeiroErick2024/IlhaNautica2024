
import React, { useState } from "react";
import FormLogin from "../../components/FormLogin";
import FormCadastro from "../../components/FormCadastro";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };


  return (
    <div className="imgFundo">
      
      {isLogin ? (
        <FormLogin onToggleForm={toggleForm} />
      ) : (
        <FormCadastro />
      )}

  

    </div>
  );
};

export default Login;
