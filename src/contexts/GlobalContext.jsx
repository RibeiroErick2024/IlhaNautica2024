
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [editando, setEditando] = useState(false)

const [locador, setLocador] = useState(false)
const [iconeCategoria, setIconeCategoria] = useState("Jet Ski")


    return(
        <GlobalContext.Provider value={{editando, setEditando, 
            locador, setLocador, iconeCategoria, setIconeCategoria}}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useContextGlobal = () => useContext(GlobalContext);
