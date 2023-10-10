import { createContext, useState, useContext, ReactNode } from "react";


interface LoginContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
export const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);

const LoginProvider = ({ children }:{children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
      console.log(data);
      setIsAuthenticated(true);
      return data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw new Error("Erro ao fazer login");
    }
  };

    const logout = (): void => {
      // Implemente a lógica de logout (se necessário)
      setIsAuthenticated(false);
    };

  const value = { isAuthenticated, login, logout };

  return ( 
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  )
}

const useLogin = () => {
  const context = useContext(LoginContext);

  return context;
};

export { LoginProvider, useLogin };
