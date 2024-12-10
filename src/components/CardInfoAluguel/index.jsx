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

function InfoAluguel({ precoDiaria, idEmbarcacao }) {
  const hoje = dayjs();
  const { idUsuario, logado, token } = useAuth();
  const [checkin, setCheckin] = useState(hoje);
  const [checkout, setCheckout] = useState(hoje);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [diarias, setDiarias] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const agendamento = {
      datainicio: checkin.format("YYYY-MM-DD"),
      datafinal: checkout.format("YYYY-MM-DD"),
      status: "Confirmado",
      usuario: {
        id: idUsuario,
      },
      embarcacao: {
        idEmbarcacao: idEmbarcacao,
      },
    };
    try {
      const response = await axiosapi.post("agendamento/criar", agendamento);
      alert("Agendamento ok");
    } catch (error) {
      console.log("Erro ao enviar dados ao back", error.response);
    }

    alert(
      `Reserva confirmada!\nCheck-in: ${checkin.format(
        "DD/MM/YYYY"
      )}\nCheck-out: ${checkout.format("DD/MM/YYYY")}\nDiárias: ${diarias}\nTotal: R$ ${precoTotal.toFixed(2)}`
    );
  };

  const handleCheckoutChange = (novaData) => {
    setCheckout(novaData);
    const diffTime = novaData.diff(checkin, "day"); // Diferença em dias
    if (diffTime > 0) {
      setPrecoTotal(diffTime * precoDiaria); // Calcula o preço total
      setDiarias(diffTime); // Atualiza o número de diárias
    } else {
      setPrecoTotal(0); // Se o checkout for anterior ao checkin
      setDiarias(0);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="info-aluguel-container">
      <div className="div-diaria">
        <p>
          <strong>R$</strong> {precoDiaria ? precoDiaria.toFixed(2) : "0.00"}
        </p>
      </div>

      <div className="inputs-container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="">
            <DatePicker
              label="Check In"
              defaultValue={hoje}
              disablePast
              views={["year", "month", "day"]} // Exibe ano, mês e dia
              value={checkin}
              onChange={(novaData) => setCheckin(novaData)}
              format="DD/MM/YYYY" // Formato da data (dia/mês/ano)
            />
          </DemoItem>
          <DemoItem label="">
            <DatePicker
              label="Check Out"
              defaultValue={hoje}
              disablePast
              views={["year", "month", "day"]} // Exibe ano, mês e dia
              value={checkout}
              onChange={handleCheckoutChange}
              format="DD/MM/YYYY" // Formato da data (dia/mês/ano)
            />
          </DemoItem>
        </LocalizationProvider>
      </div>

      <div className="resultado">
        <p><strong>Diárias:</strong> {diarias}</p>
        <p><strong>Total:</strong> R$ {precoTotal.toFixed(2)}</p>
      </div>

      <button type="submit" disabled={!token} onClick={() => alert("Logar")}>
        Confirmar Aluguel
      </button>
    </form>
  );
}

export default InfoAluguel;
