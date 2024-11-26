import { useState } from "react";

import "./index.css";
import CadastroEmbarcacoes from "../../components/FormCadastroEmbarcacao";
import DescricaoEmbarcacao from "../../components/FormDescricao";
import CadastroEmbarcacaoContinua from "../../components/FormCadastroEmbarcacaoContinua";
import { useNavigate } from "react-router-dom";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import FormPerfilMarinheiro from "../../components/FormPerfilMarinheiro";
import { useContextGlobal } from "../../contexts/GlobalContext";


function CadastroLocador({ titulo }) {
   const navigate = useNavigate();
  
  const { activeStep, setActiveStep, isStepValid, } = useContextGlobal();
  

  const handleNext = () => {
    if (isStepValid[activeStep]) {  // Verifica se a etapa atual é válida
      setActiveStep(prevStep => prevStep + 1); 
    } else {
      console.log("Formulário inválido");
    }
  };
  const steps = [
    <CadastroEmbarcacoes indiceEtapa={0} />,
    <CadastroEmbarcacaoContinua indiceEtapa={1} />,
    <FormPerfilMarinheiro indiceEtapa={2} />,
    <DescricaoEmbarcacao indiceEtapa={3} />
  ];


  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //teste
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      {/* <HeaderPrincipal /> */}
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
         {steps[activeStep]}
        </div>
        <MobileStepper
          variant="progress"
          steps={4}
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 3}
            >
               {activeStep === steps.length - 1 ? 'Concluir' : 'Continuar'}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Voltar
            </Button>
          }
        />
      </div>
    </>
  );
}

export default CadastroLocador;
