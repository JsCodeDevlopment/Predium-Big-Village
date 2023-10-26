import Person from "../assets/images/user2.png";
import Moradores from "../assets/images/moradores.png";
import LogOut from "../assets/images/sign-out.png";
import Car from "../assets/images/car.png";
import Pet from "../assets/images/pet.png";
import Visitor from "../assets/images/visitor.png";
import Avisos from "../assets/images/avisos.png";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "../context/loginContext";

const links = [
  {
    text: "Moradores",
    href: "resident-modal",
    image: Moradores,
  },
  {
    text: "Avisos",
    href: "aviso-modal",
    image: Avisos,
  },
  {
    text: "Veículos",
    href: "vehicle-modal",
    image: Car,
  },
  {
    text: "Pets",
    href: "pets-modal",
    image: Pet,
  },
  {
    text: "Visitas",
    href: "#visitas",
    image: Visitor,
  }
];

interface IMenuOptionsProps {
  setMenuVisible: Dispatch<SetStateAction<boolean>>
}

export function MenuOptions({ setMenuVisible }: IMenuOptionsProps) {
  const { logout } = useLogin()

  const handleClick = ()=> {
    logout()
    setMenuVisible(false)
  }
  return (
    <div className="inline-flex flex-col items-center absolute bg-white rounded-sm shadow-md top-[4.3rem] right-2">
      <ul className="flex p-2 flex-col items-start w-48 h-80 menu">
        <li className="flex gap-2 py-1 px-2 w-full  text-black font-bold border-b border-black/20">
          Opções
        </li>
        {links.map((link) => (
          <li
            key={link.text}
            className="flex gap-2 py-1 px-2 w-full text-zinc-600"
            onClick={() => setMenuVisible(false)}
          >
            <Link to={link.href}>
              <img src={link.image} height={18} width={18} alt="" />
              {link.text}
            </Link>
          </li>
        ))}
        <li className="flex gap-2 py-1 px-2 w-full text-zinc-600">
          <button onClick={handleClick}>
            <img src={LogOut} height={18} width={18} alt="" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
