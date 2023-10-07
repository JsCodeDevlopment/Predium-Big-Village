import Car from "../assets/images/car.png";
import Plus from "../assets/images/plus.png";

export function CreateNewVeiculos() {
  return (
    <div className="flex flex-col max-w-80 items-start rounded-lg shadow-sm">
      <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Veículos</h1>
          <img src={Car} width={18} height={18} alt="" />
        </div>
      </div>
      <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
        <h1>Adicionar Veículos</h1>
        <img src={Plus} width={18} height={18} alt="" />
      </div>
      <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
        <input
          type="text"
          placeholder="Marca"
          className="input input-bordered input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Modelo"
          className="input input-bordered input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Placa"
          className="input input-bordered input-sm w-full max-w-xs"/>
          <select className="select select-bordered select-xs w-full max-w-xs">
          <option disabled selected>
            Tipo
          </option>
          <option>Carro</option>
          <option>Moto</option>
        </select>
      </div>
    </div>
  );
}
