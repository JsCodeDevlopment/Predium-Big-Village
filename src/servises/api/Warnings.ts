import { IWarning } from "../../Interfaces/IWarning";
import { baseUrl } from "../baseUrl";

export class Warnings {
    static getByNumber = async (number: string): Promise<IWarning | null> => {
    try {
      const response = await fetch(`${baseUrl}/warning/${number}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Não foi possivel encontrar esse apartamento.", err);
      return null;
    }
  };
}
