import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";






const router = createBrowserRouter([
    {path: "/", element: <Login />},
     { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },

    
    
   
])

export default router;