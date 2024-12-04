import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CadastroLocador from "../../pages/cadastroLocador/CadastroLocador";
// import MenuDrawer from "./MenuDrawer";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? <CadastroLocador /> : <Navigate to="/" />;
};

export default ProtectedRoute;