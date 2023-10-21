import { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginContextProps } from "../Interfaces/IContext";

export const LoginContext = createContext<ILoginContextProps>({} as ILoginContextProps);

export const LoginProvider = ({ children }:{children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()
  const login = async (email: string, password: string): Promise<void> => {
    try {
      const response = await fetch(
        "https://predium-big-village-back-end.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      setIsAuthenticated(true);
      navigate('/', {replace: true})
      return data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Erro ao fazer login");
    }
  };

  const logout = () =>{
    setIsAuthenticated(false)
    navigate('/login', {replace: true})
  }

  return ( 
    <LoginContext.Provider value={{ isAuthenticated, login, setIsAuthenticated, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => {
  const context = useContext(LoginContext);

  return context;
};