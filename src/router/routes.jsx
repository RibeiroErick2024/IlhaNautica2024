import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Home from "../pages/Home";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";
import PerfilEmbarcacao from "../pages/perfilembarcacao/PerfilEmbarcacao";
import CadastroEmbarcacao from "../pages/cadastro/CadastroEmbarcacoes"
import PerfilMarinheiro from "../pages/Marinheiro/PerfilMarinheiro";






const router = createBrowserRouter([
    {path: "/", element: <PerfilMarinheiro />},
    {path: "/", element: <PerfilEmbarcacao />},
    {path: "/", element: <CadastroEmbarcacao />},
    {path: "/", element: <Login />},
    { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },
    { path: "/home", element: <Home /> },

    
    
   
])

export default router;