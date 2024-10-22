import React, { useState } from 'react';
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormCadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [error, setError] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const enviar = (event) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      setError('As senhas são diferentes.');
      return;
    }

    setError('');
    console.log('Formulário enviado com sucesso!', { nomeCompleto, email, senha });
    navigate("/home");   // Redireciona para a página "home" após o cadastro
  };

  // Controla a visibilidade da senha
  const visibilidadeSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="container">
      <form onSubmit={enviar}>
        <h1>CADASTRAR</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="Nome Completo"
            required
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <User size={22} className="icon" />
        </div>

        <div className="input-field">
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Mail size={22} className="icon" />
        </div>

        <div className="input-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <div className="iconeSenha" onClick={visibilidadeSenha}>
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
        </div>

        <div className="input-field">
          <input
            type={mostrarSenha ? "text" : "password"}
            placeholder="Confirmar Senha"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <div className="iconeSenha" onClick={visibilidadeSenha}>
            {mostrarSenha ? <EyeOff size={22} /> : <Eye size={22} />}
          </div>
        </div>

        {/* exibe msg de erro */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

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
