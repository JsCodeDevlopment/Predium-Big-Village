import Pet from "../../assets/images/pet.png";
import Close from "../../assets/images/esquerda.png";
import { Modal } from "../Modal";
import { PetsContent } from "./PetContent";

export function PetsModal() {
  return (
    <Modal
      icon={Pet}
      img={Close}
      modalTitle="Pets"
      content={<PetsContent />}
    />
  );
}