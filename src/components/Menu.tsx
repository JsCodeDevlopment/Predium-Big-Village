import Person from '../assets/images/user2.png'
import Moradores from '../assets/images/moradores.png'
import LogOut from '../assets/images/sign-out.png'
import Car from '../assets/images/car.png'
import Pet from '../assets/images/pet.png'
import Visitor from '../assets/images/visitor.png'
import Avisos from '../assets/images/avisos.png'

const links = [
  {
    text: "Profile",
    href: "#profile",
    image: Person
  },
  {
    text: "Moradores",
    href: "#moradores",
    image: Moradores
  },
  {
    text: "Avisos",
    href: "#avisos",
    image: Avisos
  },
  {
    text: "Veículos",
    href: "#veiculos",
    image: Car
  },
  {
    text: "Pets",
    href: "#pets",
    image: Pet
  },
  {
    text: "Visitas",
    href: "#visitas",
    image: Visitor
  },
  {
    text: "Log out",
    href: "#exit",
    image: LogOut
  },
];

export function MenuOptions() {
  return (
    <div className="inline-flex flex-col items-center absolute bg-white rounded-sm shadow-md top-[4.3rem] right-2">
      <ul className="flex p-2 flex-col items-start w-48 h-96 menu">
        <li className="flex gap-2 py-1 px-2 w-full  text-black font-bold border-b border-black/20">Opções</li>
        {links.map((link) => (
          <li key={link.text} className="flex gap-2 py-1 px-2 w-full text-zinc-600">
            <a href={link.href}><img src={link.image} height={18} width={18} alt=""/>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
