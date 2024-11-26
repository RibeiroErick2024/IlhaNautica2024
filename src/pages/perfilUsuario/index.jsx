import { useContext, useEffect, useState } from "react";

import "./index.css";
import CompletarCadastro from "../../components/FormCompletarCadastro"
import { useContextGlobal } from "../../contexts/GlobalContext";

function PerfilUsuario() {
  const { editando, setEditando } = useContextGlobal();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setEditando(true);
  }, [setEditando]);
  useEffect(() => {

  })
  return (
    <div className="containerPerfil" >

      {/* Contêiner de Ícones */}
      <div className="icones-marinheiro">
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/perfil.png" alt="Ícone Marinheiro" />
        </button>
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/embarcacao.png" alt="Ícone Marinheiro" />
         
        </button>
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/notificacao.png" alt="Ícone Marinheiro" />
        </button>
      </div>

      {/* Contêiner de Inputs */}

      {/* <button type="submit" className="btn-salvar-marinheiro">Salvar</button> */}
      <div className="perfilMarinheiro">

        <CompletarCadastro />

      </div>
    </div>
  );
}

export default PerfilUsuario;
