import { useNavigate } from "react-router-dom";
import Car from "../assets/images/car.png";
import Trash from "../assets/images/trash.png";
import Close from "../assets/images/esquerda.png";
import Plus from "../assets/images/plus.png";

export function VehicleModal() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navegar para trás na pilha de histórico
  };
  const canGoBack = location.pathname !== "/";

  return (
    <div className="flex items-center justify-center absolute w-full h-full bg-black/50 z-50 top-0">
      <div className="absolute top-[1.2rem] left-[44.8rem]">
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
            <h1 className="font-bold text-black">Veículos</h1>
            <img src={Car} width={18} height={18} alt="" />
          </div>
        </div>
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <h1 className="text-black">Adicionar Veículos</h1>
          <button className="cursor-pointer w-24 h-5 gap-1 bg-black/20 hover:bg-black/50 rounded-full flex items-center justify-center disabled:btn-disabled disabled:opacity-40 disabled:cursor-not-allowed">
            <img src={Plus} width={18} height={18} alt="" />
            <h1 className="text-xs text-black/70">Adicionar</h1>
          </button>
        </div>
        <div className="flex p-2 gap-1 justify-evenly flex-wrap w-96 items-center flex-1">
          <input
            type="text"
            placeholder="CPF Proprietário"
            className="input input-ghost input-sm w-80 max-w-xs"
          />
          <input
            type="text"
            placeholder="Marca"
            className="input input-ghost input-sm w-80 max-w-xs"
          />
          <input
            type="text"
            placeholder="Modelo"
            className="input input-ghost input-sm w-80 max-w-xs"
          />
          <input
            type="text"
            placeholder="Placa"
            className="input input-ghost input-sm w-80 max-w-xs"
          />
          <select className="select select-ghost select-xs w-80 max-w-xs">
            <option disabled selected>
              Tipo
            </option>
            <option>Carro</option>
            <option>Moto</option>
          </select>
        </div>
        <hr className="bg-black w-full" />
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 rounded-md border-b-2">
          <div className="p-1 bg-black/20 rounded-md w-20">
            <p className="text-black">
              Tipo: <span className="text-black">Carro</span>
            </p>
          </div>
          <div className="p-1 bg-black/5 rounded-md w-20">
            <p className="text-black">
              Modelo: <span className="text-black">A3</span>
            </p>
          </div>
          <div className="p-1 bg-black/20 rounded-md w-20">
            <p className="text-black">
              Marca: <span className="text-black">Aude</span>
            </p>
          </div>
          <div className="p-1 bg-black/5 rounded-md w-20">
            <p className="text-black">
              Placa: <span className="text-black">AAA-123</span>
            </p>
          </div>
          <button className="w-10 h-10 gap-1 bg-black/10 hover:bg-black/30 cursor-pointer rounded-full flex items-center justify-center">
            <img src={Trash} width={18} height={18} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
