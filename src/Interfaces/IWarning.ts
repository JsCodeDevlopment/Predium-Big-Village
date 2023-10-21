export interface IWarningsInfProps {
  warning: IWarning[];
}

interface IWarning {
  id: string
  title: string
  details: string
  date: Date
  apartmentId: string
}

export interface INewWarning {
  apartmentNumber: string
  title: string
  description: string
}