import { IWarning } from "../../Interfaces/IWarning";
import { baseUrl } from "../baseUrl";

export class Warnings {
  // Busca o apartamento pelo número dele
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
  // Exibe todos os avisos
  static showAll = async (): Promise<IWarning[]> => {
    try {
      const response = await fetch(`${baseUrl}/warnings`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error("Não foi possivel encontrar avisos!", err);
      return [];
    }
  };
  // Deleta um Aviso
  static delete = async (id: string): Promise<void> => {
    try {
      await fetch(`${baseUrl}/warnings/${id}`, {
        method: "DELETE"
      });
    } catch (err) {
      console.error("Alguma coisa deu merda parceiro", err);
    }
  };
}
