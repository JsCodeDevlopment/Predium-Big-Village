import Avisos from "../../assets/images/mensagem.png";
import Close from "../../assets/images/esquerda.png";
import { Modal } from "../Modal";
import { WarningContent } from "./WarningContent";

export function WarningModal() {
  return (
    <Modal
      icon={Avisos}
      img={Close}
      modalTitle="Avisos"
      content={<WarningContent />}
    />
  );
}


