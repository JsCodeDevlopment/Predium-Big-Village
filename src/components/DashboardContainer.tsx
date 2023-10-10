import { useLogin } from '../context/loginContext'
import { Navigate, Outlet } from "react-router-dom";

export function DashboardContainer() {
  const { isAuthenticated } = useLogin()
  return (
    isAuthenticated ? <Outlet/> : <Navigate replace to='/login'/>
  );
}
