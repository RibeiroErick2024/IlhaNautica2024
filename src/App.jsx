import "./App.css";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperacaoSenha from "./pages/RecuperacaoSenha";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
          <Route path="/recuperacaoSenha" element={<RecuperacaoSenha />} /> {/* Página de recuperaçao de senha */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
