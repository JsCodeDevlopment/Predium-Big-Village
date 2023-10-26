import Trash from "../../assets/images/trash.png";

export function PetsContent() {
  return (
    <>
      <div className="flex p-2 gap-1 justify-center w-full items-center flex-1 border-b-2">
        <h1 className="text-black">Adicionar Pet</h1>
      </div>
      <div className="flex p-2 gap-1 flex-wrap justify-center w-96 items-center flex-1 border-b-2">
        <input
          type="text"
          placeholder="Nome"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Tipo"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="idade"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Raça"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Tamanho"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Peso"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Dono"
          className="input input-ghost input-sm w-full max-w-xs"/>
        <input
          type="text"
          placeholder="Obs."
          className="input input-ghost input-sm w-full max-w-xs"/>
      </div>
      <div className="flex p-2 gap-1 justify-between w-full items-center flex-1 border-b-2">
          <p>Tipo: <span>Felino</span></p>
          <p>Nome: <span>Catinho</span></p>
          <img src={Trash} width={18} height={18} alt="" />
        </div>
    </>
  );
}
