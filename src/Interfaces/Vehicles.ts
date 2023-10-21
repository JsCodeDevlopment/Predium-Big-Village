export interface IVehiclesInfProps {
    vehicle: IVehicles[];
  }

interface IVehicles {
    id: string
    type: any[]
    brand: string
    model: string
    plate: string
    peopleId: string
    apartmentId: string
}