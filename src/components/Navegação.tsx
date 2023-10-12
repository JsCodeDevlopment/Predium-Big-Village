import { useNavigate } from "react-router-dom";
import Esquerda from "../assets/images/esquerda.png";
export function Navigation() {
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate(-1); // Navegar para trás na pilha de histórico
    };
    const canGoBack = location.pathname !== '/';
  
  return (
    <>
      <button className="absolute top-24 left-20 w-20 h-5 gap-1 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center disabled:btn-disabled disabled:opacity-40 disabled:cursor-not-allowed" onClick={handleBack} disabled={!canGoBack}>
        <img
          className="rounded-full w-5 h-4 cursor-pointer"
          src={Esquerda}
          alt="esquerda"
        />
        <h1 className="text-xs text-black">voltar</h1>
      </button>
    </>
  );
}
