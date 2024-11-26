import React from 'react'
import './index.css'

function CaracteristicasEmbarcacao() {
  return (
    <div className='caract-container'>
      <div className='caracteristica'>
        <h2>Sobre</h2>
        <div className="div-caracteristicas-barco">
          <p>
            Skipper/Capitão: Um profissional para comandar o barco, ideal para quem não tem habilitação náutica ou quer relaxar sem se preocupar em pilotar.
            Equipamentos de pesca: Varas, anzóis e outros itens para quem deseja pescar durante o passeio.
            Equipamentos de mergulho/snorkeling: Máscaras, snorkels, nadadeiras e cilindros de oxigênio para explorar a vida marinha.
            Barco auxiliar (dinghy): Um bote menor para acessar locais de difícil acesso para a embarcação principal ou para desembarcar em praias.
            Suprimentos de alimentos e bebidas: Serviço de entrega de comidas e bebidas personalizadas para o passeio.
            Equipamento de esporte aquático: Pranchas de stand-up paddle, caiaques, esquis aquáticos ou equipamentos de wakeboard.
            Roupas e acessórios de segurança: Roupas de mergulho, coletes salva-vidas e outros acessórios para maior segurança e conforto.
            Wi-Fi a bordo: Conexão à internet para quem deseja estar conectado durante o passeio.
          </p>
          </div>
      </div>
      
      <div className='caracteristica'>
        <h2>Descrição</h2>
        <div className="div-caracteristicas-barco">
        <p>Este iate/lancha/veleiro (especifique o tipo) oferece o equilíbrio perfeito entre conforto, luxo e desempenho. Com capacidade para até [número de pessoas], é ideal para passeios em família, grupos de amigos ou até mesmo eventos privados.</p> </div>
      </div>

      <div className='caracteristica'>
        <h2>Regras de uso</h2>
        <div className="div-caracteristicas-barco">
        <p>
          Regras de Uso do Barco:
          
          Capacidade máxima: O barco acomoda até [número de pessoas]. Respeitar o limite de capacidade é essencial para garantir a segurança de todos a bordo.
          
          Operação do Barco: Somente indivíduos com habilitação náutica válida podem operar o barco. Caso o aluguel inclua um capitão (skipper), apenas ele poderá conduzir a embarcação.
          
          Segurança a Bordo: Coletes salva-vidas estão disponíveis para todos os passageiros e devem ser usados em caso de necessidade. É proibido saltar do barco enquanto ele estiver em movimento.
          
          Álcool e Drogas: O consumo de bebidas alcoólicas deve ser moderado, e é proibido o uso de drogas ilegais a bordo. O capitão tem o direito de interromper o passeio caso qualquer atividade coloque a segurança em risco.
          
          Respeito ao Meio Ambiente: É proibido descartar qualquer tipo de lixo no mar. Utilize os recipientes disponíveis no barco para descarte de resíduos.
          
          Equipamentos e Danos: Qualquer equipamento fornecido (ex: snorkels, pranchas) deve ser usado com cuidado. Danos causados ao barco ou aos equipamentos são de responsabilidade do locatário.
          
          Animais a Bordo: Verifique com a empresa sobre a política para animais de estimação, pois nem todos os barcos permitem a presença deles.
          
          Horários de Retorno: Respeitar o horário de retorno é essencial para evitar cobranças adicionais. Em caso de atraso, comunique o responsável pelo aluguel com antecedência.
          
          Clima e Cancelamentos: Em caso de mau tempo, a empresa pode remarcar o passeio ou oferecer reembolso, dependendo da política de cancelamento.
        </p>
        </div>
      </div>
    </div>
  )
}

export default CaracteristicasEmbarcacao
