import React, { useState } from 'react';
import { Eye, EyeOff, Mail, User } from "lucide-react";


const Cadastro = () => {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Cadastro:", { nomeCompleto, email, senha, confirmarSenha });
  };

  //Controla visibilidade da senha
  const toggleSenhaVisibilidade = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>CADASTRAR</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome Completo"
            required
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <User size={22} className="icon"/>
        </div>
       
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <Mail size={22} className="icon"/>
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
               <div className="iconeSenha" onClick={toggleSenhaVisibilidade}>

                  {mostrarSenha ? (
                    <EyeOff size={22} />) : (<Eye size={22} />)
                  }
                </div>
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="ConfirmarSenha"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
               <div className="iconeSenha" onClick={toggleSenhaVisibilidade}>

                  {mostrarSenha ? (
                    <EyeOff size={22} />) : (<Eye size={22} />)
                  }
                </div>
        </div>

    
        
       
        <button type="submit">Cadastro</button>
        <div className="signup-link">
          <p>
          Já tem uma conta? <a href="/">Clique aqui</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
