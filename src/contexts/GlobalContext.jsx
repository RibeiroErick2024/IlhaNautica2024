
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [editando, setEditando] = useState(true);

    return(
        <GlobalContext.Provider value={{editando, setEditando}}>
            {children}
        </GlobalContext.Provider>
    )
}
export const useContextGlobal = () => useContext(GlobalContext);
