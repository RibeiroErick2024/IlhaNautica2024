import { useState } from "react";
import "./Login.css";
import { Eye, EyeOff, Mail } from "lucide-react";


const RecuperacaoSenha = () => {

  const [email, setEmail] = useState("");


//Envio do formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { Email, senha });
  };



  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar senha</h1>


        <div className="input-field">
          <input
            type="text"
            placeholder="Digite o seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Mail size={22} className="icon"/>
        </div>


      



       


        <button type="submit">Enviar</button>
        <div className="signup-link">
          <p>
             <a href="/">Realizar login</a>
          </p>
        </div>
        
      </form>
    </div>
  );
};

export default RecuperacaoSenha;
