import Multa from "../assets/images/multa.png";

export function MultasModal() {
  return (
    <div className="flex flex-col w-1/2 z-50 rounded-lg items-center gap-1 px-2 pb-2 shadow-md overflow-auto h-5/6">
      <div className="flex h-14 justify-center items-center gap-1 py-1 self-stretch bg-zinc-100">
        <h1 className="font-bold text-black">Multas</h1>
        <img src={Multa} width={16} height={16} alt="" />
      </div>
      <div className="flex gap-1 justify-center items-center w-full pb-1 px-5 flex-col flex-wrap border-b-2 ">
        <label className="label">
          <span className="label-text text-black/70">Infrator: </span>
        </label>
        <input
          type="text"
          placeholder="Search..."
          className="input input-ghost w-full"
          required
        />
        <label className="label">
          <span className="label-text text-black/70">Apartamento: </span>
        </label>
        <input
          type="text"
          placeholder="Search..."
          className="input input-ghost w-full"
          required
        />
        <label className="label">
          <span className="label-text text-black/70">Valor: </span>
        </label>
        <input
          type="text"
          placeholder="Ex.: 50,00"
          className="input input-ghost w-2/4"
          required
        />
        <label className="label">
          <span className="label-text text-black/70">Titulo: </span>
        </label>
        <input
          type="text"
          placeholder="Ex.: 50,00"
          className="input input-ghost w-full"
          required
        />
        <label className="label">
          <span className="label-text text-black/70">Motivo: </span>
        </label>
        <textarea
          placeholder="Descreva aqui..."
          className="textarea textarea-ghost textarea-sm w-full max-w-xs"
          required
        />
        <button className="btn w-40 h-5 btn-accent">Adicionar</button>
      </div>
      <div className="flex p-2 justify-between w-full items-center gap-2 flex-1 border-b-2">
        <p>Descumprimento de ...</p>
        <p>R$ 50,00</p>
        <div className="flex h-auto w-30 break-all">
          <p>Depois das 22hrs reduza o som pfvr</p>
        </div>
      </div>
    </div>
  );
}
