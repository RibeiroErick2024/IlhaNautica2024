import React, { useState } from 'react';
import './Home.css'; // Seu CSS
import HeaderPrincipal from '../../components/Header'; // Componente Header
import Filtros from '../../components/Filtros'; // Componente Filtros
import ListagemBarcos from '../../components/Listagem_barcos'; // Componente Listagem de Barcos

function Home() {
  const [isFiltroVisible, setIsFiltroVisible] = useState(false);

  // Função para alternar a visibilidade do filtro
  const toggleFiltro = () => {
    setIsFiltroVisible(prev => !prev);
  };

  return (
    <div className='home-container'>
      <HeaderPrincipal toggleFiltro={toggleFiltro} />
      <div className='conteudo-container'>
        {/* Filtro visível somente se o estado for verdadeiro */}
        <div className={`filtro-container ${isFiltroVisible ? 'visible' : ''}`}>
          <Filtros />
        </div>
        <ListagemBarcos />
      </div>
    </div>
  );
}

export default Home;
