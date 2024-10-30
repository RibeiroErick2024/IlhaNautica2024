// src/Card_barco/index.jsx
import React, { forwardRef } from 'react';
import './index.css';

const Card_barco = forwardRef(({ user }, ref) => {
  return (
    <div className='card-barco' ref={ref}>
      <div className="imgBarco-container">
        <img src={user.url} alt={user.title} />
      </div>
      <div className="barco-info">
        <h3>{user.title}</h3>
        <p>Modelo: {user.model}</p> {/* Exibindo o modelo do barco */}
        <p>Cidade: {user.city}</p> {/* Exibindo a cidade */}
      </div>
    </div>
  );
});

export default Card_barco;
