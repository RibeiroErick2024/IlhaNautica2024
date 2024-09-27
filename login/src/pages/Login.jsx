import { useState } from "react";

import "./Login.css";

const Login = () => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSubmit = (event) => {
    
    event.preventDefault();

    
    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>

        <div className="recall-forget">
          {/* <label>
            <input type="checkbox" />
            Lembre de mim
          </label> */}
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registrar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;