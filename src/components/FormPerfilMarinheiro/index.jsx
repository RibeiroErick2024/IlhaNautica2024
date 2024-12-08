import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";


import "./index.css";
import {
  ContainerTextFieldInput,
  TextFieldInput,
} from "../FormCompletarCadastro/styles.jsx";
import { useContextGlobal } from "../../contexts/GlobalContext.jsx";
function FormPerfilMarinheiro() {
  const { editando, setEditando, iconeCategoria } = useContextGlobal()
  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    definirValidadeEtapa(indiceEtapa, true)
  };
  const onError = (errors) => {
    console.log("Error no form", errors);
  };
  useEffect(() => {
    setEditando(false)
    if (editando) {
      axios
        .get(
          "http://localhost:8080/marinheiro/fc83bcb0-ea6c-4f7d-bf01-d8b23d4ff2c5"
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          setValue("nome", data.nome);
          setValue("categoria", iconeCategoria);
          setValue("registroMaritimo", data.registroMaritimo);
          setValue("disponibilidade", data.disponibilidade);
          setValue("dataNascimento", data.dataNascimento);
          setValue("cpf", data.cpf);
          setValue("email", data.email);
          setValue("telefone", data.telefone);
          setValue("genero", data.genero);
          // setValue("registroMaritimo" ,data.registroMaritimo);

        })
        .catch((error) => console.log(error));

    }
  }, [setValue]);

  return (
    <div className="container-marinheira">
      <div className="container-cadastro-marinheiro">
      <h1 className="titulo-embarcacao">Marinheiro</h1>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="form-section-marinheiro">

          <ContainerTextFieldInput>
            <TextFieldInput
              fullWidth
              focused={editando}
              id="validation-outlined-input"
              label="Nome Completo"
              variant="outlined"
              margin="dense"
              className="dd"
              {...register("nome", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.nome}
              helperText={errors.nome?.message}
            />

            <TextFieldInput //adicionar no back
              fullWidth
              focused
              type="date"
              label="Data de Nascimento"
              variant="outlined"
              margin="dense"
              {...register("dataNascimento", {
                required: "Campo obrigatório",
              })}
              error={!!errors.dataNascimento}
              helperText={errors.dataNascimento?.message}
            />

            <TextFieldInput
              fullWidth
              focused={editando}
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
              focused={editando}
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
              focused={editando}
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
              focused={editando}
              type="tel"
              label="Telefone"
              variant="outlined"
              margin="dense"
              {...register("telefone", {
                // required: "Campo obrigatório",
                // pattern: {
                //   value: /^\(?\d{2}\)?\s?\d{5}-\d{4}$/,
                //   message: "Telefone inválido",
                // },
              })}
              error={!!errors.telefone}
              helperText={errors.telefone?.message}
            />

            <TextFieldInput
              fullWidth
              focused={editando}
              label="Disponibilidade"
              variant="outlined"
              margin="dense"
              {...register("disponibilidade", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.disponibilidade}
              helperText={errors.disponibilidade?.message}
            />
            <TextFieldInput
              value={iconeCategoria}
              fullWidth
              focused={editando}
              label="Categoria"
              disabled
              variant="outlined"
              margin="dense"
              {...register("categoria", {
                // required: "Campo obrigatório",
                // minLength: 3,
              })}
              error={!!errors.categoria}
              helperText={errors.categoria?.message}
            />
          </ContainerTextFieldInput>

          <div className="fingon">
            <button type="submit" className="btn-marinheiro">Salvar</button>

          </div>




        </form>
      </div>
    </div>
  );
}

export default FormPerfilMarinheiro;
