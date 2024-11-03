import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormCadastro = () => {
  const { register, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Formulário enviado com sucesso!', data);
    navigate("/home"); 
  };

  // Função para limpar os erros ao digitar
  const handleInputChange = (fieldName) => {
    clearErrors(fieldName);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>CADASTRAR</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome Completo"
            {...register('nomeCompleto', { 
              required: "O nome completo é obrigatório.", 
              minLength: { value: 6, message: "O nome deve ter pelo menos 6 caracteres." } 
            })}
            onChange={() => handleInputChange('nomeCompleto')} 
          />
          <User size={22} className="icon" />
          {errors.nomeCompleto && <p style={{ color: 'red', marginLeft: '10px', marginTop: '8px' }}>{errors.nomeCompleto.message}</p>}
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            {...register('email', { 
              required: "O e-mail é obrigatório.", 
              pattern: { 
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                message: "Insira um e-mail válido." 
              } 
            })}
            onChange={() => handleInputChange('email')} 
          />
          <Mail size={22} className="icon" />
          {errors.email && <p style={{ color: 'red', marginLeft: '10px', marginTop: '8px' }}>{errors.email.message}</p>}
        </div>

        <div className="input-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            {...register('senha', { 
              required: "A senha é obrigatória.", 
              minLength: { value: 8, message: "A senha deve ter pelo menos 8 caracteres." }, 
              pattern: { 
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                message: "A senha deve incluir letras, números e caracteres especiais." 
              } 
            })}
            onChange={() => handleInputChange('senha')} 
          />
          <div className="iconeSenha" onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
          {errors.senha && <p style={{ color: 'red', marginLeft: '10px', marginTop: '8px' }}>{errors.senha.message}</p>}
        </div>

        <div className="input-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Confirmar Senha"
            {...register('confirmarSenha', {
              required: "A confirmação da senha é obrigatória.",
              validate: value => value === watch('senha') || "As senhas não coincidem."
            })}
            onChange={() => handleInputChange('confirmarSenha')} 
          />
          <div className="iconeSenha" onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
          {errors.confirmarSenha && <p style={{ color: 'red', marginLeft: '10px', marginTop: '8px' }}>{errors.confirmarSenha.message}</p>}
        </div>

        <button type="submit">Cadastro</button>

        <div className="signup-link">
          <p>
            Já tem uma conta? <a href="/">Clique aqui</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormCadastro;