import { useState } from "react";

import "../FormCadastroEmbarcacaoContinua/index.css"


const CadastroEmbarcacaoContinua = () => {

  const [usercidade, setUserCidade] = useState("");
  const [userdatasdisponiveis, setUserdatasdisponiveis] = useState("");
  const [userequipamento, setUserEquipamnetos] = useState("");
  const [userporto, setUserPorto] = useState("");
  const [usercapitao, setUserCapitao] = useState("");
  const [isChecked, setIsChecked] = useState(false);


  const handleSubmit = (event) => {

    event.preventDefault();
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="container-cadastro-embarcacoes" >
      {/* <h1 className="titulo-embarcacao">Embarcação</h1> */}
      <form onSubmit={handleSubmit} className="form-section-embarcacoes">
      
        <div className="input-field">
          <input
            type="text"
            placeholder="Cidade"
            required
            value={usercidade}
            onChange={(e) => setUserCidade(e.target.value)}
          />

          <input
            type="text"
            placeholder="Data Disponiveis"
            required
            value={userdatasdisponiveis}
            onChange={(e) => setUserdatasdisponiveis(e.target.value)}
          />

          <input
            type="text"
            placeholder="Equipamentos"
            required
            value={userequipamento}
            onChange={(e) => setUserEquipamnetos(e.target.value)}
          />

          <input
            type="text"
            placeholder="Porto"
            required
            value={userporto}
            onChange={(e) => setUserPorto(e.target.value)}
          />

          <input
            type="text"
            placeholder="Capitao"
            required
            value={usercapitao}
            onChange={(e) => setUserCapitao(e.target.value)}
          />

        </div>
        <div className="topping">
          <input type="checkbox" id="topping" name="topping"
            value="Paneer"
            checked={isChecked}
            onChange={handleOnChange}
          />Equipamento de segurança
        </div>


      </form>
      <div>
        <button className="btn-salvar-embarcacao">
          Salvar
        </button>
      </div>
    </div>




  );
};


export default CadastroEmbarcacaoContinua;
