
type BdSimulation = {
  ap: string,
  status: string
  classe: string
}[]

const bdDataSimulation: BdSimulation = [
  {
    ap: "AP - 001",
    status: "À Venda",
    classe: "badge badge-accent",
  },
  {
    ap: "AP - 002",
    status: "À Venda",
    classe: "badge badge-accent",
  },
  {
    ap: "AP - 003",
    status: "À Locação",
    classe: "badge badge-accent",
  },
  {
    ap: "AP - 004",
    status: "Ocupado",
    classe: "badge badge-ghost",
  },
  {
    ap: "AP - 005",
    status: "À Venda",
    classe: "badge badge-accent",
  },
  {
    ap: "AP - 006",
    status: "Ocupado",
    classe: "badge badge-ghost",
  },
];

export function Unidades() {
  return (
    <div className="flex flex-col items-start w-3/4 rounded-lg shadow-md overflow-auto h-5/6">
      <div className="flex h-14 justify-center items-center py-1 self-stretch bg-zinc-100">
        <input
          type="text"
          placeholder="Search Member"
          className="input input-ghost w-full max-w-xs h-8"
        />
      </div>
      <div className="flex items-center self-stretch border-b-2 border-black/20">
        <div className="flex p-2 items-center flex-1">
          <h1 className="font-bold text-black">Unidades</h1>
        </div>
        <div className="flex p-2 items-center justify-center flex-1">
          <h1 className="font-bold text-black">Status</h1>
        </div>
      </div>
      {bdDataSimulation.map((ap) => (
        <div key={ap.ap} className="flex items-center self-stretch border-b-2 border-black/20" onClick={()=>console.log("Clicaram aqui!")}>
          <div className="flex p-2 items-center flex-1">
            <h1 className="">{ap.ap}</h1>
          </div>
          <div className="flex p-2 items-center justify-center flex-1">
            <h1 className={ap.classe}>{ap.status}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
