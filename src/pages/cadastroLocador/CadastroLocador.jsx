import { useState } from "react";

import "./CadastroLocador.css";
import CadastroEmbarcacoes from "../../components/FormCadastroEmbarcacao";
import DescricaoEmbarcacao from "../../components/FormDescricao";
import CadastroEmbarcacaoContinua from "../../components/FormCadastroEmbarcacaoContinua";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import FormPerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import { useContextGlobal } from "../../contexts/GlobalContext";
import { useForm } from "react-hook-form";
import HeaderPrincipal from "../../components/Header";


function CadastroLocador({ titulo }) {
  const navigate = useNavigate();

  const { editando } = useContextGlobal();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //teste
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <HeaderPrincipal />
      <div className="container-cadastro">
        <div className="titulo-cadastro">
          <h2>Seu Barco </h2>
          <hr className="linhaHr" />
        </div>
        <div className="icones-embarcacao">
          <button type="button" className="btn-icone" onClick={handleClick}>
            <img
              className="icon-svg"
              src="./images/Drag Boat.png"
              alt="Icone Jet-ski"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./images/Yacht.png"
              alt="Icone Iate"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./images/Boat Launch.png"
              alt="Icone Lancha"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./images/Sailboat.png"
              alt="Icone Veleiro"
            />
          </button>
        </div>

        <div className="forms-cadastro">
        <FormPerfilMarinheiro  />,
        <CadastroEmbarcacoes />,
         {/* <DescricaoEmbarcacao/>  */}
        {/* <CadastroEmbarcacaoContinua indiceEtapa={1} />,  */}

          </div>
      </div>
    </>
  );
}

export default CadastroLocador;
