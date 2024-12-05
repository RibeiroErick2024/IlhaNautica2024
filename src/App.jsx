
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import FormCadastro from './components/FormCadastro';
import CadastroEmbarcacoes from './components/FormCadastroEmbarcacao';
import CompletarCadastro from './components/FormCompletarCadastro';
import RecuperacaoSenha from './components/FormRecuperacaoSenha';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import CadastroLocador from './pages/cadastroLocador/CadastroLocador';
import Home from './pages/Home/Home';
import Embarcacao from './pages/embarcacaoPageAluguel/EmbarcacaoPageAluguel';
import Login from './pages/login/Login';
import PerfilMarinheiro from './pages/perfilMarinheiro/PerfilMarinheiro';
import PerfilUsuario from './pages/perfilUsuario/PerfilUsuario';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<FormCadastro />} />
            <Route path="/complete" element={<CompletarCadastro />} />
            <Route path="/embarcacao" element={<Embarcacao />} />
          <Route path="/recuperacaoSenha" element={<RecuperacaoSenha />} />
          <Route path="/cadastroLocador" element={<CadastroLocador />} />
           <Route element={<ProtectedRoute />}>
          <Route path="/perfilMarinheiro" element={<PerfilMarinheiro />} />
          <Route path="/perfilUsuario" element={<PerfilUsuario />} />
          <Route path="/cadastroEmbarcacoes" element={<CadastroEmbarcacoes />} />
          </Route>


          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );

}

export default App