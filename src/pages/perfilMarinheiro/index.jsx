import { useState } from "react";

import "./index.css";

const PerfilMarinheiro = () => {
    const [usernome, setUserNome] = useState("");
    const [useraniversario, setUserAniversario] = useState("");
    const [usercpf, setUserCPF] = useState("");
    const [usergenero, setUserGenero] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [usertelefone, setUserTelefone] = useState("");
    const [userposto, setUserPosto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
  <div className="container-marinheiro">
  {/* Contêiner de Ícones */}
  <div className="icones-marinheiro">
    <button type="button" className="btn-icone">
      <img
        className="icon-svg"
        src="./images/perfil.png"
        alt="Ícone Marinheiro"
      />
    </button>
    <button type="button" className="btn-icone">
      <img
        className="icon-svg"
        src="./images/capitao.png"
        alt="Ícone Marinheiro"
      />
    </button>
  </div>

  {/* Contêiner de Inputs */}
  <div className="inputs-marinheiro">
  <form onSubmit={handleSubmit}>
   
   <div className="teste">
    <h1 className="titulo-marinheiro">Marinheiro</h1>

   </div>

    {/* Primeira linha de inputs */}
    <div className="form-section-marinheiro">
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="Nome"
          required
          value={usernome}
          onChange={(e) => setUserNome(e.target.value)}
        />
      </div>
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="aniversario"
          required
          value={useraniversario}
          onChange={(e) => setUserAniversario(e.target.value)}
        />
      </div>
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="CPF"
          required
          value={usercpf}
          onChange={(e) => setUserCPF(e.target.value)}
        />
      </div>
    </div>

    {/* Segunda linha de inputs */}
    <div className="form-section-marinheiro">
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="Genero"
          required
          value={usergenero}
          onChange={(e) => setUserGenero(e.target.value)}
        />
      </div>
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="Animais Permitidos"
          required
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="Telefone"
          required
          value={usertelefone}
          onChange={(e) => setUserTelefone(e.target.value)}
        />
      </div>
    </div>

    {/* Terceira linha de inputs */}
    <div className="form-section-marinheiro">
      <div className="input-marinheiro">
        <input
          type="text"
          placeholder="Posto"
          required
          value={userposto}
          onChange={(e) => setUserPosto(e.target.value)}
        />
      </div>
    </div>
  </form>

  <div>
    <button className="btn-salvar-marinheiro">Salvar</button>
  </div>
</div>

</div>

      
          
  
  
   
          
  
  );
};

export default PerfilMarinheiro;
