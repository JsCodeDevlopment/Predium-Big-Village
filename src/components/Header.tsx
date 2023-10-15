import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";
import CloseMenu from "../assets/images/close-menu.png";
import { useState } from "react";
import { MenuOptions } from "./Menu";
import { useLogin } from "../context/loginContext";
import { Link } from "react-router-dom";

export function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuthenticated } = useLogin();
  
  const verification = () => {
    if (isAuthenticated) {
      return  false
    } else {
      return true
    }
  }

  return (
    <div className="flex w-full h-16 justify-between items-center shadow-md py-4 px-8 relative bg-white">
      <Link to="/"><img className="cursor-pointer" src={Logo} width={150} height={165} alt=""/></Link>
      <button disabled={verification()}>
      <img
        src={menuVisible ? CloseMenu : Menu}
        width={35}
        height={35}
        alt=""
        onClick={() => setMenuVisible(!menuVisible)}
      />
      </button>
      {menuVisible ? <MenuOptions setMenuVisible={setMenuVisible} /> : <></>}
    </div>
  );
}
