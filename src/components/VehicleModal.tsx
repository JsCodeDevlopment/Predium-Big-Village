import { useNavigate } from "react-router-dom";
import Car from "../assets/images/car.png";
import Trash from "../assets/images/trash.png";
import Close from "../assets/images/esquerda.png";
import Plus from "../assets/images/plus.png";
import { IVehicleState, IVehicles } from "../Interfaces/Vehicles";
import { baseUrl } from "../servises/baseUrl";
import { useEffect, useState } from "react";
import { Vehicles } from "../servises/api/Vehicles";

export function VehicleModal() {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState<IVehicles[]>([]);
  const [newVehicle, setNewVehicle] = useState<IVehicleState>({
    brand: "",
    plate: "",
    type: "",
    cpf: "",
    model: "",
    apartmentNumber: ""
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const vehicleInstance = Vehicles;
        const response = await vehicleInstance.getAll();
        setVehicles(response);
      } catch (error) {
        console.error("Erro ao buscar os veículos:", error);
      }
    };

    fetchVehicles();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewVehicle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddVehicle = async () => {
    try {
      const { cpf, brand, model, plate, type, apartmentNumber } = newVehicle;

      if (!cpf || !brand || !model || !plate || !type || !apartmentNumber) {
        console.error("Por favor, preencha todos os campos.");
        alert("Por favor, preencha todos os campos.");
        return;
      }

      const response = await fetch(`${baseUrl}/vehicles/${apartmentNumber}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand,
          model,
          plate,
          type,
          cpf,
        }),
      });

      if (!response.ok) {
        console.error("Erro ao criar o veículo:", response.statusText);
        return;
      }

      const newWarning = await response.json();
      setVehicles([...vehicles, newWarning]);

      setNewVehicle({
        brand: "",
        cpf: "",
        model: "",
        plate: "",
        type: "",
        apartmentNumber: ""
      });
    } catch (error) {
      console.error("Erro ao criar o veículo:", error);
    }

  };
  const handleBack = () => {
    navigate(-1); // Navegar para trás na pilha de histórico
  };
  const canGoBack = location.pathname !== "/";

  const handleDelete = (id: string) => {
    Vehicles.delete(id)
  }

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
                name="cpf"
                className="input input-ghost input-sm w-80 max-w-xs"
                value={newVehicle.cpf}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Número do AP"
                name="apartmentNumber"
                className="input input-ghost input-sm w-80 max-w-xs"
                value={newVehicle.apartmentNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Marca"
                name="brand"
                className="input input-ghost input-sm w-80 max-w-xs"
                value={newVehicle.brand}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Modelo"
                name="model"
                className="input input-ghost input-sm w-80 max-w-xs"
                value={newVehicle.model}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Placa"
                name="plate"
                className="input input-ghost input-sm w-80 max-w-xs"
                value={newVehicle.plate}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Tipo"
                name="type"
                className="input input-ghost input-sm w-80 max-w-xs"
                value={newVehicle.type}
                onChange={handleInputChange}
              />
              <button
                className="btn w-40 h-5 btn-accent"
                onClick={handleAddVehicle}
              >
                Adicionar
              </button>
            </div>
            <hr className="bg-black w-full" />
            {vehicles.map((vehicle) => (
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
                <button className="w-10 h-10 gap-1 bg-black/10 hover:bg-black/30 cursor-pointer rounded-full flex items-center justify-center"
                onClick={()=>handleDelete(vehicle.id)}
                >
                  <img src={Trash} width={18} height={18} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
      );
}
