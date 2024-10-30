import { createBrowserRouter } from "react-router-dom"; 
import Login from "/src/pages/login/Login.jsx";
import Home from "/src/pages/home/Home.jsx";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";
import CadastroEmbarcacoes from "../pages/cadastro/CadastroEmbarcacoes";
import CadastroDescricao from "../components/FormCadastroDescricao";







const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/cadastroEmbarcacoes", element: <CadastroEmbarcacoes/>},
    {path: "/cadastroD", element: <CadastroDescricao/>},
    { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },
    { path: "/home", element: <Home /> },

    
    
   
])

export default router;