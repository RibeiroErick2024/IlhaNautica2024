import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api, { axiosapi } from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import "./index.css";

const FormCadastro = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Formulário enviado com sucesso!", data);
    await handleCadastro(data);
    // navigate("/home");
  };
  async function handleCadastro(data) {
    const usuario = {
      nomeCompleto: data.nomeCompleto,
      email: data.email,
      senha: data.senha
    }
    try {
      console.log("Oi")
      const response = await axiosapi.post(`auth/cadastro`, usuario);
      console.log("Console", response);
      if(response){
        console.log("Ooooi")
        navigate("/login")
      }
    } catch (error) {
      console.log("Console", error.response.data);
    }
  }

  // Função para limpar os erros ao digitar
  const handleInputChange = (fieldName) => {
    clearErrors(fieldName);
  };

  return (
    <div className="imgFundo">
    <div className="container">
      <h1>CADASTRAR</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome Completo"
            {...register("nomeCompleto", {
              required: "O nome completo é obrigatório.",
              minLength: {
                value: 6,
                message: "O nome deve ter pelo menos 6 caracteres.",
              },
            })}
            onChange={() => handleInputChange("nomeCompleto")}
          />
          <User size={22} className="icon" />
          {errors.nomeCompleto && (
            <p style={{ color: "red", marginLeft: "10px", marginTop: "8px" }}>
              {errors.nomeCompleto.message}
            </p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            {...register("email", {
              required: "O e-mail é obrigatório.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Insira um e-mail válido.",
              },
            })}
            onChange={() => handleInputChange("email")}
          />
          <Mail size={22} className="icon" />
          {errors.email && (
            <p style={{ color: "red", marginLeft: "10px", marginTop: "8px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="input-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            {...register("senha", {
              required: "A senha é obrigatória.",
              minLength: {
                value: 8,
                message: "A senha deve ter pelo menos 8 caracteres.",
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "A senha deve incluir letras, números e caracteres especiais.",
              },
            })}
            onChange={() => handleInputChange("senha")}
          />
          <div
            className="icon"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
          {errors.senha && (
            <p style={{ color: "red", marginLeft: "10px", marginTop: "8px" }}>
              {errors.senha.message}
            </p>
          )}
        </div>

        <div className="input-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Confirmar Senha"
            {...register("confirmarSenha", {
              required: "A confirmação da senha é obrigatória.",
              validate: (value) =>
                value === watch("senha") || "As senhas não coincidem.",
            })}
            onChange={() => handleInputChange("confirmarSenha")}
          />
          <div
            className="icon"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
          {errors.confirmarSenha && (
            <p style={{ color: "red", marginLeft: "10px", marginTop: "8px" }}>
              {errors.confirmarSenha.message}
            </p>
          )}
        </div>

        <button type="submit">Cadastro</button>

        <div className="signup-link">
          <p>
            Já tem uma conta? <a href="/login">Clique aqui</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormCadastro;
