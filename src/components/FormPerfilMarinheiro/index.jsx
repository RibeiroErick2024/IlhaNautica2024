import axios from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Alert, MenuItem, Snackbar } from "@mui/material";
import api from "../../config/axios.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useContextGlobal } from "../../contexts/GlobalContext.jsx";
import {
  ContainerTextFieldInput,
  FormControlDiv,
  SelectInput,
  TextFieldInput,
} from "../FormCompletarCadastro/styles.jsx";
import "./index.css";
function FormPerfilMarinheiro() {
  const { editando, setEditando, iconeCategoria } = useContextGlobal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cadastrado, setCadastrado] = useState(false);
  const { idUsuario } = useAuth();
  const [mensagem, setMensagem] = useState("");
  const [severidade, setSeveridade] = useState("info");
  const [open, setOpen] = useState(false);

  const opcoes = [
    { value: "empresa", label: "Não se aplica (Empresa)" },
    { value: "feminino", label: "Feminino" },
    { value: "masculino", label: "Masculino" },
    { value: "nao-binario", label: "Não-binário" },
    { value: "transgenero", label: "Transgênero" },
    { value: "genero_fluido", label: "Gênero fluido" },
    { value: "outro", label: "Outro" },
    { value: "prefiro_nao_dizer", label: "Prefiro não dizer" },
  ];
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
  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data, event) => {
    event.preventDefault();

    if (isSubmitting) {
      console.log("Enviandos dados... Espere pela resposta");
      return; // Impede o envio se já estiver em processo de envio
    }

    setIsSubmitting(true);
    console.log(data);
    const marinheiro = {
      nome: data.nome,
      categoria: data.categoria,
      registroMaritimo: data.registroMaritimo,
      // disponibilidade: true,
      dataNascimento: data.dataNascimento,
      cpf: data.cpf,
      email: data.email,
      telefone: data.telefone,
      genero: data.genero,
      usuario: {
        id: idUsuario,
      },
    };

    try {
      const response = await api.post(`marinheiro/`, marinheiro);
      console.log("Marinheiro cadastrao com sucesso", response);
      setCadastrado(true);
      setSeveridade("success");
      setMensagem("Marinheiro cadastrado. Termine o restante do cadastros");
      setOpen(true);
    } catch (error) {
      setCadastrado(false);
      setSeveridade("warning");
      setMensagem("Ocorreu algum erro. Tente novamente mais tarde");
      setOpen(true);
      console.log("Erro ao enviar dados ao back", error.response);
    } finally {
      setIsSubmitting(false); // Reabilita o botão após a operação
    }
  };

  const onError = (errors) => {
    console.log("Error no form", errors);
  };
  // useEffect(() => {
  //   // if (editando) {
  //   //   axios
  //   //     .get("http://localhost:8080/marinheiro/fc83bcb0-ea6c-4f7d-bf01-d8b23d4ff2c5")
  //   //     .then((response) => {
  //   //       const data = response.data;
  //   //       console.log(data);
  //   //       setValue("nome", data.nome);
  //   //       setValue("categoria", iconeCategoria);
  //   //       setValue("registroMaritimo", data.registroMaritimo);
  //   //       setValue("disponibilidade", data.disponibilidade);
  //   //       setValue("dataNascimento", data.dataNascimento);
  //   //       setValue("cpf", data.cpf);
  //   //       setValue("email", data.email);
  //   //       setValue("telefone", data.telefone);
  //   //       setValue("genero", data.genero);
  //   //     })
  //   //     .catch((error) => console.log(error));
  //   // }
  // }, [setValue]);

  return (
    <div className="container-marinheira">
      <div className="container-cadastro-marinheiro">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message=""
        >
          <Alert onClose={handleClose} severity={severidade} variant="filled" sx={{ width: "100%" }}>
            {mensagem}
          </Alert>
        </Snackbar>
        <h1 className="titulo-embarcacao">Marinheiro</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="form-section-marinheiro">
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

            <FormControlDiv margin="dense">
              <Controller
                name="genero"
                control={control}
                rules={{ required: "Campo obrigatório" }}
                render={({ field }) => (
                  <SelectInput
                    fullWidth
                    defaultValue="outro"
                    focused={editando}
                    select
                    label="Gênero"
                    {...register("genero", { required: "Selecione uma opcão" })}
                    error={!!errors.genero}
                    helperText={errors.genero?.message}
                  >
                    {opcoes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </SelectInput>
                )}
              />
            </FormControlDiv>
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
              label=" Registro Maritimo"
              variant="outlined"
              margin="dense"
              {...register("registroMaritimo", {
                required: "Campo obrigatório",
                minLength: 3,
              })}
              error={!!errors.registroMaritimo}
              helperText={errors.registroMaritimo?.message}
            />
            <TextFieldInput
              value={iconeCategoria}
              fullWidth
              focused={editando}
              label="Categoria"
              // disabled
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
            <button disabled={cadastrado} type="submit" className="btn-marinheiro">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormPerfilMarinheiro;
