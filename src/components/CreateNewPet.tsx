import Pet from "../assets/images/pet.png";
import Plus from "../assets/images/plus.png";

export function CreateNewPet() {
  return (
    <div className="flex flex-col max-w-80 items-start rounded-lg shadow-sm">
      <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Pets</h1>
          <img src={Pet} width={18} height={18} alt="" />
        </div>
      </div>
      <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
        <h1>Adicionar Pet</h1>
        <img src={Plus} width={18} height={18} alt="" />
      </div>
      <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
        <input
          type="text"
          placeholder="Nome"
          className="input input-bordered input-sm w-full max-w-xs"/>
          <select defaultValue={'DEFAULT'} className="select select-bordered select-xs w-full max-w-xs">
          <option value="DEFAULT" disabled selected>
            Tipo
          </option>
          <option>Canino</option>
          <option>Felino</option>
          <option>Ave</option>
          <option>Reptil</option>
        </select>
      </div>
    </div>
  );
}
