import { useEffect, useState } from "react";
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
import axios from "axios";
import { useContextGlobal } from "../../contexts/GlobalContext.jsx";

function CadastroEmbarcacoes({ indiceEtapa }) {
  var cont = 1
  const { editando, setEditando, definirValidadeEtapa, gatilho, setGatilho } = useContextGlobal();
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    clearErrors,
    trigger,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
   
    console.log(data);
    definirValidadeEtapa(indiceEtapa, true);
  };
  const onError = (errors) => {
    console.log("Error no form", errors);
  };
  


  useEffect(() => {
    if(gatilho && cont == 1){
      console.log("aaaa")
      trigger();
    cont = cont++
    }
      axios
      .get("http://localhost:8080/embarcacao/b23f42e2-7e3d-4c68-bdc6-09027dff0fbb")
      .then((response) => {
        const data = response.data;
        if (data.categoria == "Jet Ski") {
          setIsDisabled(true);
        }
        console.log(data);
        setValue("nome", data.nome);
        setValue("fabricante", data.fabricante);
        setValue("anoFabricacao", data.anoFabricacao);
        setValue("tamanho", data.tamanho);
        setValue("capacidade", data.capacidade);
        setValue("quantidadeCabines", data.quantidadeCabines);
        setValue("quantidadeBanheiro", data.quantidadeBanheiro);
        setValue("potencia", data.potencia);
      })
      .catch((error) => console.log(error));
  }, []);
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
            {...register("nome", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.nome}
            helperText={errors.nome?.message}
          />
          <TextFieldInput
            fullWidth
            type="number"
            label="Ano de Fabricação"
            variant="outlined"
            margin="dense"
            {...register("anoFabricacao", {
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
            error={!!errors.anofabricacao}
            helperText={errors.anofabricacao?.message}
          />

          <TextFieldInput
            fullWidth
            type="number"
            label="Comprimento"
            variant="outlined"
            margin="dense"
            {...register("tamanho", {
              required: "Campo obrigatório",
              min: {
                value: 0,
                message: "Comprimento inválido",
              },
            })}
            error={!!errors.tamanho}
            helperText={errors.tamanho?.message}
          />
        </ContainerTextFieldInput>

        <ContainerTextFieldInput>
          {/* <TextFieldInput //Não tem no back
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
          /> */}
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
          <TextFieldInput
            fullWidth
            type="number"
            label="Número de Cabines"
            variant="outlined"
            margin="dense"
            {...register("quantidadeCabines", {
              required: "Campo obrigatório",
            })}
            disabled={isDisabled}
            error={!!errors.quantidadecabines}
            helperText={errors.quantidadecabines?.message}
          />
          <TextFieldInput
            fullWidth
            type="number"
            label="Número de Banheiros"
            variant="outlined"
            margin="dense"
            {...register("quantidadeBanheiro", {
              required: "Campo obrigatório",
            })}
            disabled={isDisabled}
            error={!!errors.quantidadeBanheiro}
            helperText={errors.quantidadeBanheiro?.message}
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

        <button type="submit" className="btn-salvar-embarcacao">
          Salvar
        </button>
      </form>
    </div>
  );
}

export default CadastroEmbarcacoes;
