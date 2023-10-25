import { ResidentContent } from "./ResidentContent";
import Close from "../../assets/images/esquerda.png";
import Person from '../../assets/images/user2.png'
import { Modal } from "../Modal";

export function ResidentModal() {
  return (
    <Modal
      icon={Person}
      img={Close}
      modalTitle="Morador"
      content={<ResidentContent />}
    />
  );
}
