import { useEffect, useState } from "react";

import "./CadastroLocador.css";
import CadastroEmbarcacoes from "../../components/FormCadastroEmbarcacao";
import { useLocation, useNavigate } from "react-router-dom";
import FormPerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import { useContextGlobal } from "../../contexts/GlobalContext";
import { useForm } from "react-hook-form";
import HeaderPrincipal from "../../components/Header";
import { useAuth } from "../../contexts/AuthContext";


function CadastroLocador() {
  const navigate = useNavigate();
  const location = useLocation(); // Obtém a localização atual da navegação
  const barcoId = location.state?.id; 
  const { iconeCategoria, setIconeCategoria, setEditando, editando } = useContextGlobal();
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //teste
  const handleClick = () => {
    console.log(iconeCategoria)
  };

  useEffect(() => { 
    setEditando(false)
    console.log(editando)
   }, [setEditando])



  return (
    < div className="noob">
      <HeaderPrincipal />
      <div className="container-cadastro">
        <div className="titulo-cadastro">
          <h2 >Seu Barco </h2>
          <hr className="linhaHr" />
        </div>
        <div className="icones-embarcacao">
          <button type="button" className="btn-icone" onClick={() => setIconeCategoria("Jet Ski")}>
            <img
              className="icon-svg"
              src="./src/assets/jet.png"
              alt="Icone Jet-ski"

            />
          </button>
          <button className="btn-icone" onClick={() => setIconeCategoria("Iate")}>
            <img
              className="icon-svg"
              src="./src/assets/yatch.png"
              alt="Icone Iate"

            />
          </button>
          <button className="btn-icone" onClick={() => setIconeCategoria("Lancha")}>
            <img
              className="icon-svg"
              src="./src/assets/speedboat.png"
              alt="Icone Lancha"


            />
          </button>
          <button className="btn-icone" onClick={() => setIconeCategoria("Veleiro")}>
            <img
              className="icon-svg"
              src="./src/assets/sailboat.png"
              alt="Icone Veleiro"
              

            />
          </button>
        </div>

        <div className="forms-cadastro">
          <FormPerfilMarinheiro />,
          <br></br>
          <br></br>
          <br></br>
          <hr className="linhaHr" />
          <CadastroEmbarcacoes />,

        </div>
      </div>
      </div>
    
  );
}

export default CadastroLocador;
