import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { Mail } from "lucide-react"; 

const RecuperacaoSenha = () => {
  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();
  const [mensagemSucesso, setMensagemSucesso] = useState(""); 
  const navigate = useNavigate(); 

  // Função para simular a validação do email
  const validarEmail = (email) => {
    const emailValido = "admin123@gmail.com"; 
    if (email !== emailValido) {
      setError("email", { type: "manual", message: "Email não encontrado." });
      setMensagemSucesso(""); 
    } else {
      console.log("Dados para recuperação de senha:", { email });
      setMensagemSucesso("Um e-mail de recuperação foi enviado para o seu endereço.");
      clearErrors(); 
    }
  };

  const onSubmit = (data) => {
    clearErrors('email'); 
    validarEmail(data.email);
  };

  // Função para navegar para a página de login
  const handleLoginClick = (event) => {
    event.preventDefault(); 
    navigate("/"); 
  };

  return (
    <div className="imgFundo">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Recuperar senha</h1>

          <div className="input-field">
            <input
              type="text"
              placeholder="Digite o seu email"
              {...register('email', { 
                required: "O e-mail é obrigatório." 
              })}
              onChange={() => clearErrors('email')} 
            />
            <Mail size={22} className="icon" />
            {errors.email && <p style={{ color: 'red', marginLeft: '10px', marginTop: '9px' }}>{errors.email.message}</p>}
          </div>

          <button type="submit">Enviar</button>

          {mensagemSucesso && <p style={{ color: 'green', marginLeft: '10px', marginTop: '8px', fontSize: '18px' }}>{mensagemSucesso}</p>} 

          <div className="signup-link">
            <p>
              <a href="#" onClick={handleLoginClick}>
                Realizar login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecuperacaoSenha;
