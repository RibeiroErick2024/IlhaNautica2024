import { useContext, useEffect, useState } from "react";

import "./PerfilUsuario.css";
import CompletarCadastro, { FormUsuario } from "../../components/FormCompletarCadastro"
import { useContextGlobal } from "../../contexts/GlobalContext";
import HeaderPrincipal from "../../components/Header";
import { useNavigate } from "react-router-dom";
import api, { axiosapi } from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";

function PerfilUsuario() {
  const navigate = useNavigate()
  const { editando, setEditando, locador } = useContextGlobal();
  const {idUsuario, logout} = useAuth()
console.log("Perfil usuario")
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

  async function deleteUsuario(){

    try {
      const response = api.delete(`usuario/${idUsuario}`)
      alert("Tchau")
logout  
    } catch (error) {
      console.log("Error", error)
    }
  }
  return (
    <>
    <HeaderPrincipal />
    <div className="containerPerfil" >

      {/* Contêiner de Ícones */}
      <div className="icones-marinheiro">
        <button type="button" className="btn-icone">
          <img className="icon" src="./images/perfil.png" alt="Ícone Marinheiro" />
        </button>
        {locador && <button type="button" className="btn-icone" onClick={paraLocador}>
          <img className="icon" src="./images/embarcacao.png" alt="Ícone Marinheiro" />
         
        </button>}
        <button type="button" className="btn-icone">
          <img className="icon" src="./images/notificacao.png" alt="Ícone Marinheiro" />
        </button>
        <button type="button" className="btn-icone" onClick={deleteUsuario}>
          Excluir conta
          {/* <img className="icon" src="./images/notificacao.png" alt="Ícone Marinheiro" /> */}
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
