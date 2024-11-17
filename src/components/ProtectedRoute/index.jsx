import { Navigate } from "react-router-dom";
import CadastroLocador from "../../pages/cadastroLocador";
import { useAuth } from "../../contexts/AuthContext";
// import MenuDrawer from "./MenuDrawer";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated() ? <CadastroLocador /> : <Navigate to="/" />;
};

export default ProtectedRoute;