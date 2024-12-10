import { useContext, useEffect, useState } from "react";

import "./PerfilUsuario.css";
import CompletarCadastro, { FormUsuario } from "../../components/FormCompletarCadastro";
import { useContextGlobal } from "../../contexts/GlobalContext";
import HeaderPrincipal from "../../components/Header";
import { useNavigate } from "react-router-dom";
import api, { axiosapi } from "../../config/axios";
import { useAuth } from "../../contexts/AuthContext";
import { Alert, Snackbar } from "@mui/material";

function PerfilUsuario() {
  const navigate = useNavigate();
  const { editando, setEditando, locador } = useContextGlobal();
  const { idUsuario, logout } = useAuth();
  const [imagemBase64, setImagemBase64] = useState(null);
  const [embarcacoes, setEmbarcacoes] = useState([]);
  const [open, setOpen] = useState(false);
  const fetchBarcos = async () => {
    try {
      const response = await axiosapi.get(`/embarcacao/usuario/${idUsuario}`, { responseType: "json" });
      setEmbarcacoes(response.data);
    } catch (error) {
      console.log("Erro ao tentar buscar embarcacões", error);
    }
  };
  useEffect(() => {
    setEditando(true);
    fetchBarcos();
  }, []);

  function paraLocador() {
    setEditando(true);
    navigate("/cadastroLocador");
  }

  async function deleteUsuario() {
    try {
      const response = axiosapi.delete(`usuario/${idUsuario}`);
      setOpen(true)
      logout();
    } catch (error) {
      console.log("Error", error);
    }
  }
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HeaderPrincipal />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message=""
      >
        <Alert onClose={handleClose} severity="info" variant="filled" sx={{ width: "100%" }}>
         Conta deletada. Adeus.
        </Alert>
      </Snackbar>
      {/* <div className="imgFundo"> */}
      <div className="containerPerfil">
        {/* Contêiner de Ícones */}
        <div className="icones-usuario">
          <button type="button" className="btn-icone">
            <img className="icon" src="./images/perfil.png" alt="Ícone Marinheiro" />
          </button>
          {locador && (
            <button type="button" className="btn-icone" onClick={paraLocador}>
              <img className="icon" src="./images/embarcacao.png" alt="Ícone Marinheiro" />
            </button>
          )}
          <button type="button" className="btn-icone">
            <img className="icon" src="./images/notificacao.png" alt="Ícone Marinheiro" />
          </button>
          <button type="button" className="texto-excluir" onClick={deleteUsuario}>
            Excluir conta
            {/* <img className="icon" src="./images/notificacao.png" alt="Ícone Marinheiro" /> */}
          </button>
        </div>

        {/* Contêiner de Inputs */}

        {/* <button type="submit" className="btn-salvar-marinheiro">Salvar</button> */}
        <div className="perfilMarinheiro">
          <h4 className="titulo-embarcacao">Perfil Usuario</h4>
          <FormUsuario />
          
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default PerfilUsuario;
