import { useState } from "react";
import "./index.css";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";
import { TextFieldInput, ContainerTextFieldInput } from "./styles.jsx"

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
      const response = await api.post("/auth/login", loginData);

      console.log("Login realizado com sucesso:", response);
      login(response.data.token, response.data.idUsuario);
      navigate("/home");
    } catch (error) {
      console.log("Erro de login:", error.response.data);

        if (error.status === 401) {
          console.log("OI")
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
    onToggleForm();
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
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerTextFieldInput> 
          <TextFieldInput
            fullWidth
            type="email"
            label="E-mail"
            variant="outlined"
            margin="dense"
            focused={true}
            {...register("email", {
              required: "O e-mail é obrigatório.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "E-mail inválido",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            onChange={() => handleInputChange("email")}
            InputProps={{
              endAdornment: <Mail size={26} className="icon" />, 
            }}
          />
     
           <TextFieldInput
            fullWidth
            type={mostrarSenha ? "text" : "password"}
            label="Senha"
            variant="outlined"
            margin="dense"
            focused={true}
            {...register("senha", { required: "A senha é obrigatória." })}
            error={!!errors.senha}
            helperText={errors.senha?.message}
            onChange={() => handleInputChange("senha")}
            InputProps={{
              endAdornment: (
                <div className="iconeSenha" onClick={toggleSenhaVisibilidade}>
                  {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
                </div>
              ),
            }}
          />
       </ContainerTextFieldInput>

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
