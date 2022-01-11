"use strict";
//declaraciones
let cadena;
let persona = {
    //propiedades
    "nombre": "",
    apellidos: "",
    edad: 0,
    //métodos
    mostrar: function() { //no permite funciones arrows
        document.write(`<h2>${this.nombre} ${this.apellidos} tiene ${this.edad} años</h2>`);
    }
}
//script
//asignar datos a las propiedades
persona.nombre = prompt("Introduzca nombre");
persona.apellidos = "Jaén Carrasco";
persona.edad = false;
// llamar al método
persona.mostrar();
//parsear a cadena
cadena=JSON.stringify(persona)
console.log(typeof cadena) //string
cadena=JSON.parse(cadena)
console.log(typeof cadena) //objeto
console.log(cadena.nombre);