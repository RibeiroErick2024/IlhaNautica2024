import React, { useState, useEffect } from 'react';
import './index.css';

import jet from '../../assets/jet.png';
import lancha from '../../assets/speedboat.png';
import veleiro from '../../assets/sailboat.png';
import all from '../../assets/all.png';
import iate from '../../assets/yatch.png';
import { useContextGlobal } from '../../contexts/GlobalContext';

function Filtros() {
  const [isVisible, setIsVisible] = useState(false);
  const {categoriaSelecionada, setCategoriaSelecionada} = useContextGlobal(); 
  // Controla a animação de entrada quando o componente é montado
  useEffect(() => {
    setIsVisible(true); // Habilita a animação
  }, []);

  return (
    <div className={`filtro-container ${isVisible ? 'visible' : 'hidden'}`}>
       <button className="filtro-item" onClick={() => setCategoriaSelecionada('Jet Ski')}>
        <img src={jet} alt="Jet Ski" />
        <span>Jet Ski</span>
      </button>
      <button className="filtro-item" onClick={() => setCategoriaSelecionada('Lancha')}>
        <img src={lancha} alt="Lancha" />
        <span>Lancha</span>
      </button>
      <button className="filtro-item" onClick={() => setCategoriaSelecionada(null)}>
        <img src={all} alt="Todos" />
        <span>Todos</span>
      </button>
      <button className="filtro-item" onClick={() => setCategoriaSelecionada('Veleiro')}>
        <img src={veleiro} alt="Veleiro" />
        <span>Veleiro</span>
      </button>
      <button className="filtro-item" onClick={() => setCategoriaSelecionada('Iate')}>
        <img src={iate} alt="Iate" />
        <span>Iate</span>
      </button>
    </div>
  );
}

export default Filtros;
