import { useNavigate } from "react-router-dom";
import { IModalProps } from "../Interfaces/IModal";

export function Modal({ icon, img, modalTitle, content }: IModalProps) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const canGoBack = location.pathname !== "/";

  return (
    <div className="flex items-center justify-center absolute w-full h-full bg-black/50 z-50 top-0">
      <div className="flex flex-col w-96 z-50 bg-white rounded-lg items-center gap-1 px-2 pb-2 shadow-md overflow-auto overflow-x-hidden h-4/6">
        <div className="flex h-16 justify-between items-center gap-1 p-2 self-stretch bg-zinc-100">
          <div className="flex w-20 h-5 gap-1 items-center justify-center">
            <h1 className="font-bold text-black">{modalTitle}</h1>
            <img src={icon} width={16} height={16} alt="" />
          </div>
          <button
            className="w-20 h-5 gap-1 bg-black/50 hover:bg-black/10 rounded-full flex items-center justify-center disabled:btn-disabled disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handleBack}
            disabled={!canGoBack}>
            <img
              className="rounded-full w-5 h-4 cursor-pointer"
              src={img}
              alt="esquerda"/>
            <h1 className="text-xs text-black">Fechar</h1>
          </button>
        </div>
        {content}
      </div>
    </div>
  );
}
