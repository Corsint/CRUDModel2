export interface Ropa{
    id:string|number
    modelo:string
    descripcion:string
    precio:number
    categoria:string
    enOferta:boolean
}

export type RopaData = Omit<Ropa,'id'>
