
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Mail } from "lucide-react"; 





const RecuperacaoSenha = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados para recuperação de senha:", { email });
    
  };

  // Função para navegar para a página de login
  const handleLoginClick = (event) => {
    event.preventDefault(); 
    navigate("/"); 
  };

  return (

    <div className="imgFundo">

    

    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar senha</h1>

        <div className="input-field">
          <input
            type="email"
            placeholder="Digite o seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Mail size={22} className="icon" />
        </div>

        <button type="submit">Enviar</button>

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
