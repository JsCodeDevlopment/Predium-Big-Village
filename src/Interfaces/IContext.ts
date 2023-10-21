export interface ILoginContextProps {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    logout: ()=>void
  }