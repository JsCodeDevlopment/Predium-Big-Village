import { useNavigate } from "react-router-dom";
import Pet from "../assets/images/pet.png";
import Close from "../assets/images/esquerda.png";
import Plus from "../assets/images/plus.png";

export function PetsModal() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navegar para trás na pilha de histórico
  };
  const canGoBack = location.pathname !== "/";
  
  return (
    <div className="flex items-center justify-center absolute w-full h-full bg-black/50 z-50 top-0">
      <div className="absolute top-5 left-[44.8rem]">
        <button
          className="absolute top-24 left-20 w-20 h-5 gap-1 bg-white/80 hover:bg-white/50 rounded-full flex items-center justify-center disabled:btn-disabled disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleBack}
          disabled={!canGoBack}
        >
          <img
            className="rounded-full w-5 h-4 cursor-pointer"
            src={Close}
            alt="esquerda"
          />
          <h1 className="text-xs text-black">Fechar</h1>
        </button>
      </div>
      <div className="flex flex-col bg-white max-w-80 items-start rounded-lg shadow-sm">
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
          <div className="flex gap-1 justify-between items-center">
            <h1 className="font-bold text-black">Pets</h1>
            <img src={Pet} width={18} height={18} alt="" />
          </div>
        </div>
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <h1>Adicionar Pet</h1>
          <img src={Plus} width={18} height={18} alt="" />
        </div>
        <div className="flex p-2 gap-1 flex-wrap justify-center w-96 items-center flex-1 border-b-2">
          <input
            type="text"
            placeholder="Nome"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="Tipo"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="idade"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="Raça"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="Tamanho"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="Peso"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="Dono"
            className="input input-ghost input-sm w-full max-w-xs"/>
          <input
            type="text"
            placeholder="Obs."
            className="input input-ghost input-sm w-full max-w-xs"/>
        </div>
      </div>
    </div>
  );
}
