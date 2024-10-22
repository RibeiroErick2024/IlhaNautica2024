import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Home from "../pages/Home";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";







const router = createBrowserRouter([
    {path: "/", element: <Login />},
    { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },
    { path: "/home", element: <Home /> },

    
    
   
])

export default router;