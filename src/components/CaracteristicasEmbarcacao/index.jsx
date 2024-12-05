import React from 'react'
import './index.css'

function CaracteristicasEmbarcacao({ Caracteristica }) {
  if (!Caracteristica) {
    return <p>Carregando características...</p>;
  }
  console.log(Caracteristica)
  return (
    <div className='caract-container'>
      <div className='caracteristica'>
        <h2>características</h2>
        <div className="caracteristica">
          <div className="div-caracteristicas-barco">
            <div>
              <p><strong>Potência:</strong> {Caracteristica.potencia}hp</p>
              <p><strong>Tamanho:</strong> {Caracteristica.tamanho}m</p>
              <p><strong>Capacidade:</strong> {Caracteristica.capacidade} pessoas</p>
            </div>
            <div>
              <p><strong>Banheiros:</strong> {Caracteristica.quantidadeBanheiro}</p>
              <p><strong>Cabines:</strong> {Caracteristica.quantidadeCabines}</p>
              <p>
                <strong>Pet Friendly:</strong>
                {Caracteristica.pet === "Tem" ? (
                  <img src='../../../public/pawprint.png' alt='Pet Friendly' />
                ) : (
                  <img src='../../../public/no-pets-allowed-icon.png' alt='Pet Not Allowed' />
                )}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='caracteristica'>
        <h2>Descrição</h2>
        <div className='div-descricao-barco'>
          {Caracteristica.descricao ? (
            <p>{Caracteristica.descricao}</p>
          ) : (
            <p>Carregando descrição...</p>
          )}
        </div>
      </div>

      <div className='caracteristica'>
        <h2>Regras de uso</h2>
        <div className="div-regras-uso-barco">
        {Caracteristica.regrasUso ? (
          <p>{Caracteristica.regrasUso} </p>
        ) : (
          <p>Carregando descrição...</p>
        )}
        </div>
      </div>
    </div>
  )
}

export default CaracteristicasEmbarcacao
