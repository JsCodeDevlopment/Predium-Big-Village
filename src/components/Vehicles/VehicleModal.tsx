import Car from "../../assets/images/car.png";
import Close from "../../assets/images/esquerda.png";
import { Modal } from "../Modal";
import { VehicleContent } from "./VehicleContent";

export function VehicleModal() {

  return (
    <Modal
      icon={Car}
      img={Close}
      modalTitle="Veículos"
      content={<VehicleContent />}
    />
    );
}
