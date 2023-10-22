import { IVehicles } from "../../Interfaces/Vehicles";
import { baseUrl } from "../baseUrl";

export class Vehicles {
  static getAll = async (): Promise<any[]> => {
    try {
      const response = await fetch(`${baseUrl}/vehicles`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Alguma coisa deu merda parceiro", err);
      return [];
    }
  };
  static delete = async (id: string): Promise<IVehicles | null> => {
    try {
      const response = await fetch(`${baseUrl}/vehicles/${id}`, {
        method: "DELETE"
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Alguma coisa deu merda parceiro", err);
      return null;
    }
  };
}
