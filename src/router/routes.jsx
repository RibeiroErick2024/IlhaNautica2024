import { createBrowserRouter } from "react-router-dom"; 
import Login from "/src/pages/login/Login.jsx";
import Home from "/src/pages/home/Home.jsx";
import RecuperacaoSenha from "../components/FormRecuperacaoSenha";







const router = createBrowserRouter([
    {path: "/", element: <Login />},
    { path: "/recuperacaoSenha", element: <RecuperacaoSenha /> },
    { path: "/home", element: <Home /> },

    
    
   
])

export default router;