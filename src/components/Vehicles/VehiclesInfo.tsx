import { Link } from "react-router-dom";
import Car from "../../assets/images/car.png";
import { IVehiclesInfProps } from "../../Interfaces/Vehicles";

export function VehiclesInfo({ vehicle }: IVehiclesInfProps) {

  return (
    <div className="flex flex-col max-w-80 items-start rounded-lg shadow-sm">
      <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Veículos</h1>
          <img src={Car} width={18} height={18} alt="" />
        </div>
        <Link className="btn-xs btn-accent" to="/vehicle-modal">Adicionar</Link>
      </div>
      {vehicle.length === 0 ? (
        <div className="flex p-1 border-b-2">
          <h1 className="text-black/70">Nenhum veículo por aqui 🙈</h1>
        </div>
      ) : (
        <table className="flex items-center justify-center p-1 rounded-md">
          <tbody>
            <tr>
              <th className="p-1 border-spacing-1 border-2 border-black/20 text-black">Tipo</th>
              <th className="p-1 border-spacing-1 border-2 border-black/20 text-black">Modelo</th>
              <th className="p-1 border-spacing-1 border-2 border-black/20 text-black">Marca</th>
              <th className="p-1 border-spacing-1 border-2 border-black/20 text-black">Placa</th>
            </tr>
            {vehicle.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="p-1 border-spacing-1 border-2 border-black/20 text-black/60">{vehicle.type === "Car" ? "Carro" : "Moto"}</td>
                <td className="p-1 border-spacing-1 border-2 border-black/20 text-black/60">{vehicle.model}</td>
                <td className="p-1 border-spacing-1 border-2 border-black/20 text-black/60">{vehicle.brand}</td>
                <td className="p-1 border-spacing-1 border-2 border-black/20 text-black/60">{vehicle.plate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
