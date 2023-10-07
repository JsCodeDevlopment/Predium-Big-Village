import AddUser from "../assets/images/adduser.png";
import Trash from "../assets/images/trash.png";

export function OwnerInfo (){
    return (
        <div className="flex flex-col max-w-72 items-start rounded-lg shadow-sm">
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
          <div className="flex gap-1 justify-between items-center">
            <h1 className="font-bold text-black">Proprietário</h1>
            <img src={AddUser} width={18} height={18} alt="" />
          </div>
          <button className="btn-xs btn-accent">Adicionar</button>
        </div>
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2">
          <p>Levi Eber</p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2">
          <p>Sexo: Masculino</p>
        </div>
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2">
          <p>Email: levieber@email.com</p>
        </div>
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2">
          <p>Telefone: (11) 9 9999-9999</p>
        </div>
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2">
          <p>CPF: 123.321.123-12</p>
        </div>
      </div>
    )
} 