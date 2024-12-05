import React, { useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";
import api, { axiosapi } from "../../config/axios";

function InfoAluguel({ precoDiaria, idEmbarcacao }) {
  const hoje = dayjs();
  const ontem = dayjs().subtract(1, "day");
  const { idUsuario, logado } = useAuth();
  const [checkin, setCheckin] = useState(hoje);
  const [checkout, setCheckout] = useState(hoje);
  const [precoTotal, setPrecoTotal] = useState(0);
  const [diarias, setDiarias] = useState(0); // Adicionado para exibir o número de diárias
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    // event.preventDefault();
    console.log(data);
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
      console.log(agendamento);
      const response = await axiosapi.post(`agendamento/criar`, agendamento);
      console.log("Agendamento ok", response);
      // setCadastrado(true)
      alert("Agendamento ok");
    } catch (error) {
      // setCadastrado(false)
      console.log("Erro ao enviar dados ao back", error.response);
    } finally {
      // setIsSubmitting(false); // Reabilita o botão após a operação
    }

    alert(
      `Reserva confirmada!\nCheck-in: ${checkin.format("DD/MM/YYYY")}\nCheck-out: ${checkout.format(
        "DD/MM/YYYY"
      )}\nDiárias: ${diarias}\nTotal: R$ ${precoTotal.toFixed(2)}`
    );
  };

  // const handleCheckinChange = (e) => {

  //   setCheckin(e.target.value);
  // };

  const handleCheckoutChange = (e) => {
    // setCheckout(e.target.value);
    // calcularPrecoTotal(checkin, checkout);
  };

  // const calcularPrecoTotal = (dataCheckin, dataCheckout) => {
  //   if (!dataCheckin || !dataCheckout) return; // Verifica se ambas as datas estão preenchidas

  //   const checkinDate = new Date(dataCheckin);
  //   const checkoutDate = new Date(dataCheckout);

  //   // Calcula a diferença em milissegundos
  //   const diffTime = checkoutDate - checkinDate;

  //   if (diffTime > 0) {
  //     const diffDays = diffTime / (1000 * 60 * 60 * 24); // Converte para dias
  //     setPrecoTotal(diffDays * (precoDiaria || 0)); // Usando precoDiaria com valor default de 0
  //     setDiarias(diffDays); // Atualiza o número de diárias
  //   } else {
  //     setPrecoTotal(0); // Caso a data de checkout seja anterior à de checkin
  //     setDiarias(0);
  //   }
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="info-aluguel-container">
      <h3>Calcule sua Reserva</h3>

      <div className="inputs-container">
        <label htmlFor="checkin">Check-in:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="DatePicker">
            <DatePicker
              label="Check In"
              defaultValue={hoje}
              disablePast
              views={["year", "month", "day"]}
              value={checkin}
              onChange={(novaData) => {
                setCheckin(novaData);
              }}
            />
          </DemoItem>
          <DemoItem label="DatePicker">
            <DatePicker
              label="Check Out"
              defaultValue={hoje}
              disablePast
              views={["year", "month", "day"]}
              value={checkout}
              onChange={(novaData) => {
                setCheckout(novaData);
                const diffTime = checkin.diff(checkout, "day"); // Diferença em dias
                console.log(diffTime);
                if (diffTime > 0) {
                  setPrecoTotal(diffTime * precoDiaria); // Calcula o preço total
                  setDiarias(diffTime); // Atualiza o número de diárias
                } else {
                  setPrecoTotal(0); // Se o checkout for anterior ao checkin
                  setDiarias(0);
                }
              }}
              //  onChange={(novaData) => setCheckout(novaData)}
            />
          </DemoItem>
        </LocalizationProvider>
        {/* <input
          type="date"
          id="checkin"
          value={checkin}
          {...register("datainicio", {
            required: "Campo obrigatório",
            min: {
              value: new Date().toISOString().split("T")[0],
              message: "Escolha não pode ser menor que o dia atual",
            },
          })}
          onChange={handleCheckinChange}
          error={!!errors.datainicio}
          helperText={errors.datainicio?.message}
        /> */}

        {/* <label htmlFor="checkout">Check-out:</label>
        <input
          type="date"
          id="checkout"
          value={checkout}
          {...register("datafinal", { required: "Campo obrigatório" })}
          onChange={handleCheckoutChange}
        /> */}
      </div>

      <div className="resultado">
        <p>Preço da diária: R$ {precoDiaria ? precoDiaria.toFixed(2) : "0.00"}</p>
        <p>Diárias: {diarias}</p>
        <p>Total: R$ {precoTotal.toFixed(2)}</p>
      </div>

      <button
        type="submit"
         disabled={!logado} onClick={() => alert("Logar")}
      >
        Confirmar Aluguel
      </button>
    </form>
  );
}

export default InfoAluguel;
