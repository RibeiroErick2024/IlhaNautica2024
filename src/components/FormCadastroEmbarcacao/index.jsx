import { useState } from "react";
import "./index.css";
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

function CadastroEmbarcacoes() {
  // const [fabricante, setFabricante] = useState("");
  // const [nomeembarcacao, setNomeEmbarcacao] = useState("");
  // const [comprimento, setComprimento] = useState("");
  // const [numerocabines, setNumerodeCabines] = useState("");
  // const [modelo, setModulos] = useState("");
  // const [fabricacao, setAnoFabricacao] = useState("");
  // const [capacidade, setCapacidade] = useState("");
  // const [potencia, setPotencial] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onError = (errors) => {
    console.log("Error no form", errors); 
  };
  return (
    <div className="container-cadastro-embarcacoes">
      <h1 className="titulo-embarcacao">Embarcação</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="form-section-embarcacoes">
        <ContainerTextFieldInput>
          <TextFieldInput
            fullWidth
            label="Fabricante"
            variant="outlined"
            margin="dense"
            {...register("fabricante", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.fabricante}
            helperText={errors.fabricante?.message}
          />

          <TextFieldInput
            fullWidth
            label="Nome da Embarcação"
            variant="outlined"
            margin="dense"
            {...register("nomeembarcacao", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.nomeembarcacao}
            helperText={errors.nomeembarcacao?.message}
          />

          <TextFieldInput
            fullWidth
            type="number"
            label="Comprimento"
            variant="outlined"
            margin="dense"
            {...register("comprimento", {
              required: "Campo obrigatório",
              min: {
                value: 0,
                message: "Comprimento inválido",
              },
            })}
            error={!!errors.comprimento}
            helperText={errors.comprimento?.message}
          />

          <TextFieldInput
            fullWidth
            type="number"
            label="Número de Cabines"
            variant="outlined"
            margin="dense"
            {...register("numerocabines", {
              required: "Campo obrigatório",
              min: {
                value: 1,
                message: "Número de cabines inválido",
              },
            })}
            error={!!errors.numerocabines}
            helperText={errors.numerocabines?.message}
          />
        </ContainerTextFieldInput>

        <ContainerTextFieldInput>
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
            label="Ano de Fabricação"
            variant="outlined"
            margin="dense"
            {...register("fabricacao", {
              required: "Campo obrigatório",
              min: {
                value: 1900,
                message: "Ano inválido",
              },
              max: {
                value: new Date().getFullYear(),
                message: "Ano de fabricação não pode ser maior que o ano atual",
              },
            })}
            error={!!errors.fabricacao}
            helperText={errors.fabricacao?.message}
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

          <TextFieldInput
            fullWidth
            type="number"
            label="Potência"
            variant="outlined"
            margin="dense"
            {...register("potencia", {
              required: "Campo obrigatório",
              min: {
                value: 1,
                message: "Potência mínima é 1",
              },
            })}
            error={!!errors.potencia}
            helperText={errors.potencia?.message}
          />
        </ContainerTextFieldInput>

        <button type="submit" className="btn-salvar-embarcacao">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroEmbarcacoes;
