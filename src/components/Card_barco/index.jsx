import { useEffect, useState } from 'react';
import React, { forwardRef } from 'react';
import './index.css';
import axios from 'axios';

const Card_barco = forwardRef(({ user }, ref) => {
  const [imageSrc, setImageSrc] = useState(null);  // Inicializa a imagem como null
  const [barcos, setBarcos] = useState([]);

  const loadEvent = async () => {
    try {
      // Requisição para pegar os dados dos barcos
      const resultCard = await axios.get(`http://localhost:8080/embarcacao/`, { responseType: 'json' });

      // Mostrando os dados para debug
      console.log(resultCard.data);

      // Pegando o ID da imagem da primeira embarcação (exemplo)
      const idImagem = resultCard.data[0].imagem[0].id_imagem; // Pegando a primeira imagem
      const resultImage = await axios.get(`http://localhost:8080/imagem/${idImagem}`, { responseType: 'arraybuffer' });

      // Convertendo a imagem para Base64
      const base64String = btoa(
        new Uint8Array(resultImage.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      );

      // Pegando o tipo de imagem
      const formato = resultImage.headers['content-type'];
      setImageSrc(`data:${formato};base64,${base64String}`);  // Atualiza o estado com a imagem em Base64

      // Formatando os dados dos barcos
      const formattedData = resultCard.data.map(barco => ({
        ...barco,
        modelo: barco.fabricante,  // Usando 'fabricante' como 'modelo'
        cidade: barco.endereco.cidade,  // Usando a cidade do endereço
        nome: barco.nome || 'Sem descrição',  // Usando 'nome' ou 'Sem descrição'
        anoFabricacao: barco.anoFabricacao || 2020,  // Ano de fabricação
        fabricante: barco.fabricante || "Brasil",  // Fabricante
        potencia: barco.potencia || "Não possui",
        tamanho: barco.tamanho || 300.0,
        capacidade: barco.capacidade || 20,
        categoria: barco.categoria || "Luxo",
        quantidadeCabines: barco.quantidadeCabines || 5,
        quantidadeBanheiro: barco.quantidadeBanheiro || 2,
        pet: barco.pet? "Tem": "Não tem",
        preco: barco.preco || "Não disponibilizado", // Preço
        url: `data:${formato};base64,${base64String}`  // Exibindo a imagem convertida para base64
      }));

      // Atualizando o estado dos barcos
      setBarcos(formattedData);

    } catch (error) {
      console.error("Erro ao carregar os dados ou imagem:", error);
    }
  };

  useEffect(() => {
    loadEvent();  // Chama a função ao carregar o componente
  }, []);

  return (
    <div className='card-barco' ref={ref}>
      <div className="imgBarco-container">
        {/* Exibindo a imagem carregada */}
        {imageSrc && <img src={imageSrc} alt="Imagem do barco" />}
      </div>

      <div className="barco-info">
        {barcos.length === 0 ? (
          <div>Carregando barcos...</div>  // Mostra um texto enquanto os barcos não são carregados
        ) : (
          barcos.map((barco, index) => (
            <div key={index} className="barco-card">
              <h3>{barco.nome}</h3>
              <p>Modelo: {barco.model}</p>
              <p>Cidade: {barco.cidade}</p>
              <p>Ano de Fabricação: {barco.anoFabricacao}</p>
              <p>Fabricante: {barco.fabricante}</p>
              <p>Potência: {barco.potencia} HP</p>
              <p>Tamanho: {barco.tamanho} metros</p>
              <p>Capacidade: {barco.capacidade} pessoas</p>
              <p>Categoria: {barco.categoria}</p>
              <p>Cabines: {barco.quantidadeCabines}</p>
              <p>Banheiros: {barco.quantidadeBanheiro}</p>
              <p>Preço: {barco.preco} R$</p>
              <p>Pet: {barco.pet} R$</p>
              {/* Exibindo a imagem de cada barco, caso tenha */}
              {barco.url && <img src={barco.url} alt="Imagem do barco" />}
            </div>
          ))
        )}
      </div>
    </div>
  );
});

export default Card_barco;
