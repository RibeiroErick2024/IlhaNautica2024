import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import "./index.css";

import { ColorButtonCancelar, ColorButtonSalvar,  ContainerTextFieldInput,  SelectInput,  TextFieldInput, Titulo, ContainerModal } from "./styles.jsx";

function CadastroComplete() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();
  // Configuração do react-hook-form para gerenciamento de formulário e validação
  // const { control, handleSubmit, formState: { errors }, setValue } = useForm();

  // Função chamada no envio do formulário
  const onSubmit = (data) => {
    console.log(data);  // Exibe os dados preenchidos no console
    handleClose();      // Fecha o modal após o envio
  };

  const opcoes = [
    { value: "masculino", label: "Masculino" },
    { value: "feminino", label: "Feminino" },
    { value: "nao-binario", label: "Não-binário" },
    { value: "transgenero", label: "Transgênero" },
    { value: "genero_fluido", label: "Gênero fluido" },
    { value: "outro", label: "Outro" },
    { value: "prefiro_nao_dizer", label: "Prefiro não dizer" },
  ];

  return (
    <div>
      <Button onClick={handleOpen}>Abrir modal</Button>

      <ContainerModal open={open} onClose={handleClose}>
        <Titulo>Complete seu Cadastro</Titulo>
        <ContainerTextFieldInput>
          <form onSubmit={handleSubmit(onSubmit)} >
            <TextFieldInput
              fullWidth
              label="Nome Completo"
              variant="outlined"
              margin="dense"
              {...register("nomeCompleto", { required: "Nome Completo é obrigatório", minLength: 6 })}
              error={!!errors.nomeCompleto}
              helperText={errors.nomeCompleto?.message}
            />
            <TextFieldInput
              fullWidth
              type="number"
              label="Data de Nascimento"
              variant="outlined"
              margin="dense"
              {...register("dataNascimento", { required: "Data de Nascimento é obrigatória" })}
              error={!!errors.dataNascimento}
              helperText={errors.dataNascimento?.message}
            />

            {/* Campo de seleção de Gênero */}
            <FormControl fullWidth margin="dense" error={!!errors.genero}>
              <InputLabel>Gênero</InputLabel>
              <Controller
                name="genero"
                control={control}
                rules={{ required: "Gênero é obrigatório" }}
                render={({ field }) => (

                  <SelectInput {...field} label="Gênero" className="input-field-select">
                    {/* {opcoes.map((opcoe) => (
                      <MenuItem
                        key={opcoe}
                        value={opcoe}
                        style={getStyles(opcoe, theme)}
                      >
                        {opcoe}
                      </MenuItem>
                    ))} */}
                    <MenuItem selected className="MenuItem" value="masculino">Masculino</MenuItem>
                    <MenuItem value="feminino">Feminino</MenuItem>
                    <MenuItem value="nao-binario">Não-binário</MenuItem>
                    <MenuItem value="transgenero">Transgênero</MenuItem>
                    <MenuItem value="genero_fluido">Gênero Fluido</MenuItem>
                    <MenuItem value="outro">Outro</MenuItem>
                    <MenuItem value="prefiro_nao_dizer">Prefiro não dizer</MenuItem>
                  </SelectInput>
                )}
              />
              {errors.genero && <p style={{ color: 'red' }}>{errors.genero.message}</p>}
            </FormControl>
            <TextFieldInput
              fullWidth
              label="CEP"
              variant="outlined"
              margin="dense"
              {...register("zipCode", { required: "CEP é obrigatório" })}
              error={!!errors.zipCode}
              helperText={errors.zipCode?.message}
            />
            <TextFieldInput
              fullWidth
              label="Rua"
              variant="outlined"
              margin="dense"
              {...register("street", { required: "Rua é obrigatória" })}
              error={!!errors.street}
              helperText={errors.street?.message}
            />
            <TextFieldInput
              fullWidth
              type="number"
              label="Número"
              variant="outlined"
              margin="dense"
              {...register("number", { required: "Número é obrigatório" })}
              error={!!errors.number}
              helperText={errors.number?.message}
            />
            <TextFieldInput
              fullWidth
              label="Cidade"
              variant="outlined"
              margin="dense"
              {...register("city", { required: "Cidade é obrigatória" })}
              error={!!errors.city}
              helperText={errors.city?.message}
            />
            <TextFieldInput
              fullWidth
              label="Bairro"
              variant="outlined"
              margin="dense"
              {...register("neighborhood", { required: "Bairro é obrigatório" })}
              error={!!errors.neighborhood}
              helperText={errors.neighborhood?.message}
            />
            <TextFieldInput
              fullWidth
              label="País"
              variant="outlined"
              margin="dense"
              {...register("country", { required: "País é obrigatório" })}
              error={!!errors.country}
              helperText={errors.country?.message}
            />
            <DialogActions>
              <ColorButtonCancelar onClick={handleClose}>Cancelar</ColorButtonCancelar>
              <ColorButtonSalvar type="submit" variant="contained" color="primary"  >Salvar</ColorButtonSalvar>
            </DialogActions>
          </form>
        </ContainerTextFieldInput>
      </ContainerModal>
    </div>
  );
}

export default CadastroComplete;
