
import React, { useState } from "react";
import FormLogin from "/src/components/FormLogin/index.jsx";
import FormCadastro from "/src/components/FormCadastro/index.jsx";
import  "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
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
