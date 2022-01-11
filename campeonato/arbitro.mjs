"use strict"

import {Participante} from "./participante.mjs"






export class Arbitro extends Participante{

    constructor(nombre, provincia, anioFederado){
        //parámetros a la clase padre
        super(nombre,provincia);
        //parámetros de la propia clase juagdor
        this.anioF=anioFederado;
    
    }

    //SETTERS Y GETTERS
    get anioF(){
        return this.anioF
    }

    set anioF(anio){
        //Comprobamos que no este vacío
        if (anio!="" && anio!=undefined){

            //Comprobamos que no sea mayor a 2021
            if(anio < 2022){
                this._anioF = anio;
            }else{
                throw new Error('El año no puede ser mayor a 2021');
            }
        }else{
            throw new Error('El año no puede estar vacío');
        }
    }

    //FUNCIONES

    toString(){
        return `<h3>${super.toString()} arbitro federado en ${this._anioF}</h3>`;
    }
}


