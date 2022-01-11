"use strict"

import { Equipo } from "./equipo.mjs";
import { Participante } from "./participante.mjs";

let _participantes=[];
_participantes[0]=[];
_participantes[1]=[];


export class Campeonato{
//CONSTRUCTOR
    constructor (nombre, ciudad, descripcion ){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.descripcion = descripcion;
    }
//SETTERS Y GETTERS
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        //Comprobamos que no este vacio
        if (nombre!="" && nombre!=undefined){
            //Comprobamos que es un string
            if(typeof nombre === 'string' || nombre instanceof String){
                this._nombre = nombre;//Si todo es correcto guardamos el nombre 
            }else{
                throw new Error("Los datos intrducidos no son un string");
            }
        }else{
            throw new Error("No puede estar vacío"); 
        }
    } 

    get ciudad() {
        return this._ciudad;
    }

    set ciudad(ciudad) {
        //Comprobamos que no este vacio
        if (ciudad!="" && ciudad!=undefined){
            //Comprobamos que es un string
            if(typeof ciudad === 'string' || ciudad instanceof String){
                this._ciudad = ciudad;//Si todo es correcto guardamos el ciudad 
            }else{
                throw new Error("Los datos intrducidos no son un string");
            }
        }else{
            this._ciudad = ciudad; 
        }
    } 

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(str){
        if(str.lenght > 100){
            throw new Error("La descripción no puede ser superior al 100 caracteres");
        }else{
            this._descripcion = str;
        }
    }

    //FUNCIONES

    
    añadirParticipante = (obj)=>{

        if(obj.constructor.name == Arbitro ){
    
            _participantes[0].push(obj);
        }
        if(obj.constructor.name == Equipo ){
    
            _participantes[1].push(obj);
        }
    }   

    toString(){
        `<table>
        <caption>Campeonato ${this._nombre}</caption>
        <tr>
            <th>Equipo</th>
            <th>Jugadores</th>
            <th>Escudo</th>
        </tr>
        <tr></tr>

        
        </table>`

    }
}



