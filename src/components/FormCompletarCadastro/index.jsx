import "./index.css";
import React, { useEffect, useState } from "react";
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
} from "./styles.jsx";

import api from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContextGlobal } from "../../contexts/GlobalContext.jsx";

export function FormUsuario() {
  const navigate = useNavigate()
  const { idUsuario } = useAuth();
  const{locador, setLocador, editando} = useContextGlobal()
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
  const { register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await handleCadastro(data);
    // handleClose();
  };
  const onError = (errors) => {
    console.log("Error no form", errors);
  };
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/usuario/${idUsuario}`
      )
      .then((response) => {
        const data = response.data;
        setLocador(true)
        if(data.categoriaUsuario == "Locador"){
          setLocador(true)
        }
        console.log(data);
        setValue("nomeCompleto", data.nomeCompleto);
        setValue("dataNascimento", data.dataNascimento);
        setValue("cpf", data.cpf),
        setValue("telefone", data.telefone),
        setValue("genero", data.genero),

        setValue("bairro", data.bairro),
        setValue("cep", data.cep),
        setValue("cidade", data.cidade),
        setValue("rua", data.rua),
        setValue("numero", data.numero)
      
      })
      .catch((error) => console.log(error));
  }, []);

  async function handleCadastro(data) {
    const endereco = {
      bairro: data.bairro,
      cep: data.cep,
      cidade: data.cidade,
      rua: data.rua,
      numero: data.numero,
      latitude: -22.906847,
      longitude: -43.172897,
      usuario: {
        id: idUsuario,
      },
    };

    const usuario = {
      id: idUsuario,
      nomeCompleto: data.nomeCompleto,
      cpf: data.cpf,
      dataNascimento: data.dataNascimento,
      genero: data.genero,
      telefone: data.telefone,
    };
    try {
      const response = await api.put(
        `usuario/completarcadastro/${idUsuario}`,
        usuario
      );
      if(response){
        console.log("Ooooi")
        navigate("/home")
      }
      console.log("Console", response);
    } catch (error) {
      console.log("Erro ao enviar dados ao back", error.response);
    }
    try {
      const responseEndereco = await api.post("endereco/usuario", endereco);
      console.log("Dados endereço enviados back:", responseEndereco);

    } catch (error) {
      console.log("Console", error.response.data);
    }
  }

  return (
    <form className="form-section-cadastro-complete" onSubmit={handleSubmit(onSubmit, onError)}>
      
      <ContainerTextFieldInput>
        <TextFieldInput
          fullWidth
          focused={editando}
          label="Nome Completo"
          variant="outlined"
          margin="dense"
          {...register("nomeCompleto", {
            required: "Campo obrigatório",
            minLength: 6,
          })}
          error={!!errors.nomeCompleto}
          helperText={errors.nomeCompleto?.message}
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
              value: /^[0-9]{11,13}$/,
              message: "CPF ou CNPJ inválido",
            },
          })}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />
        <TextFieldInput
          fullWidth
          focused={editando}
          type="tel"
          label="Telefone"
          variant="outlined"
          margin="dense"
          {...register("telefone", { required: "Campo obrigatório" })}
          error={!!errors.telefone}
          helperText={errors.telefone?.message}
        />
        <FormControlDiv margin="dense">
          <Controller
            name="genero"
            control={control}
            // defaultValue="prefiro_nao_dizer"
            rules={{ required: "Campo obrigatório" }}
            render={({ field }) => (
              <SelectInput
                fullWidth
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
          label="CEP"
          variant="outlined"
          margin="dense"
          {...register("cep", { required: "Campo obrigatório" })}
          error={!!errors.cep}
          helperText={errors.cep?.message}
        />
        <TextFieldInput
          fullWidth
          focused={editando}
          label="Rua"
          variant="outlined"
          margin="dense"
          {...register("rua", { required: "Campo obrigatório" })}
          error={!!errors.rua}
          helperText={errors.rua?.message}
        />
        <TextFieldInput
          fullWidth
          focused={editando}
          type="number"
          label="Número"
          variant="outlined"
          margin="dense"
          {...register("numero", { required: "Campo obrigatório" })}
          error={!!errors.numero}
          helperText={errors.numero?.message}
        />
        <TextFieldInput
          fullWidth
          focused={editando}
          label="Cidade"
          variant="outlined"
          margin="dense"
          {...register("cidade", { required: "Campo obrigatório" })}
          error={!!errors.cidade}
          helperText={errors.cidade?.message}
        />
        <TextFieldInput
          fullWidth
          focused={editando}
          label="Bairro"
          variant="outlined"
          margin="dense"
          {...register("bairro", {
            required: "Campo obrigatório",
          })}
          error={!!errors.bairro}
          helperText={errors.bairro?.message}
        />
      </ContainerTextFieldInput>
      <DialogActions>
        {/* <ColorButtonCancelar onClick={handleClose}>
      Cancelar
    </ColorButtonCancelar> */}
        <ColorButtonSalvar
          type="submit"
          variant="contained"
          color="primary"
        >
          Salvar
        </ColorButtonSalvar>
      </DialogActions>
    </form>
  )
}


function CompletarCadastro() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>Abrir modal</Button>

      <ContainerModal
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"lg"}
      >
        <Titulo>Complete seu Cadastro</Titulo>
        <FormUsuario />
      </ContainerModal>
    </div>
  );
}

export default CompletarCadastro;
