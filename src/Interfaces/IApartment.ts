import { IResident } from "./IResident";

export interface IApartment {
    id: string;
    number: number;
    block: string;
    status: string[];
    ownerId: string | null;
    warnings: any[];
    residents: IResident[];
    vehicles: any[];
  }