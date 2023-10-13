import { IResident } from "../Interfaces/IResident";
import AddUser from "../assets/images/adduser.png";
import Trash from "../assets/images/trash.png";

interface IMoradoresInfProps {
  residents: IResident[];
}

export function MoradoresInfo({ residents }: IMoradoresInfProps) {
  return (
    <div className="flex flex-col max-w-72 items-start rounded-lg shadow-sm">
      <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Moradores</h1>
          <img src={AddUser} width={18} height={18} alt="" />
        </div>
        <button className="btn-xs btn-accent">Adicionar</button>
      </div>
      {residents.map((resident) => (
        <div key={resident.id} className="flex p-2 justify-between gap-3 w-full items-center flex-1 border-b-2">
          <p className="text-black">{resident.person.name}</p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
      ))}
    </div>
  );
}
