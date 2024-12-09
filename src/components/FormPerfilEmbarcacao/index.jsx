import { useState } from "react";
import "../FormCadastroEmbarcacao/index.css";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  ColorButtonCancelar,
  ColorButtonSalvar,
  ContainerTextFieldInput,
  SelectInput,
  TextFieldInput,
  Titulo,
  ContainerModal,
  FormControlDiv,
} from "../FormCompletarCadastro/styles.jsx";

function PerfilEmbarcacao() {

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();

  const submit = (data, event) => {
    event.preventDefault();
    console.log(data);
    console.log(event);
  };
  const onError = (errors) => {
    console.log("Error no form", errors); 
  };

  return (
    <div>
      <div className="container-cadastro-embarcacoes">
        <h1 className="titulo-embarcacao">Perfil Embarcação</h1>
        <form
          onSubmit={handleSubmit(submit, onError)}
          className="form-section-embarcacoes"
        >
          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              label="Nome"
              variant="outlined"
              margin="dense"
              {...register("nome", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />

            <TextFieldInput
              fullWidth
              label="Modelo"
              variant="outlined"
              margin="dense"
              {...register("modelo", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.modelo}
              helperText={errors.modelo?.message}
            />

            <TextFieldInput
              fullWidth
              type="number"
              label="Ano"
              variant="outlined"
              margin="dense"
              {...register("ano", {
                required: "Campo obrigatório",
                min: {
                  value: 1900,
                  message: "Ano inválido",
                },
                max: {
                  value: new Date().getFullYear(),
                  message: "Ano não pode ser maior que o ano atual",
                },
              })}
              error={!!errors.ano}
              helperText={errors.ano?.message}
            />

            <TextFieldInput
              fullWidth
              type="number"
              label="Capacidade"
              variant="outlined"
              margin="dense"
              {...register("capacidade", {
                required: "Campo obrigatório",
                min: {
                  value: 1,
                  message: "Capacidade mínima é 1",
                },
              })}
              error={!!errors.capacidade}
              helperText={errors.capacidade?.message}
            />
          </ContainerTextFieldInput>
          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              label="Animais Permitidos"
              variant="outlined"
              margin="dense"
              {...register("animaispermitidos", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.animaispermitidos}
              helperText={errors.animaispermitidos?.message}
            />

            <TextFieldInput
              fullWidth
              label="Localização"
              variant="outlined"
              margin="dense"
              {...register("localizacao", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.localizacao}
              helperText={errors.localizacao?.message}
            />

            <TextFieldInput
              fullWidth
              label="Roteiros"
              variant="outlined"
              margin="dense"
              {...register("roteiros", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.roteiros}
              helperText={errors.roteiros?.message}
            />
          </ContainerTextFieldInput>

          <button type="submit" className="btn-salvar-embarcacao">
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PerfilEmbarcacao;
