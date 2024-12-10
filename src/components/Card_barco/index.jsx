import React, { forwardRef } from 'react';
import './index.css';

const CardBarco = forwardRef(({ user }, ref) => {
  // Desestruturando as propriedades passadas pelo componente pai (ListagemBarcos)
  const {
    url,
    nome,
    cidade,
    avaliacao,
    preco,
    skipperOffered,
    capacidade,
    tamanho,
    categoria,
    quantidadeCabines,
    quantidadeBanheiro,
  } = user;

  return (
    <div className='card-barco' ref={ref}>
      {/* Imagem do barco */}
      <div className="imgBarco-container">
        {url && <img src={url} alt="Imagem do barco" />}
      </div>

      {/* Informações do barco */}
      <div className="barco-info">
        <div className='infos-div'>
          <h3>{nome}</h3>
          <p className="nome-barco">{`${cidade}`}</p>
          
          <div className="extra-info">
            
          
            <p>{capacidade} <strong>pessoas</strong> - {tamanho} <strong>metros</strong> - <strong>Cabines:</strong> {quantidadeCabines} </p>
          </div>
        </div>

        {/* Preço */}
        <div className="div-preco">
          <p>{`R$ ${preco} / dia`}</p>
        </div>

        
      </div>
    </div>
  );
});

export default CardBarco;
