import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";

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
        <div className="step"></div>
        <div className="titulo">
            <h3 >Termine seu cadastro</h3>
            </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-section-cadastro-complete">
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
            <input type="text" placeholder="Genero" />
            <input type="tel" placeholder="Telefone" />
          </div>
          <div className="btnContainer">
          <button type="submit" className="btnAvancar">Avançar</button>
            
          </div>

        </form>
      </div>
    </div>
  );
}

export default CadastroComplete;
