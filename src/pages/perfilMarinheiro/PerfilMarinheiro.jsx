import { useContext, useEffect, useState } from "react";

import "./PerfilMarinheiro.css";
import FormPerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import { useContextGlobal } from "../../contexts/GlobalContext";

function PerfilMarinheiro() {
  const {editando, setEditando} = useContextGlobal();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setEditando(true); 
  }, [setEditando]);
 
  return (
    <div className="containerPerfil" >
      
      {/* Contêiner de Ícones */}
      <div className="icones-marinheiro">
        <button type="button" className="btn-icone">
          <img className="icon" src="./images/perfil.png" alt="Ícone Marinheiro" />
        </button>
        <button type="button" className="btn-icone">
          <img className="icon" src="./images/capitao.png" alt="Ícone Marinheiro" />
        </button>
      </div>

      {/* Contêiner de Inputs */}

     {/* <button type="submit" className="btn-salvar-marinheiro">Salvar</button> */}
     <div className="perfilMarinheiro">
       
     <FormPerfilMarinheiro />
     
      </div> 
    </div>
  );
}

export default PerfilMarinheiro;
