import React from 'react'
import './index.css'
import Header from '../../components/Header'
import Filtros from '../../components/Filtros'
function index() {
  return (
    <div className='home-container'>
      <Header/>
      <Filtros/>
    </div>
  )
}

export default index
