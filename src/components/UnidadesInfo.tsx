import House from "../assets/images/house.png";
import { OwnerInfo } from "./OwnerInfo";
import { MoradoresInfo } from "./MoradoresInfo";
import { Veiculos } from "./Veiculos";
import { PetInfo } from "./PetInfo";
import { AvisosInfo } from "./AvisosInfo";
import { MultasInfo } from "./MultasInfo";
import { ReclamacoesInfo } from "./ReclamacoesInfo";
import { AvisosModal } from "./AvisosModal";
import { ReclamacoesModal } from "./ReclamacoesModal";
import { MultasModal } from "./MultasModal";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface Apartment {
	id: string,
	number: number,
	block: string,
	status: string[],
	ownerId: string | null,
	warnings: any[],
	residents: any[],
	vehicles: any[]
}

const fetchData = async (id: string): Promise<Apartment | null> => {
  try {
    const response = await fetch(
      `https://predium-big-village-back-end.vercel.app/apartments/${id}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Alguma coisa deu merda parceiro", err);
    return null
  }
};

export function UnidadesInfo() {
  const { id } = useParams();
  const [data, setData] = useState<Apartment | null>();
  useEffect(() => {
    if (id) {
      fetchData(id).then((data) => {
        setData(data);
      });
    }
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <>
      {/* <AvisosModal /> */}
      {/* <ReclamacoesModal/> */}
      {/* <MultasModal/> */}
      <div className="flex flex-col items-start w-3/4 rounded-lg px-2 pb-2 shadow-md overflow-auto h-5/6">
        <div className="flex h-14 justify-center items-center py-1 self-stretch bg-zinc-100">
          <h1 className="font-bold text-black">AP - 00{data.number}</h1>
        </div>
        <div className="flex items-center justify-center gap-2 self-stretch border-b-2 border-black/20">
          <img src={House} width={16} height={16} alt="" />{" "}
          <h1 className="text-black">Dados da Unidade</h1>
        </div>
        <div className="flex px-5 py-1 flex-wrap items-center gap-4 shrink-0 self-stretch">
          <div className="flex p-2 flex-col flex-wrap justify-center items-start">
            <ul className="flex flex-col w-56 flex-wrap">
              <li className="font-bold text-black">Opções</li>
              <li className="text-black/60">
                Unidade à venda?{" "}
                <input type="checkbox" className="toggle toggle-success" />
              </li>
              <li className="text-black/60">
                Unidade à locação?{" "}
                <input type="checkbox" className="toggle toggle-success" />
              </li>
              <li className="text-black/60">
                Pet Friendly?{" "}
                <input type="checkbox" className="toggle toggle-success" />
              </li>
            </ul>
          </div>
          <label className="label">
            Dormitírios:
            <select
              defaultValue={"DEFAULT"}
              className="select select-bordered select-xs w-full max-w-xs"
            >
              <option value="DEFAULT" disabled selected>
                Quantidade
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label className="label">
            Obs:
            <input
              type="text"
              placeholder="Ex: Já com mobilia..."
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex gap-4 justify-between px-5 items-start flex-wrap">
          <OwnerInfo />
          <MoradoresInfo />
          <Veiculos />
          <PetInfo />
          <AvisosInfo />
          <MultasInfo />
          <ReclamacoesInfo />
        </div>
      </div>
    </>
  );
}