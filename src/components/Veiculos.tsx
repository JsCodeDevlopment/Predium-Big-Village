import Car from "../assets/images/car.png";
import Trash from "../assets/images/trash.png";

export function Veiculos (){
    return (
        <div className="flex flex-col max-w-80 items-start rounded-lg shadow-sm">
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
          <div className="flex gap-1 justify-between items-center">
            <h1 className="font-bold text-black">Veículos</h1>
            <img src={Car} width={18} height={18} alt="" />
          </div>
          <button className="btn-xs btn-accent">Adicionar</button>
        </div>
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <p>Tipo: <span>Carro</span></p>
          <p>Modelo: <span>A3</span></p>
          <p>Marca: <span>Aude</span></p>
          <p>Placa: <span>AAA-123</span></p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <p>Tipo: <span>Moto</span></p>
          <p>Modelo: <span>Fan 160</span></p>
          <p>Marca: <span>Honda</span></p>
          <p>Placa: <span>AAA-123</span></p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
      </div>
    )
} 