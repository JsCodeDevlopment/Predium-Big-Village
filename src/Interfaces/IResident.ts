import { IPessoa } from "./IPessoa";

export interface IMoradoresInfProps {
  residents: IResident[];
}

interface IResident {
  Visitors: any[] | null;
  accessTag: string;
  apartmentId: string;
  id: string;
  person: IPessoa;
  personId: string;
  pets: any[];
  type: string;
}
