import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";
import CloseMenu from "../assets/images/close-menu.png";
import { useState } from "react";
import { MenuOptions } from "./Menu";

export function Header() {
    const [menuVisible, setMenuVisible] = useState(false)
  return (
    <div className="flex w-full h-16 justify-between items-center shadow-md py-4 px-8 relative bg-white">
      <img src={Logo} width={150} height={165} alt="" />
      <img src={menuVisible ? CloseMenu : Menu } width={35} height={35} alt="" onClick={()=>setMenuVisible(!menuVisible)}/>
      {menuVisible ? <MenuOptions/> : <></>}
    </div>
  );
}
