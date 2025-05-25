import { Tag } from './tag';

export class Tablero {
    id: number;
    nombre: string;
    filas: number;
    columnas: number;
    mainTag: Tag;
    listaTags: Tag[];

    constructor(id: number, nombre: string, filas: number, columnas: number, mainTag: Tag, listaTags: Tag[]){
        this.id = id;
        this.nombre = nombre;
        this.filas = filas;
        this.columnas = columnas;
        this.mainTag = mainTag;
        this.listaTags = listaTags;
    }
}