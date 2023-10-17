import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Apartment } from '../servises/api/Apartment'

export function Unidades() {
  const navigate = useNavigate();
  const [bdData, setBdData] = useState<any[]>([]);

  const handleClick = (id: string) => {
    navigate(`/unidades/${id}`, { replace: false });
  };

  useEffect(() => {
    Apartment.getAll().then((data) => {
      setBdData(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-start w-3/4 rounded-lg shadow-md overflow-auto h-5/6">
      <div className="flex h-14 justify-center items-center py-1 self-stretch bg-zinc-100">
        <input
          type="text"
          placeholder="Search Apartment"
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
          className="flex items-center self-stretch border-b-2 cursor-pointer hover:bg-black/10 border-black/20"
          onClick={() => handleClick(ap.id)}
        >
          <div className="flex p-2 items-center flex-1">
            <h1 className="text-black/60 font-semibold">AP - 00{ap.number}</h1>
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
                  {ap.status[0] == "Locacao" ? "Locação" : ap.status[0]}
                </h1>
                <h1
                  className={
                    ap.status == "Ocupado"
                      ? "badge badge-ghost"
                      : "badge badge-accent"
                  }
                >
                  {ap.status[1] == "Locacao" ? "Locação" : ap.status[1]}
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
                {ap.status == "Locacao" ? "Locação" : ap.status}
              </h1>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
