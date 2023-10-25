import { useNavigate } from "react-router-dom";
import { IMoradoresInfProps } from "../../Interfaces/IResident";
import AddUser from "../../assets/images/adduser.png";
import Trash from "../../assets/images/trash.png";

export function ResidentInfo({ residents }: IMoradoresInfProps) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/resident-modal", { replace: true });
  }
  
  return (
    <div className="flex flex-col max-w-72 items-start rounded-lg shadow-sm">
      <div className="flex p-2 gap-5 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Moradores</h1>
          <img src={AddUser} width={18} height={18} alt="" />
        </div>
        <button className="btn-xs btn-accent" onClick={handleClick}>Adicionar</button>
      </div>
      {residents.length === 0 ? (
        <div className="flex p-1 border-b-2">
          <h1 className="text-black/70">Nenhum morador por aqui 🙈</h1>
        </div>
      ) : (
        residents.map((resident) => (
          <div
            key={resident.id}
            className="flex p-2 justify-between gap-3 w-full items-center flex-1 border-b-2">
            <p className="text-black">{resident.person.name}</p>
            <img src={Trash} width={18} height={18} alt="" />
          </div>
        ))
      )}
    </div>
  );
}
