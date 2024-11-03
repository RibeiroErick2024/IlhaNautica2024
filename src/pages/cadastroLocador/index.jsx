import { useState } from "react";

import "./index.css";
import CadastroEmbarcacoes from "../../components/FormCadastroEmbarcacao";
import CadastroDescricao from "../../components/FormCadastroDescricao";
import PerfilEmbarcacao from "../../components/FormCadastroPerfilEmbarcacao";

function CadastroLocador({titulo}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <div className="container-cadastro">
        <div className="titulo-cadastro">
          <h2>Seu Barco </h2>
          <hr className="linhaHr" />
        </div>

        <div className="icones-embarcacao">
          <button type="button" className="btn-icone">
            <img
              className="icon-svg"
              src="./src/assets/jetski.svg"
              alt="Icone Jet-ski"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./src/assets/iate.svg"
              alt="Icone Iate"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./src/assets/lancha.svg"
              alt="Icone Lancha"
            />
          </button>
          <button className="btn-icone">
            <img
              className="icon-svg"
              src="./src/assets/veleiro.svg"
              alt="Icone Veleiro"
            />
          </button>
        </div>

        <div className="forms-cadastro">
        <PerfilEmbarcacao />
        <CadastroEmbarcacoes titulo="Cadastro Embarcação"/>
        <CadastroDescricao />
        </div>
      </div>
    </>
  );
}

export default CadastroLocador;
