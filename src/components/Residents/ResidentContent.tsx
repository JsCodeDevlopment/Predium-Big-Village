import { ResidentForm } from "./ResidentForm";

export function ResidentContent() {
  return (
    <div className="flex flex-col items-start w-full rounded-lg px-2 pb-2 shadow-md overflow-auto h-5/6">
      <div className="flex h-10 justify-center items-center py-1 self-stretch bg-zinc-100">
        <h1 className="font-bold text-black">Novo Morador</h1>
      </div>
      <div className="flex gap-2 flex-wrap justify-between p-3 items-start">
        <div className="flex w-full justify-center gap-2 flex-wrap">
          <ResidentForm />
        </div>
        <div className="flex flex-wrap gap-2 flex-col max-w-xs">
          {/* outros componentes de formulário aqui */}
        </div>
        <div className="flex w-full justify-center">
          <button className="btn btn-neutral">Salvar</button>
        </div>
      </div>
    </div>
  );
}
