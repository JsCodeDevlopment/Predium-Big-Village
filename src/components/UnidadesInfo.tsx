import House from "../assets/images/house.png";
import { OwnerInfo } from "./OwnerInfo";
import { MoradoresInfo } from "./MoradoresInfo";
import { Veiculos } from "./Veiculos";
import { PetInfo } from "./PetInfo";
import { AvisosInfo } from "./AvisosInfo";
import { MultasInfo } from "./MultasInfo";
import { ReclamacoesInfo } from "./ReclamacoesInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IApartment } from "../Interfaces/IApartment";
import { Apartment } from '../servises/api/Apartment'
import { VehicleModal } from "./VehicleModal";

export function UnidadesInfo() {
  const { id } = useParams();
  const [data, setData] = useState<IApartment | null>();
  useEffect(() => {
    if (id) {
      Apartment.getById(id).then((data) => {
        setData(data);
      });
    }
  }, [id]);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col items-start w-3/4 rounded-lg px-2 pb-2 shadow-md overflow-auto h-5/6">
        <div className="flex h-14 justify-center items-center py-1 self-stretch bg-zinc-100">
          <h1 className="font-bold text-black">AP - {data.number.toString().length <= 1 ? `00` : `0`}{data.number}</h1>
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
          <MoradoresInfo residents={data.residents} />
          <Veiculos />
          <PetInfo />
          <AvisosInfo warning={data.warnings}/>
          <MultasInfo />
          <ReclamacoesInfo />
        </div>
      </div>
    </>
  );
}
