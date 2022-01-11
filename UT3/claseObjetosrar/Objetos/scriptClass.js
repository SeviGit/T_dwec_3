"use strict"
let oPersona, oPersonaII, oProfesor;
class Persona{
    //constructor
    constructor(nom,ape,anios){
        this.nombre=nom;
        this.apellidos=ape;
        this.edad=anios;
    }
    //functiones
     mostrar(){
         document.write(`<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años</h2>`);
     }
}

//clase que hereda de Persona
class Profesor extends Persona{
 constructor(nom, ape, anios,espec,fechaA){
    //establecer los parámetros a la clase padre
    super(nom,ape,anios);
    //establecer los parámetros de la propia clase profesor
    this.especialidad=espec;
    this.fechaAlta=fechaA;
 }
    //establecer los métodos propios de la clase
    mostrarPropProf(){
        document.write (`<h3>La especialidad es ${this.especialidad} y la fecha de alta es ${this.fechaAlta}`);
    }
}


//script
//crear el objeto
oPersona=new Persona("María", "López Pérez", 23);
oPersona.mostrar();
oPersona.nombre=prompt("Introduza nombre");
oPersona.mostrar();
//nuevo
oPersonaII= new Persona();
oPersonaII.nombre=prompt("Introduza nombre");
oPersonaII.apellidos=prompt("Introduza apellidos");
oPersonaII.edad=prompt("Introduza edad");
//oPersonaII.mostrarMasInfo();
// crear objetos de la clase Profesor

oProfesor=new Profesor();
oProfesor.nombre="Marta";
oProfesor.apellidos="Cano";
oProfesor.edad=23;
oProfesor.especialidad="Informática";
oProfesor.fechaAlta="21/10/2020";
//mostrar los datos
oProfesor.mostrar();
oProfesor.mostrarPropProf();
