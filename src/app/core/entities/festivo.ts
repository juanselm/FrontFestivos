export interface Festivo{
    id:number;
    nombre:string;
    dia:number;
    mes:number;
    diaspascua:number;
    tipo: { id: number, tipo: string };
}