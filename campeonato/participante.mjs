"use strict"


//       PARTICIPANTE
// ==================================================================================

export class Participante {

    //CONSTRUCTOR(nombre,provincia)
        constructor(nom,pro){
            this.nombre=nom;
            this.provincia=pro;
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

                    //Comprobamos que no tiene menos de 5 caracteres
                    if(nombre.length > 4){
                        this._nombre = nombre.toUpperCase();//Si todo es correcto guardamos el nombre en mayusculas

                    }else{//Usamos throw para generar un error y controlarlo con try ...catch
                        throw new Error("El nombre debe tener mínimo 5 caracteres");
                    }
                }else{
                    throw new Error("Los datos intrducidos no son un string");
                }
            }else{
                throw new Error("No puede estar vacío"); 
            }
        }

        get provincia() {
            return this._provincia;
        }
        set provincia(provincia) {
           //Comprobamos que no este vacio
            if (provincia!="" && provincia!=undefined){

                //Comprobamos que es un string
                if(typeof provincia === 'string' || provincia instanceof String){

                    //Comprobamos que no tiene menos de 5 caracteres
                    if(provincia.length > 4){
                        this._provincia = provincia.toUpperCase();//Si todo es correcto guardamos el provincia en mayusculas

                    }else{//Si tiene menos de 5 caracteres le añadimos '...'
                        this._provincia = `${provincia.toUpperCase()} ...`;
                    }
                }else{//Usamos throw para generar un error y controlarlo con try ...catch
                    throw new Error("Los datos intrducidos no son un string");
                }
            }else
                throw new Error("No puede estar vacío"); 
            }

    //FUNCIONES
        toString(){
            return `${this.nombre} de ${this.provincia}`;
        }
}

 let  oPersona;

// try{
//     oPersona=new Participante("Pablo", "Sev");
//     document.write(oPersona.toString());
// }catch (e){
//     document.write(e);
// }


// oPersona=new Participante("María", "Sevilla");
// console.log(oPersona.toString());

// oPersona.nombre=prompt("Introduza nombre");
// document.write(oPersona.toString());

export let datos =()=>{
try{
    let oPersona=new Participante("Pablo", "Sev");
    document.getElementById("mostrar").innerHTML=oPersona.toString();
}catch (e){
    document.getElementById("mostrar").innerHTML=e;
}
}


