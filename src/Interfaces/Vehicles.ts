export interface IVehiclesInfProps {
    vehicle: IVehicles[];
  }

export interface IVehicles {
    id: string
    type: string
    brand: string
    model: string
    plate: string
    peopleId: string
    apartmentId: string
}

export interface IVehicleState {
  brand: string
  plate: string
  type: string
  cpf: string
  model: string
  apartmentNumber: string
}