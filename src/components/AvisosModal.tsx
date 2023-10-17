import Avisos from "../assets/images/mensagem.png";
import Close from "../assets/images/esquerda.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Warnings } from "../servises/api/Warnings";
import { IWarning } from "../Interfaces/IWarning";

export function AvisosModal() {
  const navigate = useNavigate();
  const [warnings, setWarnings] = useState<any[]>([]);

  const handleBack = () => {
    navigate(-1); // Navegar para trás na pilha de histórico
  };
  const canGoBack = location.pathname !== "/";

  useEffect(() => {
    const fetchWarnings = async () => {
      try {
        const warningsInstance = Warnings;
        const response = await warningsInstance.showAll();
        setWarnings(response);
      } catch (error) {
        console.error("Erro ao buscar os avisos:", error);
      }
    };

    fetchWarnings();
  }, []);

  return (
    <div className="flex items-center justify-center absolute w-full h-full bg-black/50 z-50 top-0">
      <div className="absolute top-[-0.95rem] left-[45rem]">
        <button
          className="absolute top-24 left-20 w-20 h-5 gap-1 bg-white/80 hover:bg-white/50 rounded-full flex items-center justify-center disabled:btn-disabled disabled:opacity-40 disabled:cursor-not-allowed"
          onClick={handleBack}
          disabled={!canGoBack}
        >
          <img
            className="rounded-full w-5 h-4 cursor-pointer"
            src={Close}
            alt="esquerda"
          />
          <h1 className="text-xs text-black">Fechar</h1>
        </button>
      </div>
      <div className="flex flex-col w-96 z-50 bg-white rounded-lg items-center gap-1 px-2 pb-2 shadow-md overflow-auto h-4/6">
        <div className="flex h-14 justify-center items-center gap-1 py-1 self-stretch bg-zinc-100">
          <h1 className="font-bold text-black">Avisos</h1>
          <img src={Avisos} width={16} height={16} alt="" />
        </div>
        <div className="flex gap-1 justify-center items-center w-full pb-1 px-5 flex-col flex-wrap border-b-2 ">
          <label className="label">
            <span className="label-text text-black/70">Apartamento: </span>
          </label>
          <input
            placeholder="Ex: 1"
            className="input input-ghost input-sm w-full max-w-xs"
            required
          />
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
        {warnings.map((warning: IWarning) => (
          <div key={warning.id} className="flex p-2 justify-between w-full items-center gap-2 flex-1 border-b-2">
            <p>{warning.title}</p>
            <div className="flex h-auto w-30 break-all">
              <p>{warning.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
