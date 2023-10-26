import Msg from "../../assets/images/mensagem.png";
import { Link } from "react-router-dom";
import { IWarningsInfProps } from "../../Interfaces/IWarning";

export function WarningInfo({ warning }: IWarningsInfProps) {

  return (
    <div className="flex flex-col max-w-72 items-start rounded-lg shadow-sm">
      <div className="flex p-2 justify-between w-full items-center flex-1 border-b-2 bg-black/20">
        <div className="flex gap-1 justify-between items-center">
          <h1 className="font-bold text-black">Avisos </h1>
          <img src={Msg} width={18} height={18} alt="" />
        </div>
        <Link className="btn-xs btn-accent" to="/warning-modal">Adicionar</Link>
      </div>
      {warning.length === 0 ? (
        <div className="flex p-1 border-b-2">
          <h1 className="text-black/70">Nenhum aviso por aqui 🙉</h1>
        </div>
      ) : (
        warning.map((warning) => (
          <div
            key={warning.id}
            className="flex p-2 justify-between w-full items-center gap-2 flex-1 border-b-2">
            <p>{warning.title}</p>
            <div className="flex h-auto w-30 break-all">
              <p>{warning.details}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
