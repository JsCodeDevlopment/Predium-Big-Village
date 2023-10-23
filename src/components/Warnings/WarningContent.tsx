import Trash from "../../assets/images/trash.png";
import { useEffect, useState } from "react";
import { Warnings } from "../../servises/api/Warnings";
import { INewWarning, IWarning } from "../../Interfaces/IWarning";
import { baseUrl } from "../../servises/baseUrl";


export function WarningContent() {
    const [warnings, setWarnings] = useState<IWarning[]>([]);
    const [newAviso, setNewAviso] = useState<INewWarning>({
      apartmentNumber: "",
      title: "",
      description: "",
    });
    const fetchWarnings = async () => {
      try {
        const response = await Warnings.showAll();
        setWarnings(response);
      } catch (error) {
        console.error("Erro ao buscar os avisos:", error);
      }
    };
  
    useEffect(() => {
      fetchWarnings();
    }, []);
  
    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = event.target;
      setNewAviso((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleAddAviso = async () => {
      try {
        const { apartmentNumber, title, description } = newAviso;
  
        if (!apartmentNumber || !title || !description) {
          console.error("Por favor, preencha todos os campos.");
          alert("Por favor, preencha todos os campos.");
          return;
        }
  
        const response = await fetch(`${baseUrl}/warning/${apartmentNumber}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            details: description,
          }),
        });
  
        if (!response.ok) {
          console.error("Erro ao criar o aviso:", response.statusText);
          return;
        }
  
        const newWarning = await response.json();
        setWarnings([...warnings, newWarning]);
  
        setNewAviso({
          apartmentNumber: "",
          title: "",
          description: "",
        });
      } catch (error) {
        console.error("Erro ao criar o aviso:", error);
      }
    };
  
    const handleDelete = async (id: string) => {
      await Warnings.delete(id);
      await fetchWarnings();
    };
    return (
      <div className="flex gap-1 justify-center items-center w-full pb-1 px-5 flex-col flex-wrap border-b-2 ">
        <label className="label">
          <span className="label-text text-black/70">Apartamento: </span>
        </label>
        <input
          placeholder="Ex: 1"
          className="input input-ghost input-sm w-full max-w-xs"
          required
          name="apartmentNumber"
          value={newAviso.apartmentNumber}
          onChange={handleInputChange}
        />
        <label className="label">
          <span className="label-text text-black/70">Titulo: </span>
        </label>
        <input
          type="text"
          placeholder="Titulo aqui..."
          className="input input-ghost w-full"
          required
          name="title"
          value={newAviso.title}
          onChange={handleInputChange}
        />
        <label className="label">
          <span className="label-text text-black/70">Descrição: </span>
        </label>
        <textarea
          placeholder="Descreva aqui..."
          className="textarea textarea-ghost textarea-sm w-full max-w-xs"
          required
          name="description"
          value={newAviso.description}
          onChange={handleInputChange}
        />
        <button className="btn w-40 h-5 btn-accent" onClick={handleAddAviso}>
          Adicionar
        </button>
        {warnings.map((warning) => (
        <div
          key={warning.id}
          className="flex p-2 justify-between w-full items-center gap-2 flex-1 border-b-2"
        >
          <p>{warning.title}</p>
          <div className="flex h-auto w-30 break-all">
            <p>{warning.details}</p>
          </div>
          <button
            className="w-10 h-10 gap-1 bg-black/10 hover:bg-black/30 cursor-pointer rounded-full flex items-center justify-center"
            onClick={() => handleDelete(warning.id)}
          >
            <img src={Trash} width={18} height={18} alt="" />
          </button>
        </div>
      ))}
      </div>
    );
  }