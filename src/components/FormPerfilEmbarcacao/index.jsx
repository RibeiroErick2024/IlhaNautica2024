import { useState } from "react";

import "../FormCadastroEmbarcacao/index.css";

function PerfilEmbarcacao() {
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
    <div>
      <div className="container-cadastro-embarcacoes">
        <h1 className="titulo-embarcacao">Perfil Embarcação</h1>
        <form onSubmit={handleSubmit} className="form-section-embarcacoes">
          <div className="input-field">
            <input
              type="text"
              placeholder="Nome"
              required
              value={usernome}
              onChange={(e) => setUserNome(e.target.value)}
            />

            <input
              type="text"
              placeholder="Modelo"
              required
              value={usermodelo}
              onChange={(e) => setUserModelo(e.target.value)}
            />

            <input
              type="text"
              placeholder="Ano"
              required
              value={userano}
              onChange={(e) => setUserAno(e.target.value)}
            />

            <input
              type="text"
              placeholder="Capacidade"
              required
              value={usercapacidade}
              onChange={(e) => setUserCapacidade(e.target.value)}
            />

            <input
              type="text"
              placeholder="Animais Permitidos"
              required
              value={useranimaispermitidos}
              onChange={(e) => setUserAnimaisPermitidos(e.target.value)}
            />

            <input
              type="text"
              placeholder="Localização"
              required
              value={userlocalizacao}
              onChange={(e) => setUserLocallizacao(e.target.value)}
            />

            <input
              type="text"
              placeholder="Roteiros"
              required
              value={userroteiros}
              onChange={(e) => setUserRoteiros(e.target.value)}
            />
          </div>
        </form>

        <div>
          <button className="btn-salvar-embarcacao">Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default PerfilEmbarcacao;
