import { useState } from "react";

import "../FormCadastroEmbarcacao/index.css";

function PerfilMarinheiro() {
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
    <div>
      <div className="container-cadastro-embarcacoes">
        <h1 className="titulo-embarcacao">Perfil Marinheiro</h1>
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
              type="date"
              placeholder="Data de Nascimento"
              required
              value={useraniversario}
              onChange={(e) => setUserAniversario(e.target.value)}
            />

            <input
              type="text"
              placeholder="Cpf"
              required
              value={usercpf}
              onChange={(e) => setUserCPF(e.target.value)}
            />

            <input
              type="text"
              placeholder="Genero"
              required
              value={usergenero}
              onChange={(e) => setUserGenero(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              required
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Telefone"
              required
              value={usertelefone}
              onChange={(e) => setUserTelefone(e.target.value)}
            />

            <input
              type="text"
              placeholder="Posto"
              required
              value={userposto}
              onChange={(e) => setUserPosto(e.target.value)}
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

export default PerfilMarinheiro;
