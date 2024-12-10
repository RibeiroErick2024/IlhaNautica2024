import { useState } from "react";
import "./index.css";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

const FormLogin = ({ onToggleForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tentativaLogin, setTentativaLogin] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const [mensagem, setMensagem] = useState("");
  const [severidade, setSeveridade] = useState("info");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data) => {
    setTentativaLogin(true);
    await handleLogin(data);
  };
  async function handleLogin(data) {
    const loginData = {
      email: data.email,
      senha: data.senha,
    };
    try {
      console.log(loginData);
      const response = await api.post("auth/login", loginData);
      console.log("Login realizado com sucesso:", response);
      setSeveridade("success");
      setMensagem("Logado.");
      setOpen(true);
      login(response.data.token, response.data.idUsuario);
      navigate("/home");
    } catch (error) {
      console.log("Erro de login:", error.response.data);
      setSeveridade("error");
      setMensagem("Ocorreu um erro ao logar. Tente novamente mais tarde");
      setOpen(true);

      if (error.status === 401) {
        console.log("OI");
        if (error.response.data.includes("Email")) {
          setError("email", { type: "manual", message: "Email inválido." });
        } else if (error.response.data.includes("Senha")) {
          setError("senha", { type: "manual", message: "Senha incorreta." });
        }
      } else {
        console.error("Erro do servidor:", error);
      }
    }
  }

  const toggleSenhaVisibilidade = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleRegistrarClick = (event) => {
    event.preventDefault();
    // onToggleForm();
    navigate("/cadastro");
  };

  const handleRecuperacaoClick = (event) => {
    event.preventDefault();
    navigate("/recuperacaoSenha");
  };

  // Função para limpar mensagens de erro ao digitar
  const handleInputChange = (field) => {
    clearErrors(field);
  };

  return (
    <div className="container">
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message=""
      >
        <Alert onClose={handleClose} severity={severidade} variant="filled" sx={{ width: "100%" }}>
          {mensagem}
        </Alert>
      </Snackbar>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            {...register("email", { required: "O e-mail é obrigatório." })}
            onChange={() => handleInputChange("email")}
          />
          <Mail size={22} className="icon" />
          {tentativaLogin && errors.email && (
            <p style={{ color: "red", marginLeft: "10px", marginTop: "10px" }}>{errors.email.message}</p>
          )}
        </div>

        <div className="input-field" style={{ position: "relative" }}>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            {...register("senha", { required: "A senha é obrigatória." })}
            onChange={() => handleInputChange("senha")}
          />
          <div className="icon" onClick={toggleSenhaVisibilidade}>
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
          {tentativaLogin && errors.senha && (
            <p style={{ color: "red", marginLeft: "10px", marginTop: "10px" }}>{errors.senha.message}</p>
          )}
        </div>

        <div className="recall-forget">
          <a href="#" onClick={handleRecuperacaoClick}>
            Esqueceu sua senha?
          </a>
        </div>

        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta?{" "}
            <a href="#" onClick={handleRegistrarClick}>
              Registrar
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
