import { useState } from "react";
import "./index.css";
import { Eye, EyeOff, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 

const FormLogin = ({ onToggleForm }) => {
  const { register, handleSubmit, formState: { errors }, setError, clearErrors } = useForm();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tentativaLogin, setTentativaLogin] = useState(false); 
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setTentativaLogin(true); 

    // Lógica de validação separada
    if (data.email !== "admin") {
      setError("email", { type: "manual", message: "Usuário inválido." });
    }

    if (data.senha !== "123") {
      setError("senha", { type: "manual", message: "Senha incorreta." });
    }

    // Se ambos estiverem corretos, navega para a página home
    if (data.email === "admin" && data.senha === "123") {
      console.log("Sucesso:", data);
      navigate("/home"); 
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Entrar</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            {...register('email', { required: "O e-mail é obrigatório." })}
            onChange={() => handleInputChange('email')} 
          />
          <Mail size={22} className="icon" />
          {tentativaLogin && errors.email && <p style={{ color: 'red', marginLeft: '10px', marginTop: '10px' }}>{errors.email.message}</p>}
        </div>

        <div className="input-field" style={{ position: "relative" }}>
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            {...register('senha', { required: "A senha é obrigatória." })}
            onChange={() => handleInputChange('senha')} 
          />
          <div className="iconeSenha" onClick={toggleSenhaVisibilidade}>
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
          {tentativaLogin && errors.senha && <p style={{ color: 'red', marginLeft: '10px', marginTop: '10px' }}>{errors.senha.message}</p>}
        </div>

        <div className="recall-forget">
          <a href="#" onClick={handleRecuperacaoClick}>Esqueceu sua senha?</a>
        </div>

        <button type="submit">Login</button>
        <div className="signup-link">
          <p>Não tem uma conta? <a href="#" onClick={handleRegistrarClick}>Registrar</a></p>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
