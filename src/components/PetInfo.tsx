import Pet from "../assets/images/pet.png";
import Trash from "../assets/images/trash.png";

export function PetInfo (){
    return (
        <div className="flex flex-col max-w-72 items-start rounded-lg shadow-sm">
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
          <div className="flex gap-1 justify-between items-center">
            <h1 className="font-bold text-black">Pets</h1>
            <img src={Pet} width={18} height={18} alt="" />
          </div>
          <button className="btn-xs btn-accent">Adicionar</button>
        </div>
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <p>Tipo: <span>Felino</span></p>
          <p>Nome: <span>Catinho</span></p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
        <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <p>Tipo: <span>Canino</span></p>
          <p>Nome: <span>Doguito</span></p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
      </div>
    )
} 