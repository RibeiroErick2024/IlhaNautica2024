import { useState } from "react";

import "./CadastroEmbarcacoes.css"

function CadastroEmbarcacoes(){
 
  const [userfabricante, setUserFabricante] = useState("");
  const [usernomeembarcacao, setNomeEmbarcacao] = useState("");
  const [usercomprimento, setComprimento] = useState("");
  const [usernumerocabines, setNumerodeCabines] = useState("");
  const [usermodelo, setModulos] = useState("");
  const [userfabricacao, setAnoFabricacao] = useState("");
  const [usercapacidade, setCapacidade] = useState("");
  const [userpotencia, setPotencial] = useState("");
  const handleSubmit = (event) => {
    
    event.preventDefault();

    
    
  };

  return (
    <div className="container-cadastro-embarcacoes">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro Embarcação</h1>
        <div className="form-section">
        <div className="input-field">
          <input
            type="text"
            placeholder="Fabricante"
            required
            value={userfabricante}
            onChange={(e) => setUserFabricante(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome da Embarcação"
            required
            value={usernomeembarcacao}
            onChange={(e) => setNomeEmbarcacao(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Comprimento"
            required
            value={usercomprimento}
            onChange={(e) => setComprimento(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Número de Cabines"
            required
            value={usernumerocabines}
            onChange={(e) => setNumerodeCabines(e.target.value)}
          />
          
        </div>
        </div>

        <div className="form-section">
        <div className="input-field">
          <input
            type="text"
            placeholder="Modelo"
            required
            value={usermodelo}
            onChange={(e) => setModulos(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Ano de Fabricação"
            required
            value={userfabricacao}
            onChange={(e) => setAnoFabricacao(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Capacidade"
            required
            value={usercapacidade}
            onChange={(e) => setCapacidade(e.target.value)}
          />
          
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Potencia HP"
            required
            value={userpotencia}
            onChange={(e) => setPotencial(e.target.value)}
          />
          
        </div>
        </div>
        

       
        
      </form>
    </div>
  );
};

export default CadastroEmbarcacoes;