import React, { useState } from 'react';
import './index.css';

function InfoAluguel({ precoDiaria }) {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [precoTotal, setPrecoTotal] = useState(0);
  const [diarias, setDiarias] = useState(0); // Adicionado para exibir o número de diárias

  const handleCheckinChange = (e) => {
    setCheckin(e.target.value);
  };

  const handleCheckoutChange = (e) => {
    setCheckout(e.target.value);
    calcularPrecoTotal(checkin, e.target.value);
  };

  const calcularPrecoTotal = (dataCheckin, dataCheckout) => {
    if (!dataCheckin || !dataCheckout) return; // Verifica se ambas as datas estão preenchidas

    const checkinDate = new Date(dataCheckin);
    const checkoutDate = new Date(dataCheckout);

    // Calcula a diferença em milissegundos
    const diffTime = checkoutDate - checkinDate;

    if (diffTime > 0) {
      const diffDays = diffTime / (1000 * 60 * 60 * 24); // Converte para dias
      setPrecoTotal(diffDays * (precoDiaria || 0)); // Usando precoDiaria com valor default de 0
      setDiarias(diffDays); // Atualiza o número de diárias
    } else {
      setPrecoTotal(0); // Caso a data de checkout seja anterior à de checkin
      setDiarias(0);
    }
  };

  return (
    <div className="info-aluguel-container">
      <h3>Calcule sua Reserva</h3>

      <div className="inputs-container">
        <label htmlFor="checkin">Check-in:</label>
        <input
          type="date"
          id="checkin"
          value={checkin}
          onChange={handleCheckinChange}
        />

        <label htmlFor="checkout">Check-out:</label>
        <input
          type="date"
          id="checkout"
          value={checkout}
          onChange={handleCheckoutChange}
        />
      </div>

      <div className="resultado">
        <p>Preço da diária: R$ {precoDiaria ? precoDiaria.toFixed(2) : '0.00'}</p>
        <p>Diárias: {diarias}</p>
        <p>Total: R$ {precoTotal.toFixed(2)}</p>
      </div>

      <button
        onClick={() =>
          alert(
            `Reserva confirmada!\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nDiárias: ${diarias}\nTotal: R$ ${precoTotal.toFixed(2)}`
          )
        }
        disabled={!checkin || !checkout || precoTotal === 0}
      >
        Confirmar Aluguel
      </button>
    </div>
  );
}

export default InfoAluguel;
