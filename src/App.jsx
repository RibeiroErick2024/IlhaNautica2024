import "./App.css";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperacaoSenha from "./pages/RecuperacaoSenha";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CadastroDescricao from "./pages/CadastroDescricao";
import CadastroEmbarcacoes from "./pages/cadastro/CadastroEmbarcacoes";
import PerfilEmbarcacao from "./pages/perfilembarcacao/PerfilEmbarcacao";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de Login */}
          <Route path="/descricao" element={<CadastroDescricao />} /> {/* Página de Login */}
          <Route path="/cadastro1" element={<CadastroEmbarcacoes />} /> {/* Página de Login */}
          <Route path="/cadatro2" element={<PerfilEmbarcacao />} /> {/* Página de Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
          <Route path="/recuperacaoSenha" element={<RecuperacaoSenha />} /> {/* Página de recuperaçao de senha */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
