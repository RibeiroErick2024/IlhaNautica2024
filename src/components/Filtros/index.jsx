import React from 'react'
import './index.css'

function Filtros() {
  return (
    <div className="filtro-container">
      <div className="div-inputs-pesquisa">
        <h3>Onde?</h3>
        <input placeholder='Pesquisar por cidade' type="search" name="pesquisa" id="input-pesquisa-cidade" />
      </div>

      <div className="div-inputs-pesquisa">
        <h3>Categoria</h3>

        <div className="checkbox-container">
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox1" defaultChecked />
            <label htmlFor="checkbox1">Iate</label>
          </div>

          <div className="checkbox-item">
            <input type="checkbox" id="checkbox2" defaultChecked/>
            <label htmlFor="checkbox2">Jetski</label>
          </div>

          <div className="checkbox-item">
            <input type="checkbox" id="checkbox3" defaultChecked/>
            <label htmlFor="checkbox3">Lancha</label>
          </div>

          <div className="checkbox-item">
            <input type="checkbox" id="checkbox4" defaultChecked/>
            <label htmlFor="checkbox4">Veleiro</label>
          </div>
        </div>
      </div>

    

    </div>
  );
}



                    export default Filtros
