import React from 'react'
import './index.css'
import Header from '../../components/Header'
import EmbarcacaoGaleria from '../../components/EmbarcacaoGaleria';
import CaracteristicasEmbarcacao from '../../components/CaracteristicasEmbarcacao';
function Embarcacao() {
  const fotosEmbarcacao = [
    'https://images.unsplash.com/photo-1548890016-d70b9be7a22f',
    'https://images.unsplash.com/photo-1564653486614-9359f364f47a', 
    'https://images.unsplash.com/photo-1522862342195-22fefb2a88c5', 
    'https://images.unsplash.com/photo-1575347925981-0eeb8a8b9820', 
    'https://images.unsplash.com/photo-1558991569-30098e3e96e1', 
];

  return (
    <div className='embarcacao-container'>
      <Header />
      <EmbarcacaoGaleria fotos={fotosEmbarcacao}/>
      <div className="caracteristicas-container">
        <CaracteristicasEmbarcacao/>
      </div>
    </div>
  )
}

export default Embarcacao
