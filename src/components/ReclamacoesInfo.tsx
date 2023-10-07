import Reclame from "../assets/images/reclame.png";

export function ReclamacoesInfo (){
    return (
        <div className="flex flex-col max-w-72 items-start rounded-lg shadow-sm">
        <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
          <div className="flex gap-1 justify-between items-center">
            <h1 className="font-bold text-black">Reclamações</h1>
            <img src={Reclame} width={18} height={18} alt="" />
          </div>
          <button className="btn-xs btn-accent">Adicionar</button>
        </div>
        <div className="flex p-2 justify-between gap-3 w-full items-center flex-1 border-b-2">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum dolor, sit amet...</p>         
        </div>
        <div className="flex p-2 justify-between gap-3 w-full items-center flex-1 border-b-2">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum dolor, sit amet...</p>         
        </div>
        <div className="flex p-2 justify-between gap-3 w-full items-center flex-1 border-b-2">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum dolor, sit amet...</p>         
        </div>
      </div>
    )
}  