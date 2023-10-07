import Avisos from "../assets/images/mensagem.png";

export function AvisosModal() {
  return (
    <div className="flex flex-col w-1/2 z-50 rounded-lg items-center gap-1 px-2 pb-2 shadow-md overflow-auto h-5/6">
      <div className="flex h-14 justify-center items-center gap-1 py-1 self-stretch bg-zinc-100">
        <h1 className="font-bold text-black">Avisos</h1>
        <img src={Avisos} width={16} height={16} alt="" />
      </div>
      <div className="flex gap-1 justify-center items-center w-full pb-1 px-5 flex-col flex-wrap border-b-2 ">
        <label className="label">
          <span className="label-text text-black/70">Titulo: </span>
        </label>
        <input
          type="text"
          placeholder="Titulo aqui..."
          className="input input-ghost w-full"
          required
        />
        <label className="label">
          <span className="label-text text-black/70">Descrição: </span>
        </label>
        <textarea
          placeholder="Descreva aqui..."
          className="textarea textarea-ghost textarea-sm w-full max-w-xs"
          required
        />
        <button className="btn w-40 h-5 btn-accent">Adicionar</button>
      </div>
      <div className="flex p-2 justify-between w-full items-center gap-2 flex-1 border-b-2">
        <p>Reunião de inquilinos</p>
        <div className="flex h-auto w-30 break-all">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            unde modi, magnam quam rem qui aliquam vitae corrupti quia
            consequuntur necessitatibus. Assumenda omnis officiis iste totam
            nihil nemo ratione enim?
          </p>
        </div>
      </div>
      <div className="flex p-2 justify-between w-full items-center gap-2 flex-1 border-b-2">
        <p>Mudanças nas regras</p>
        <div className="flex h-auto w-30 break-all">
          <p>
            Lorem ipsum dolor sit amet...
          </p>
        </div>
      </div>
    </div>
  );
}
