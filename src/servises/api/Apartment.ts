import { IApartment } from "../../Interfaces/IApartment";
import { baseUrl } from "../baseUrl";

export class Apartment {
  static getAll = async (): Promise<any[]> => {
    try {
      const response = await fetch(`${baseUrl}/apartments`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Alguma coisa deu merda parceiro", err);
      return [];
    }
  };
  static getById = async (id: string): Promise<IApartment | null> => {
    try {
      const response = await fetch(`${baseUrl}/apartments/${id}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Alguma coisa deu merda parceiro", err);
      return null;
    }
  };
}
