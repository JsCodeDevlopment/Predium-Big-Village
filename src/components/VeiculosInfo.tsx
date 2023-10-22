import { useNavigate } from "react-router-dom";
import Car from "../assets/images/car.png";
import { IVehiclesInfProps } from "../Interfaces/Vehicles";

export function VeiculosInfo({ vehicle }: IVehiclesInfProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/vehicle-modal", { replace: true });
  }

  return (
    <div className="flex flex-col max-w-80 items-start rounded-lg shadow-sm">
      <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Veículos</h1>
          <img src={Car} width={18} height={18} alt="" />
        </div>
        <button className="btn-xs btn-accent" onClick={handleClick}>
          Adicionar
        </button>
      </div>
      {vehicle.length === 0 ? (
        <div className="flex p-1 border-b-2">
          <h1 className="text-black/70">Nenhum veículo por aqui 🙈</h1>
        </div>
      ) : (
        vehicle.map((vehicle) => (
          <div
            key={vehicle.id}
            className="flex p-2 gap-1 justify-between w-full items-center flex-1 rounded-md border-b-2"
          >
            <div className="p-1 bg-black/20 rounded-md w-20">
              <p className="text-black">
                Tipo: <span className="text-black">{vehicle.type === "Car" ? "Carro" : "Moto"}</span>
              </p>
            </div>
            <div className="p-1 bg-black/5 rounded-md w-20">
              <p className="text-black">
                Modelo: <span className="text-black">{vehicle.model}</span>
              </p>
            </div>
            <div className="p-1 bg-black/20 rounded-md w-20">
              <p className="text-black">
                Marca: <span className="text-black">{vehicle.brand}</span>
              </p>
            </div>
            <div className="p-1 bg-black/5 rounded-md w-20">
              <p className="text-black">
                Placa: <span className="text-black">{vehicle.plate}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
