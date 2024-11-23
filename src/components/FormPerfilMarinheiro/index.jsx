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
function PerfilMarinheiro() {
  // const [nome, setNome] = useState("");
  // const [aniversario, setAniversario] = useState("");
  // const [cpf, setCPF] = useState("");
  // const [genero, setGenero] = useState("");
  // const [email, setEmail] = useState("");
  // const [telefone, setTelefone] = useState("");
  // const [posto, setPosto] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data)
  };
  const onError = (errors) => {
    console.log("Error no form", errors); 
  };

  return (
    <div>
      <div className="container-cadastro-embarcacoes">
        <h1 className="titulo-embarcacao">Perfil Marinheiro</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="form-section-embarcacoes">
          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              label="Nome Completo"
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
              focused
              type="date"
              label="Data de Nascimento"
              variant="outlined"
              margin="dense"
              {...register("dataNascimento", {
                required: "Campo obrigatório",
              })}
              error={!!errors.aniversario}
              helperText={errors.aniversario?.message}
            />

            <TextFieldInput
              fullWidth
              type="text"
              label="CPF"
              variant="outlined"
              margin="dense"
              {...register("cpf", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "CPF inválido",
                },
              })}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
            />

            <TextFieldInput
              fullWidth
              label="Gênero"
              variant="outlined"
              margin="dense"
              {...register("genero", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.genero}
              helperText={errors.genero?.message}
            />
          </ContainerTextFieldInput>

          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              type="email"
              label="E-mail"
              variant="outlined"
              margin="dense"
              {...register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "E-mail inválido",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextFieldInput
              fullWidth
              type="tel"
              label="Telefone"
              variant="outlined"
              margin="dense"
              {...register("telefone", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^\(?\d{2}\)?\s?\d{5}-\d{4}$/,
                  message: "Telefone inválido",
                },
              })}
              error={!!errors.telefone}
              helperText={errors.telefone?.message}
            />

            <TextFieldInput
              fullWidth
              label="Posto"
              variant="outlined"
              margin="dense"
              {...register("posto", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.posto}
              helperText={errors.posto?.message}
            />
          </ContainerTextFieldInput>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default PerfilMarinheiro;
