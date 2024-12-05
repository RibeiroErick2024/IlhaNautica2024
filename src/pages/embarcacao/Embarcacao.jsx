import React from 'react'
import './Embarcacao.css'
import Header from '../../components/Header'
import EmbarcacaoGaleria from '../../components/EmbarcacaoGaleria';
import CaracteristicasEmbarcacao from '../../components/CaracteristicasEmbarcacao';
import InfoAluguel from '../../components/CardInfoAluguel';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Embarcacao(props) {

  const location = useLocation();
  
  // Access the passed state.id safely
  const barcoId = location.state?.id;  // Use optional chaining in case `state` is undefined
  
  console.log(barcoId);
  async function pegarInfo(id){
    try{
      const resultCard = await axios.get(`http://localhost:8080/embarcacao/${id}`, { responseType: 'json' });
      console.log(resultCard)
    }catch(error){
      console.log( "Erro ao tentar pegar dados do barcos", error)
    }
  }
  pegarInfo(barcoId)
  return (
    <div className='embarcacao-container'>
      <Header />
      {/* <EmbarcacaoGaleria /> */}

      <div className="infos-container">

          <CaracteristicasEmbarcacao/>
          <InfoAluguel/>
        </div>
      </div>
  )
}

export default Embarcacao
