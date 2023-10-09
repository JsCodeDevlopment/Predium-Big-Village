import { useEffect, useState } from "react";

const fetchData = async (): Promise<any[]> => {
  try {
    const response = await fetch(
      "https://predium-big-village-back-end.vercel.app/apartments"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error("Alguma coisa deu merda parceiro", err);
    return [];
  }
};
export function Unidades() {
  const [bdData, setBdData] = useState<any[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setBdData(data);
    });
  }, []);

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
      {bdData.map((ap) => (
        <div
          key={ap.id}
          className="flex items-center self-stretch border-b-2 border-black/20"
          onClick={() => console.log("Clicaram aqui!")}
        >
          <div className="flex p-2 items-center flex-1">
            <h1 className="">AP - 00{ap.number}</h1>
          </div>
          <div className="flex p-2 items-center justify-center gap-1 flex-1">
            {ap.status.length == 2 ? (
              <>
                <h1
                  className={
                    ap.status == "Ocupado"
                      ? "badge badge-ghost"
                      : "badge badge-accent"
                  }
                >
                  {ap.status[0] == 'Locacao'  ? 'Locação' : ap.status[0]}
                </h1>
                <h1
                  className={
                    ap.status == "Ocupado"
                      ? "badge badge-ghost"
                      : "badge badge-accent"
                  }
                >
                  {ap.status[1] == 'Locacao' ? 'Locação' : ap.status[1]}
                </h1>
              </>
            ) : (
              <h1
                className={
                  ap.status == "Ocupado"
                    ? "badge badge-ghost"
                    : "badge badge-accent"
                }
              >
                {ap.status == 'Locacao' ? 'Locação' : ap.status}
              </h1>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
