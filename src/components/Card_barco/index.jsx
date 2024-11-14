// src/Card_barco/index.jsx
import { useEffect, useState } from 'react';
import React, { forwardRef } from 'react';
import './index.css';
import axios from 'axios';

const Card_barco = forwardRef(({ user }, ref) => {
  const [imageSrc, setImageSrc] = useState([])

    // const loadEvent = async (imageIds) => {
    //     try {
    //         const imagePromises = imageIds.map(async (id) => {
    //             const result = await axios.get(`http://localhost:8080/imagem/${id}`, { responseType: 'arraybuffer' });
    //             const base64String = btoa(
    //                 new Uint8Array(result.data)
    //                     .reduce((data, byte) => data + String.fromCharCode(byte), '')
    //             );
    //             return `data:image/png;base64,${base64String}`;
    //         });

    //         // Aguarda todas as promessas serem resolvidas
    //         const images = await Promise.all(imagePromises);
    //         setImageSrc(images); // Atualiza o estado com um array de imagens
    //     } catch (error) {
    //         console.error("Erro ao carregar as imagens:", error);
    //     }
    // };
    const loadEvent = async () => {
      try {
          const result = await axios.get(`http://localhost:8080/imagem/1`, { responseType: 'arraybuffer' });
          const base64String = btoa(
              new Uint8Array(result.data)
                  .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          const formato = result.headers['content-type']
          console.log(result.headers['content-type'])
          setImageSrc(`data:${formato};base64,${base64String}`);
      } catch (error) {
          console.error("Erro ao carregar a imagem:", error);
      }
  };

  // const loadEvent = async () => {
  //     try {
  //         const result = await axios.get('http://localhost:8080/imagem/8', { responseType: 'arraybuffer' });
          
  //         // Supondo que o resultado seja um array de imagens em formato arraybuffer
  //         const base64Images = result.data.map(imageBuffer => {
  //             const base64String = btoa(
  //                 new Uint8Array(imageBuffer)
  //                     .reduce((data, byte) => data + String.fromCharCode(byte), '')
  //             );
  //             return `data:image/svg;base64,${base64String}`;
  //         });
  
  //         setImageSrc(base64Images); // Atualiza o estado com um array de imagens
  //     } catch (error) {
  //         console.error("Erro ao carregar as imagens:", error);
  //     }
  // };

  useEffect(() => {
    loadEvent();  
}, []);

const handleUploadClick = () => {
    // 👇 Click para fazer upload das fotos do input que está escondido
    esconderInputFile.current?.click();
};


  return (
    <div className='card-barco' ref={ref}>
      <div className="imgBarco-container">
        <img src={user.url} alt={user.title} />
            {imageSrc && <img src={imageSrc} alt="Imagem carregada" />} 
      </div>
      <div className="barco-info">
        <h3>{user.title}</h3>
        <p>Modelo: {user.model}</p> {/* Exibindo o modelo do barco */}
        <p>Cidade: {user.city}</p> {/* Exibindo a cidade */}
      </div>
    </div>
  );
});

export default Card_barco;
