import React from 'react';
import './index.css'; // Importe seu CSS

// Componente EmbarcacaoGaleria recebe 'imagens' e 'nome' como propriedades
function EmbarcacaoGaleria({ imagens = [], nome, usuarioNome }) {

  return (
    <div className='container-fotos'>
      <div className="div-fabricante-modelo-embarcacao">
        <h2>{nome}</h2>
      </div>
      <div className="galeria-container">
        {/* Verifica se o array de imagens tem pelo menos uma imagem antes de tentar exibir a imagem grande */}
        {imagens.length > 0 && (
          <div className="div-img-grande">
            <img src={imagens[0]} alt="Imagem Grande" className="foto-grande" />
          </div>
        )}

        {/* Verifica se há mais de uma imagem antes de renderizar as imagens pequenas */}
        {imagens.length > 1 && (
          <div className="div-img-pequena">
            {imagens.slice(1).map((foto, index) => (
              <div key={index} className="fotos">
                <img src={foto} alt={`Imagem Pequena ${index + 1}`} className="foto-pequena" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="div-usuario-embarcacao">
        <h3> {usuarioNome}</h3> {/* Exibe o nome do usuário */}
      </div>
    </div>
  );
}

export default EmbarcacaoGaleria;
