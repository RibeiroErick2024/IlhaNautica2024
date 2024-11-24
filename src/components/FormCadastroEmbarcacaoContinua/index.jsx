import { useState } from "react";

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

const CadastroEmbarcacaoContinua = () => {
  // const [cidade, setCidade] = useState("");
  // const [datasdisponiveis, setdatasdisponiveis] = useState("");
  // const [equipamento, setEquipamnetos] = useState("");
  // const [porto, setPorto] = useState("");
  // const [capitao, setCapitao] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();

  const Submit = (data, event) => {
    event.preventDefault();
    console.log(data);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container-cadastro-embarcacoes">
      {/* <h1 className="titulo-embarcacao">Embarcação</h1> */}
      <form
        onSubmit={handleSubmit(Submit)}
        className="form-section-embarcacoes"
      >
        <ContainerTextFieldInput>
          <TextFieldInput
            fullWidth
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
            focused
            label="Datas Disponíveis"
            variant="outlined"
            margin="dense"
            type="date"
            {...register("datasdisponiveis", {
              required: "Campo obrigatório",
            })}
            error={!!errors.datasdisponiveis}
            helperText={errors.datasdisponiveis?.message}
          />

          <TextFieldInput
            fullWidth
            label="Equipamento"
            variant="outlined"
            margin="dense"
            {...register("equipamento", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.equipamento}
            helperText={errors.equipamento?.message}
          />

          <TextFieldInput
            fullWidth
            label="Porto"
            variant="outlined"
            margin="dense"
            {...register("enderecoembarque", {
              required: "Campo obrigatório",
              minLength: 3,
            })}
            error={!!errors.porto}
            helperText={errors.porto?.message}
          />
        </ContainerTextFieldInput>

        <ContainerTextFieldInput>
          <TextFieldInput
            fullWidth
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
            label="Inscrição IMO"
            variant="outlined"
            margin="dense"
            {...register("inscricaoIMO", {
              required: "Campo obrigatório",
              minLength: {
                value: 6,
                message: "Inscrição IMO inválida",
              },
            })}
            error={!!errors.inscricaoIMO}
            helperText={errors.inscricaoIMO?.message}
          />

          <TextFieldInput
            fullWidth
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
        <div className="topping">
          <input
            type="checkbox"
            id="topping"
            name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
          />
          Equipamento de segurança
        </div>
        </ContainerTextFieldInput>

        <button type="submit" className="btn-salvar-embarcacao">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CadastroEmbarcacaoContinua;
