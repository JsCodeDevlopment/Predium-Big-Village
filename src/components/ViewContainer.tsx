import { LoginPage } from "./LoginPage";
import { ViewComponent } from "./ViewComponent"

export function ViewContainer() {
  return (
    <div className="flex bg-white/80 shadow-md rounded-md w-11/12 px-5 h-5/6 items-center justify-center">
      {/* <LoginPage/> */}
      <ViewComponent/>
    </div>
  );
}
