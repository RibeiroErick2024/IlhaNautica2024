import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useContextGlobal } from "../../contexts/GlobalContext";
import FormUsuario from "../../components/FormUsuario";

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

        <Link to="/embarcacao">
          <button type="button" className="btn-icone">
            <img
              className="icon-svg"
              src="./images/embarcacao.png"
              alt="Ícone Marinheiro"
            />
          </button>
        </Link>

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
  );
}

export default PerfilUsuario;
