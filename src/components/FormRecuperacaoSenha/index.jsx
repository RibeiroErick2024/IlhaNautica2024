
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import { Mail } from "lucide-react"; // Ícone de e-mail



const RecuperacaoSenha = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  // Envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados para recuperação de senha:", { email });
    // Aqui você pode adicionar a lógica para enviar a solicitação de recuperação de senha
  };

  // Função para navegar para a página de login
  const handleLoginClick = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    navigate("/"); // Navega para a página de login
  };

  return (
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
            {/* Usando a função handleLoginClick para navegação programática */}
            <a href="#" onClick={handleLoginClick}>
              Realizar login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RecuperacaoSenha;
