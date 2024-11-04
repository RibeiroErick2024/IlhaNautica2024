import { createBrowserRouter } from "react-router-dom"; 
import Login from "/src/pages/login/Login.jsx";
import Home from "/src/pages/home/Home.jsx";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";
import CadastroEmbarcacoes from "../components/FormCadastroEmbarcacao";
import CadastroLocador from "../pages/cadastroLocador";
import FormDescricao from "../components/FormDescricao";
import CadastroComplete from "../components/CadastroComplete";







const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/cadastroLocador", element: <CadastroLocador/>},
    {path: "/cadastroD", element: <FormDescricao/>},
    {path: "/cadastroEmbarcacoes", element: <CadastroEmbarcacoes/>},
    { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },
    { path: "/home", element: <Home /> },
    { path: "/cadastroC", element: <CadastroComplete /> },

    
    
   
])

export default router;