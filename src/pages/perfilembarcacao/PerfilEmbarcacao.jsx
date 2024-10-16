import { useState } from "react";

import "./PerfilEmbarcacao.css"

const PerfilEmbarcacao = () => {
 
  const [usernome, setUserNome] = useState("");
  const [usermodelo, setUserModelo] = useState("");
  const [userano, setUserAno] = useState("");
  const [usercapacidade, setUserCapacidade] = useState("");
  const [useranimaispermitidos, setUserAnimaisPermitidos] = useState("");
  const [userlocalizacao, setUserLocallizacao] = useState("");
  const [userroteiros, setUserRoteiros] = useState("");
  const handleSubmit = (event) => {
    
    event.preventDefault();

    
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Perfil Embarcação</h1>
        <div className="form-section">
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome"
            required
            value={usernome}
            onChange={(e) => setUserNome(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Modelo"
            required
            value={usermodelo}
            onChange={(e) => setUserModelo(e.target.value)}
          />
          
        </div>
       
        <div className="input-field">
          <input
            type="text"
            placeholder="Ano"
            required
            value={userano}
            onChange={(e) => setUserAno(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Capacidade"
            required
            value={usercapacidade}
            onChange={(e) => setUserCapacidade(e.target.value)}
          />
          
        </div>
        </div>

        <div className="form-section">
      
        <div className="input-field">
          <input
            type="text"
            placeholder="Animais Permitidos"
            required
            value={useranimaispermitidos}
            onChange={(e) => setUserAnimaisPermitidos(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Localização"
            required
            value={userlocalizacao}
            onChange={(e) => setUserLocallizacao(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Roteiros"
            required
            value={userroteiros}
            onChange={(e) => setUserRoteiros(e.target.value)}
          />
          
        </div>
        </div>
        

       
        
      </form>
    </div>
  );
};

export default PerfilEmbarcacao;