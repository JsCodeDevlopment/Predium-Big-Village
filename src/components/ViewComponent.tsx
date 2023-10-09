import { AddNewPerson } from "./NewMorador";
import { Unidades } from "./Unidades"
import { UnidadesInfo } from "./UnidadesInfo";

export function ViewComponent() {
    return (
      <div className="flex bg-white shadow-md flex-col rounded-md px-7 py-10 items-center w-5/6 h-4/5">
        <Unidades/>
        {/* <UnidadesInfo/> */}
        {/* <AddNewPerson/> */}
      </div>
    );
  }
  