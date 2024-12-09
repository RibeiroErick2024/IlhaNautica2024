import React, { useState, useEffect } from 'react';
import './index.css';

import jet from '../../assets/jet.png';
import lancha from '../../assets/speedboat.png';
import veleiro from '../../assets/sailboat.png';
import all from '../../assets/all.png';
import iate from '../../assets/yatch.png';

function Filtros() {
  const [isVisible, setIsVisible] = useState(false);

  // Controla a animação de entrada quando o componente é montado
  useEffect(() => {
    setIsVisible(true); // Habilita a animação
  }, []);

  return (
    <div className={`filtro-container ${isVisible ? 'visible' : 'hidden'}`}>
      <img src={jet} alt="Jet Ski" />
      <img src={lancha} alt="Lancha" />
      <img src={all} alt="Todos" />
      <img src={veleiro} alt="Veleiro" />
      <img src={iate} alt="Iate" />
    </div>
  );
}

export default Filtros;
