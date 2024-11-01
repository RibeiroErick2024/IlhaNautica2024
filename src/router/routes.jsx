import { createBrowserRouter } from "react-router-dom"; 
import Login from "/src/pages/login/Login.jsx";
import Home from "/src/pages/home/Home.jsx";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";
import CadastroDescricao from "../components/FormCadastroDescricao";
import CadastroEmbarcacoes from "../components/FormCadastroEmbarcacao";
import CadastroLocador from "../pages/cadastroLocador";







const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/cadastroLocador", element: <CadastroLocador/>},
    {path: "/cadastroD", element: <CadastroDescricao/>},
    {path: "/cadastroEmbarcacoes", element: <CadastroEmbarcacoes/>},
    { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },
    { path: "/home", element: <Home /> },

    
    
   
])

export default router;