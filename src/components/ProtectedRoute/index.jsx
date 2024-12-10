import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import CadastroLocador from "../../pages/cadastroLocador/CadastroLocador";
// import MenuDrawer from "./MenuDrawer";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  console.log("Rota protegida")
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
// opa

export default ProtectedRoute;