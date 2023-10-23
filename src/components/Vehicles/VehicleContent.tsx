import { useEffect, useState } from "react";
import { IVehicleState, IVehicles } from "../../Interfaces/Vehicles";
import { Vehicles } from "../../servises/api/Vehicles";
import { baseUrl } from "../../servises/baseUrl";
import Trash from "../../assets/images/trash.png";

export function VehicleContent() {
    const [vehicles, setVehicles] = useState<IVehicles[]>([]);
    const [newVehicle, setNewVehicle] = useState<IVehicleState>({
      brand: "",
      plate: "",
      type: "",
      cpf: "",
      model: "",
      apartmentNumber: "",
    });
  
    const fetchVehicles = async () => {
      try {
        const response = await Vehicles.getAll();
        setVehicles(response);
      } catch (error) {
        console.error("Erro ao buscar os veículos:", error);
      }
    };
    useEffect(() => {
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
          apartmentNumber: "",
        });
      } catch (error) {
        console.error("Erro ao criar o veículo:", error);
      }
    };
  
    const handleDelete = async (id: string) => {
      await Vehicles.delete(id);
      await fetchVehicles();
    };
  return (
    <>
      <div className="flex p-2 gap-1 justify-center w-full items-center flex-1 border-b-2">
        <h1 className="text-black">Adicionar Veículos</h1>
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
        <button className="btn w-40 h-5 btn-accent" onClick={handleAddVehicle}>
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
              Tipo:{" "}
              <span className="text-black">
                {vehicle.type === "Car" ? "Carro" : "Moto"}
              </span>
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
          <button
            className="w-10 h-10 gap-1 bg-black/10 hover:bg-black/30 cursor-pointer rounded-full flex items-center justify-center"
            onClick={() => handleDelete(vehicle.id)}
          >
            <img src={Trash} width={18} height={18} alt="" />
          </button>
        </div>
      ))}
    </>
  );
}
