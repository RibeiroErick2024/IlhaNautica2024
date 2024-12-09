import React, { useEffect, useState } from 'react';
import './EmbarcacaoPageAluguel.css';
import Header from '../../components/Header';
import EmbarcacaoGaleria from '../../components/EmbarcacaoGaleria';
import CaracteristicasEmbarcacao from '../../components/CaracteristicasEmbarcacao';
import InfoAluguel from '../../components/CardInfoAluguel';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { axiosapi } from '../../config/axios';

function Embarcacao() {
  const location = useLocation(); // Obtém a localização atual da navegação
  const barcoId = location.state?.id; // Acessa o ID do barco passado no estado
  // const url = "http://localhost:8080"; // URL base para as requisições

  const [dadosBarco, setDadosBarco] = useState({}); // Estado para armazenar todos os dados do barco

  // Função para transformar imagem em Base64
  const transformarImagem = async (id) => {
    try {
      const resultImage = await axiosapi.get(`/imagem/${id}`, { responseType: 'arraybuffer' });
      const base64String = btoa(
        new Uint8Array(resultImage.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      const formato = resultImage.headers['content-type'];
      return `data:${formato};base64,${base64String}`;
    } catch (error) {
      console.error("Erro ao tentar converter imagem:", error);
      return null;
    }
  };

  useEffect(() => {
    async function pegarInfo(id) {
      try {
        const usuarioInfo = await axiosapi.get(`/usuario/embarcacao/${id}`, { responseType: 'json' });
      } catch (error) {
        console.log("Error ao tentar pegar usuario", error)
      }
      try {
        // Realiza uma requisição para obter os dados da embarcação
        const resultCard = await axiosapi.get(`/embarcacao/${id}`, { responseType: 'json' });
        console.log(resultCard.data)
        // Extrai os IDs das imagens do campo "imagem" da resposta
        const imagensArray = resultCard.data.imagem.map(imagem => imagem.id_imagem);

        // Converte as imagens para Base64
        const imagensBase64 = await Promise.all(imagensArray.map(id => transformarImagem(id)));

        // Organiza os dados em um único objeto
        const dados = {
          id: resultCard.data.idEmbarcacao,
          nome: `${resultCard.data.fabricante} ${resultCard.data.nome} (${resultCard.data.anoFabricacao})`,
          // cidade: resultCard.data.endereco.cidade,
          potencia: resultCard.data.potencia || "Não informado",
          tamanho: resultCard.data.tamanho || "não informado",
          capacidade: resultCard.data.capacidade || 20,
          categoria: resultCard.data.categoria || "Não foi possível carregar...",
          quantidadeCabines: resultCard.data.quantidadeCabines || 5,
          quantidadeBanheiro: resultCard.data.quantidadeBanheiro || 2,
          pet: resultCard.data.pet ? "Tem" : "Não tem",
          preco: resultCard.data.preco || "Não disponibilizado",
          imagensBase64, // Imagens em Base64
          // usuarioId: !resultCard.data.usuario.id?  resultCard.data.usuario.id : "usuarioInfo.data.id", // ID do usuário
          // usuarioNome: resultCard.data.usuario.nomeCompleto, // Nome completo do usuário
          regras: resultCard.data.regras,
          descricao: resultCard.data.descricao,
          ObjetoDados: 'sim'
        };

        // Atualiza o estado com todos os dados
        setDadosBarco(dados);

      } catch (error) {
        console.log("Erro ao tentar pegar dados do barco", error);
      }

    }

    // Verifica se o ID do barco existe e faz a requisição
    if (barcoId) {
      pegarInfo(barcoId); // Chama a função para pegar os dados do barco com base no ID
    }
  }, [barcoId]);

  console.log(dadosBarco)

  return (
    <div className='embarcacao-container'>
      <Header />
      {/* Passa todos os dados do barco para o componente EmbarcacaoGaleria */}
      <EmbarcacaoGaleria
        imagens={dadosBarco.imagensBase64}
        nome={dadosBarco.nome}
        usuarioNome={dadosBarco.usuarioNome}
      />
      <div className="infos-container">
        <CaracteristicasEmbarcacao
          Caracteristica={{
            potencia: dadosBarco.potencia,
            tamanho: dadosBarco.tamanho,
            capacidade: dadosBarco.capacidade,
            quantidadeCabines: dadosBarco.quantidadeCabines,
            quantidadeBanheiro: dadosBarco.quantidadeBanheiro,
            pet: dadosBarco.pet,
            descricao: dadosBarco.descricao,
            regrasUso: dadosBarco.regras
          }}
        />
        <InfoAluguel precoDiaria={dadosBarco.preco} idEmbarcacao={barcoId}/>

      </div>
    </div>
  );
}

export default Embarcacao;
