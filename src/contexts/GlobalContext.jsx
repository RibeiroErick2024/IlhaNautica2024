
import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [editando, setEditando] = useState(false);

    return(
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    )
}
