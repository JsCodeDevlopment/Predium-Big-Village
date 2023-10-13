import { IPessoa } from "./IPessoa";

export interface IResident {
  Visitors: any[] | null;
  accessTag: string;
  apartmentId: string;
  id: string;
  person: IPessoa;
  personId: string;
  pets: any[];
  type: string;
}
