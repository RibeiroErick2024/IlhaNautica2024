import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import Stepper from "awesome-react-stepper";

function CadastroComplete() {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleInputChange = (fieldName) => {
    clearErrors(fieldName);
  };

  const onSubmit = () => {
    navigate("/home");
  };


  return (
    <div className="container-cadastro-complete">
      <div className="container-modal">
        <div className="step">
          <Stepper
          
            strokeColor="white"
            fillStroke="#1DE59F"
            activeColor="#1DE59F"
            activeProgressBorder="4px solid white"
            allowClickControl="false"
            showProgressBar='true'
            stroke={20}
            submitBtn={<button className="btnAvancar">Salvar</button>}
            continueBtn={<button  className="btnAvancar">Avançar</button>}
            backBtn={<button  className="btnAvancar">Voltar</button>}
            // onSubmit={(step) => alert(`Thank you!!! Final Step -> ${step}`)}
          >
            <div className="stepperSubDiv">
              <StepUmComplete />
            </div>
            <div className="stepperSubDiv">
            <StepUmComplete />
            </div>
            <div className="stepperSubDiv">
            <StepUmComplete />
            </div>
          </Stepper>
        </div>
      </div>
    </div>
  );
}
function StepUmComplete() {
  const [Genero, setGenero] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const handleInputChange = (fieldName) => {
    clearErrors(fieldName);
  };

  const onSubmit = () => {
    navigate("/home");
  };
  const options = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
    { value: "nao-binario", label: "Não-binário" },
    { value: "transgenero", label: "Transgênero" },
    { value: "genero_fluido", label: "Gênero fluido" },
    { value: "outro", label: "Outro" },
    { value: "prefiro_nao_dizer", label: "Prefiro não dizer" },
  ];

  return (
    <>
        <div className="titulo">
          <h3>Termine seu cadastro</h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-section-cadastro-complete"
        >
          <div className="input-field">
            <input
              type="text"
              placeholder="Nome Completo"
              {...register("nomeCompleto", {
                required: "O nome completo é obrigatório.",
                minLength: {
                  value: 6,
                  message: "O nome deve ter pelo menos 6 caracteres.",
                },
              })}
              onChange={() => handleInputChange("nomeCompleto")}
            />
            {errors.nomeCompleto && (
              <p style={{ color: "red", marginLeft: "10px", marginTop: "8px" }}>
                {errors.nomeCompleto.message}
              </p>
            )}

            <input
              type="date"
              placeholder="Data de nascimento"
              onChange={() => handleInputChange("email")}
            />
            <input type="text" placeholder="CPF | CPNJ" />
            {/* <input type="text" placeholder="Gênero" /> */}
            <div className="input-field-select">
              <Select
                options={options}
                // className="input-field-select"
                placeholder="Selecione o Gênero"
                required
                styles={{
                  option: (base) => ({
                    ...base,

                    // border: `1px dotted grey`,
                    height: "40px",
                    // lineHeight: "30px",
                    fontSize: "1.5vw",
                    // padding: "1vh 1vh",
                    fontFamily: '"Montserrat", sans-serif',
                    color: "black",
                  }),

                  control: (base) => ({
                    ...base,

                    width: "100%",
                    height: "6.5vh",
                    border: "1px solid rgba(19,141,147,255)",
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: "1.3vw",
                    color: "black",
                    paddingLeft: "2.5%",
                    /* padding: 20px 45px 20px 25px; */
                    /* background-color: #1DE59F; */
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  border: "1px dotted grey",
                  borderRadius: "40px",
                  colors: {
                    ...theme.colors,
                    primary25: "#1DE59F",
                    primary: "#8debcad2",
                  },
                })}
              />
            </div>
                       <input type="tel" placeholder="Telefone" />
          </div>
          {/* <div className="btnContainer">
            <button type="submit" className="btnAvancar">
              Avançar
            </button>
          </div> */}
        </form>  
    </>
  );
}

export default CadastroComplete;
