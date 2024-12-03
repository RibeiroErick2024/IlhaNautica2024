import { useContext, useEffect, useState } from "react";

import "./index.css";
import CompletarCadastro, { FormUsuario } from "../../components/FormCompletarCadastro"
import { useContextGlobal } from "../../contexts/GlobalContext";
import HeaderPrincipal from "../../components/Header";
import { useNavigate } from "react-router-dom";

function PerfilUsuario() {
  const navigate = useNavigate()
  const { editando, setEditando, locador } = useContextGlobal();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    setEditando(true);
  }, []);
 
  function paraLocador(){
    setEditando(true);
    navigate("/cadastroLocador")
  }
  return (
    <>
    <HeaderPrincipal />
    <div className="containerPerfil" >

      {/* Contêiner de Ícones */}
      <div className="icones-marinheiro">
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/perfil.png" alt="Ícone Marinheiro" />
        </button>
        {locador && <button type="button" className="btn-icone" onClick={paraLocador}>
          <img className="icon-svg" src="./images/embarcacao.png" alt="Ícone Marinheiro" />
         
        </button>}
        <button type="button" className="btn-icone">
          <img className="icon-svg" src="./images/notificacao.png" alt="Ícone Marinheiro" />
        </button>
      </div>

      {/* Contêiner de Inputs */}

      {/* <button type="submit" className="btn-salvar-marinheiro">Salvar</button> */}
      <div className="perfilMarinheiro">

        <FormUsuario />

      </div>
    </div>
    </>
  );
}

export default PerfilUsuario;
