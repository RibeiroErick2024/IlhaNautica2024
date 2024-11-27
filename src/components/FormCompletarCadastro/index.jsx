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
import FormUsuario from "../FormUsuario/index.jsx";



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
