import React from 'react';
import './index.css'; // Importe seu CSS

function EmbarcacaoGaleria({ fotos }) {
  return (
    <div className='container-fotos'>
      <div className="div-fabricante-modelo-embarcacao">
        <h2>Fabricante - modelo</h2>
      </div>
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

      <div className="div-usuario-embarcacao">
        <h3>é us guri</h3>
      </div>
    </div>
  );
}

export default EmbarcacaoGaleria;
