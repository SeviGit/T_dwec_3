"use strict"

import * as jugador from "./jugador.mjs"

 //ARRAY JUGADORES
 let aJugadores=[];

export class Equipo{

    //CONSTRUCTOR

        constructor(nombreEquipo, ciudad, escudo, entrenador){
            this.nombreEq=nombreEquipo;
            this.ciudad=ciudad;
            this.escudo=escudo;
            this.mister=entrenador;
        }

    //SETTERS Y GETTERS

    get nombreEq(){
        return this._nombreEq;
    }

    set nombreEq(nombre){
        //Comprobamos que no este vacio
        if (nombre!="" && nombre!=undefined){

            //Comprobamos que es un string
            if(typeof nombre === 'string' || nombre instanceof String){

                this._nombreEq = nombre.toUpperCase();//Si todo es correcto guardamos el nombre en mayusculas
            
            }else{
                throw new Error("Los datos del mombre deben der un string");
            }
        }else{
            throw new Error("No puede estar vacío"); 
        }
    }

    get ciudad(){
        return this._ciudad;
    }

    set ciudad(city){
        //Comprobamos que no este vacio
        if (city!="" && city!=undefined){

            //La primera letra que sea mayusculas y el resto en minusculas
            this._ciudad = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

        }else{
            throw new Error("La ciudad no puede estar en blanco"); 
        }
    }

    get escudo(){
        return this._escudo;
    }

    set escudo(img){
        //Comprobamos que es un string
        if(typeof img === 'string' || img instanceof String){

            //Comprobamos con el método endWith si la cadena termina en jpg o png. 
            if (img.endsWith('jpg') || img.endsWith('png')){
                this._escudo = img;

            }else{
                this._escudo = "img_default.png"
            }
        }else{
                throw new Error("Los datos del escudo deben der un string");
        }
    }

    get mister(){
        return this._mister;
    }

    set mister(nombre){
        //Comprobamos que no este vacio
        if (nombre!="" && nombre!=undefined){

            //Comprobamos que es un string
            if(typeof nombre === 'string' || nombre instanceof String){

                //Comprobamos que no tiene menos de 4 caracteres
                if(nombre.length > 3){
                    this._mister = nombre.toUpperCase();//Si todo es correcto guardamos el nombre en mayusculas

                }else{//Usamos throw para generar un error y controlarlo con try ...catch
                    throw new Error("El nombre del entrenador debe tener mínimo 4 caracteres");
                }
            }else{
                throw new Error("Los datos del entrenador deben ser un string");
            }
        }else{
            throw new Error("El nombre del entrenador no puede estar vacío"); 
        }
    }

   

    //FUNCIONES

    toString(){
        return `<h3>El equipo ${this._nombreEq} reside en ${this._ciudad} y su entrenador es ${this._mister}, su escudo ${this._escudo}</h3>`;
    }

}

export let altaJugador = (obj)=>{

    let existe = false; 
    //Recorremos el array para ver si existe el jugador
    for(let ele of aJugadores){
        if(ele.nombre == obj.nombre){
            existe = true
        }
    }
    //Si existe retornamos false, si no añadimos al array y retornamos true
    if(existe){
        return false;
    }else{
        aJugadores.push(obj);
        return true;
    }
}

export let eliminarJugador = (nombre)=>{
    let existe = false; 
    let index;
    //Recorremos el array para ver si existe el jugador
    for(let i in aJugadores){
        if(aJugadores[i].nombre === nombre){
            index= i ;
            existe = true
        }
    }
    //Si existe lo borramos
    if(existe){
        aJugadores.splice(index, 1);
        return true;

    }else{
       
        return false;
    }
}

export let ordenaJugDorsal = (dorsal) =>{
    //ordenar por dorsal ascendente
    aJugadores.sort((a, b) => {
        return a.dorsal - b.dorsal; 
    });
}



