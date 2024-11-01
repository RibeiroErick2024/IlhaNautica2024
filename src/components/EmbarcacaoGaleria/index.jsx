import React from 'react';
import './index.css'; // Importe seu CSS

function EmbarcacaoGaleria({ fotos }) {
  return (
    <div className="galeria-container">
      <div className="div-img-grande">
        <img src={fotos[0]} alt="Imagem Grande" className="foto-grande" />
      </div>
      <div className="div-img-pequena">
        {fotos.slice(1).map((foto, index) => (
          <div key={index} className="fotos">
            <img src={foto} alt={`Imagem Pequena ${index + 1}`} className="foto-pequena" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmbarcacaoGaleria;
