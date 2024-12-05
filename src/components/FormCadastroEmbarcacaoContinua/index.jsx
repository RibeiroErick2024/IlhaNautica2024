import { useEffect, useState } from "react";

import "../FormCadastroEmbarcacaoContinua/index.css";
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

const CadastroEmbarcacaoContinua = ({ indiceEtapa}) => {
  const [isChecked, setIsChecked] = useState(false);
  const { editando, setEditando, definirValidadeEtapa, gatilho, setGatilho } = useContextGlobal();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const submitForm = (data, event) => {
    event.preventDefault();
    console.log(data);
    definirValidadeEtapa(indiceEtapa, true)
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/embarcacao/b23f42e2-7e3d-4c68-bdc6-09027dff0fbb"
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
     
        setValue("enderecoEmbarque", data.enderecoEmbarque);
        setValue("inscricao", data.inscricao);
        setValue("preco", data.preco);
        setValue("bandeira", data.bandeira);
      
        // setValue("registroMaritimo" ,data.registroMaritimo);
    
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container-cadastro-embarcacoes">
      {/* <h1 className="titulo-embarcacao">Embarcação</h1> */}
      <form onSubmit={handleSubmit(submitForm)} className="form-section-embarcacoes">
        <ContainerTextFieldInput>
          <TextFieldInput
            fullWidth
            focused={editando}
            label="Cidade"
            variant="outlined"
            margin="dense"
            {...register("cidade", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.cidade}
            helperText={errors.cidade?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Datas Disponíveis"
            variant="outlined"
            margin="dense"
            type="text"
            {...register("datasdisponiveis", {
              required: "Campo obrigatório",
            })}
            error={!!errors.datasdisponiveis}
            helperText={errors.datasdisponiveis?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Endereco de Embarque"
            variant="outlined"
            margin="dense"
            {...register("enderecoEmbarque", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.enderecoEmbarque}
            helperText={errors.enderecoEmbarque?.message}
          />
        </ContainerTextFieldInput>

        <ContainerTextFieldInput>
          <TextFieldInput
            fullWidth
            focused={editando}
            type="number"
            label="Preço"
            variant="outlined"
            margin="dense"
            {...register("preco", {
              required: "Campo obrigatório",
              min: {
                value: 0,
                message: "Preço deve ser maior ou igual a 0",
              },
            })}
            error={!!errors.preco}
            helperText={errors.preco?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Inscrição IMO"
            variant="outlined"
            margin="dense"
            {...register("inscricao", {
              required: "Campo obrigatório",
              minLength: {
                value: 6,
                message: "Inscrição IMO inválida",
              },
            })}
            error={!!errors.inscricao}
            helperText={errors.inscricao?.message}
          />

          <TextFieldInput
            fullWidth
            focused={editando}
            label="Bandeira"
            variant="outlined"
            margin="dense"
            {...register("bandeira", {
              required: "Campo obrigatório",
              minLength: {
                value: 2,
                message: "Bandeira inválida",
              },
            })}
            error={!!errors.bandeira}
            helperText={errors.bandeira?.message}
          />
        </ContainerTextFieldInput>

        <button type="submit" className="btn-salvar-embarcacao">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CadastroEmbarcacaoContinua;
