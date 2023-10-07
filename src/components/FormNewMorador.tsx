export function FormNewMorador() {
  return (
    <>
      <label className="label">
        Nome:
        <input
          type="text"
          placeholder="Ex: João da Silva..."
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </label>
      <label className="label">
        Email:
        <input
          type="text"
          placeholder="Ex: joao@email.com"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </label>
      <label className="label">
        RG:
        <input
          type="text"
          placeholder="Ex: 131278951235-2"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </label>
      <label className="label">
        CPF:
        <input
          type="text"
          placeholder="Ex: 123.321.123-12"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </label>
      <label className="label">
        Celular:
        <input
          type="text"
          placeholder="Ex: (99) 9 9999-9999"
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </label>
      <label className="label">
        Tipo:
        <select className="select select-bordered select-xs w-full max-w-xs">
          <option disabled selected>
            Opções...
          </option>
          <option>Proprietário</option>
          <option>Inquilino</option>
        </select>
      </label>
      <label className="label">
        Apartamento:
        <select defaultValue={'DEFAULT'} className="select select-bordered select-xs w-full max-w-xs">
          <option value="DEFAULT" disabled selected>
            Apartamentos...
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
      </label>
    </>
  );
}
