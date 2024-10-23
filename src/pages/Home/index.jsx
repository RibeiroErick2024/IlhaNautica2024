import React from 'react'
import './index.css'
import Header from '../../components/Header'
import Filtros from '../../components/Filtros'
import ListagemBarcos from '../../components/Listagem_barcos'
function Home() {
  return (
    <div className='home-container'>
        <Header/>
      <div className='conteudo-container'>
        <Filtros/>
        <ListagemBarcos/>
      </div>
    </div>
  )
}

export default Home
