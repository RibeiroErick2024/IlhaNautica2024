
import React, { forwardRef } from 'react';
import './index.css';

const Card_barco = forwardRef(({ user }, ref) => {
  // Desestruturando as propriedades passadas pelo componente pai (ListagemBarcos)
  const {
    url,
    nome,
    // cidade,
    potencia,
    tamanho,
    capacidade,
    categoria,
    quantidadeCabines,
    quantidadeBanheiro,
    preco,
    pet
  } = user;

  return (
    <div className='card-barco'  ref={ref}>
      <div className="imgBarco-container">
        {/* Exibindo a imagem carregada */}
        {url && <img src={url} alt="Imagem do barco" />}
      </div>

      <div className="barco-info">
        <h3>{nome}</h3>
        {/* <p>Cidade: {cidade}</p> */}
        <p>Potência: {potencia} HP</p>
        <p>Tamanho: {tamanho} metros</p>
        <p>Capacidade: {capacidade} pessoas</p>
        <p>Categoria: {categoria}</p>
        <p>Cabines: {quantidadeCabines}</p>
        <p>Banheiros: {quantidadeBanheiro}</p>
        <p>Preço: {preco} R$</p>
        <p>Pet: {pet}</p>
      </div>
    </div>
  );
});

export default Card_barco;
