
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [editando, setEditando] = useState(true)
const edit = false

const [isStepValid, setIsStepValid] = useState([false, false, false, false]); 
const [activeStep, setActiveStep] = useState(0);

const definirValidadeEtapa = (indiceEtapa, statusValidacao) => {
  const etapasAtualizadas = [...isStepValid];
  etapasAtualizadas[indiceEtapa] = statusValidacao;
  setIsStepValid(etapasAtualizadas);
};

    return(
        <GlobalContext.Provider value={{editando, setEditando, edit, activeStep, setActiveStep, setEtapaAtiva, definirValidadeEtapa}}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useContextGlobal = () => useContext(GlobalContext);
