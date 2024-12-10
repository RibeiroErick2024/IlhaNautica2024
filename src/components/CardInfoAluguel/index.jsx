import React, { useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { axiosapi } from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

function InfoAluguel({ precoDiaria, idEmbarcacao }) {
  // let hoje = dayjs();
  const [hoje, setHoje] = useState(dayjs())
  const { idUsuario, logado, token } = useAuth();
  const [checkin, setCheckin] = useState(hoje);
  const [checkout, setCheckout] = useState(hoje);
  const [precoTotal, setPrecoTotal] = useState(precoDiaria);
  const [diarias, setDiarias] = useState(0);
  const[mensagem, setMensagem] =useState("Para alugar uma embarcação, faça login!")
  const [severidade, setSeveridade] = useState("info")
  const [open, setOpen] = useState(false);
  const [alugado, setAlugado] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const checkLogin = () => {
    if (!token) {
      setSeveridade("warning")
      setMensagem("Para alugar uma embarcação, faça login!")
      setOpen(true);
      
      return false;
    }
    return true;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = async (data) => {
    if (!checkLogin()) {
      return
    }else{
      setSeveridade("success")
      setMensagem(`Reserva confirmada!\nCheck-in: ${checkin.format("DD/MM/YYYY")}\nCheck-out: ${checkout.format(
        "DD/MM/YYYY"
      )}\nDiárias: ${diarias}\nTotal: R$ ${precoTotal.toFixed(2)}`)
      setOpen(true);
      setHoje(checkout)
      setAlugado(true)
      return
    }

    const agendamento = {
      datainicio: checkin.format("YYYY-MM-DD"),
      datafinal: checkout.format("YYYY-MM-DD"),
      status: "Confirmado", 
        idUsuario: idUsuario,
        idEmbarcacao: idEmbarcacao,
        // idMarinheiro: "fc83bcb0-ea6c-4f7d-bf01-d8b23d4ff2c5"
    };

    try {
      const response = await axiosapi.post("agendamento/", agendamento);
      // setSeveridade("success")
      // setMensagem(`Reserva confirmada!\nCheck-in: ${checkin.format("DD/MM/YYYY")}\nCheck-out: ${checkout.format(
      //   "DD/MM/YYYY"
      // )}\nDiárias: ${diarias}\nTotal: R$ ${precoTotal.toFixed(2)}`)
      setOpen(true);
    } catch (error) {
      // setSeveridade("error");
      // setMensagem("Erro ao agendar. Tente novamente mais tarde.");
      // setOpen(true);
      console.log("Erro ao enviar dados ao back", error.response);
    }

    // // alert(
    //   `Reserva confirmada!\nCheck-in: ${checkin.format("DD/MM/YYYY")}\nCheck-out: ${checkout.format(
    //     "DD/MM/YYYY"
    //   )}\nDiárias: ${diarias}\nTotal: R$ ${precoTotal.toFixed(2)}`
    // );
  };

  const handleCheckoutChange = (novaData) => {
    setCheckout(novaData);
    const diffTime = novaData.diff(checkin, "day");
    if (diffTime > 0) {
      setPrecoTotal(diffTime * precoDiaria);
      setDiarias(diffTime);
    } else {
      setPrecoTotal(precoDiaria);
      setDiarias(1);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="info-aluguel-container">
      <div className="div-diaria">
        <p>
          <strong>R$</strong> {precoDiaria ? precoDiaria.toFixed(2) : "0.00"}
        </p>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Para alugar uma embarcação, faça login!"
      >
        <Alert onClose={handleClose} severity={severidade}variant="filled" sx={{ width: "100%" }}>
          {mensagem}
        </Alert>
      </Snackbar>

      <div className="inputs-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="">
            <DatePicker
              label="Check In"
              defaultValue={hoje}
              disablePast
              views={["year", "month", "day"]}
              value={checkin}
              onChange={(novaData) => setCheckin(novaData)}
              format="DD/MM/YYYY"
            />
          </DemoItem>
          <DemoItem label="">
            <DatePicker
              label="Check Out"
              defaultValue={hoje}
              disablePast
              views={["year", "month", "day"]}
              value={checkout}
              onChange={handleCheckoutChange}
              format="DD/MM/YYYY" // Formato da data (dia/mês/ano)
            />
          </DemoItem>
        </LocalizationProvider>
      </div>

      <div className="resultado">
        <p>
          <strong>Diárias:</strong> {diarias > 0 ? diarias : "0"}
        </p>

        <p>
          <strong>Total:</strong> R$ {precoTotal > 0 ? precoTotal.toFixed(2) : "0.00"}
        </p>
      </div>

      <button type="submit" >Confirmar Aluguel</button>
    </form>
  );
}

export default InfoAluguel;
