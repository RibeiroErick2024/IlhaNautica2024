
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {


const [editando, setEditando] = useState(true)
const edit = false

const [isStepValid, setIsStepValid] = useState([false, false, false, false]); 
const [activeStep, setActiveStep] = useState(0);
const [gatilho, setGatilho]= useState(false)

 const definirValidadeEtapa = (indiceEtapa, statusValidacao) => {
    const etapasAtualizadas = [...isStepValid]; // Cria uma cópia do estado atual
    etapasAtualizadas[indiceEtapa] = statusValidacao; // Atualiza o valor da etapa específica
    setIsStepValid(etapasAtualizadas); // Define o novo estado
  };

    return(
        <GlobalContext.Provider value={{editando, setEditando, edit,  activeStep,
            setActiveStep,
            isStepValid,
            definirValidadeEtapa, gatilho, setGatilho}}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useContextGlobal = () => useContext(GlobalContext);
