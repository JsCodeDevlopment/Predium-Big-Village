export function ResidentForm() {
  return (
    <>
      <input
        type="text"
        placeholder="Nome"
        className="input input-ghost input-sm w-full max-w-xs"/>
      <input
        type="text"
        placeholder="E-mail"
        className="input input-ghost input-sm w-full max-w-xs"/>
      <input
        type="text"
        placeholder="RG"
        className="input input-ghost input-sm w-full max-w-xs"/>
      <input
        type="text"
        placeholder="CPF"
        className="input input-ghost input-sm w-full max-w-xs"/>
      <input
        type="text"
        placeholder="Celular"
        className="input input-ghost input-sm w-full max-w-xs"/>
      <select className="select select-ghost select-xs w-full max-w-xs">
        <option disabled selected>
          Tipo
        </option>
        <option>Proprietário</option>
        <option>Inquilino</option>
      </select>
      <select className="select select-ghost select-xs w-full max-w-xs">
        <option disabled selected>
          Apartamentos
        </option>
        <option>AP - 001</option>
        <option>AP - 002</option>
        <option>AP - 003</option>
        <option>AP - 004</option>
        <option>AP - 005</option>
        <option>AP - 006</option>
        <option>AP - 007</option>
        <option>AP - 008</option>
        <option>AP - 009</option>
        <option>AP - 010</option>
      </select>
    </>
  );
}
