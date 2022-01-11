"use strict"

import {Participante} from "./participante.mjs"

let fecha,fechMin,fechMax,exp;




export class Jugador extends Participante{

    //CONSTRUCTOR
    constructor(nombre, provincia,fechaNac,dorsal,posicion){
        //parámetros a la clase padre
        super(nombre,provincia);
        //parámetros de la propia clase juagdor
        this.fechaNac=fechaNac;
        this.dorsal=dorsal;
        this.posicion=posicion;
    }

    //SETTERS Y GETTERS

    get fechaNac() {
        return this._fechaNac;
    }

    set fechaNac(fech) {
       
        //Creamos objeto tipo date con los datos introducidos.
        fecha = new Date(fech);
        //creamos dos objetos date con la fecha minima y maxima donde debe estar comprendida la fecha de nacimiento.
        fechMin = new Date("01 Jan 1979");
        fechMax = new Date("31 Dec 2011");

        if(fecha < fechMax && fecha >fechMin){
            this._fechaNac = fech;
        }else{
            throw new Error('La fecha de nacimiento es incorrecta');
        }
    }

    get dorsal(){
        return this._dorsal; 
    }

    set dorsal(number){
        //El número tiene que ser entre 1 y 25, si es otro dato será 25
        if(number > 0 && number < 26){
            this._dorsal = number;
        }else{
            this._dorsal = 25 ;
        }
    }

    get posicion(){
        return this._posicion;
    }

    set posicion(pos){
        //Creamos una expresión regular para que los datos coincidan con lo requerido
        exp = / a|p|b|e|ap /;
        if(pos.match(exp)){
            this._posicion=pos;
        }else{
            throw new Error('Los datos de la posición del jugador es erronea')
        }
    }


    //FUNCIONES
    toString(){
        return `<h3>${super.toString()} Nacido el ${this._fechaNac} , con el dorsal ${this._dorsal} y la posicion ${this._posicion}</h3>`;
    }




}

let oJugador;

export let datos =()=>{
try{
    let oJugador=new Jugador("Pablo", "Sevilla","04 Jul 1982",10,"b");
    document.getElementById("mostrar").innerHTML=oJugador.toString();
}catch (e){
    document.getElementById("mostrar").innerHTML=e;
}
}