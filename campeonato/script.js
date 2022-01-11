"use strict"

//import { Participante } from "./participante.mjs" 
import * as participante from "./participante.mjs"
import * as jugador from "./jugador.mjs"
import * as arbitro from "./arbitro.mjs"
import * as equipo from "./equipo.mjs"
import * as campeonato from "./campeonato.mjs"


let  oPersona;



// jugador
// let jugad;
// try{
// jugad= new jugador.Jugador('Pacos','Madrid','04 Jul 1982',77,'ap');
// document.getElementById("mostrar").innerHTML=jugad.constructor.name//'EL jugador se a creado: '+ equipo.altaJugador(jugad);

// }catch (e){
//     document.getElementById("mostrar").innerHTML=e;
// }

// // try{
// //     let jugad2= new jugador.Jugador('Pacos','Madrid','04 Jul 1982',77,'ap');
// //     document.getElementById("mostrar").innerHTML=equipo.altaJugador(jugad2);
// //     }catch (e){
// //         document.getElementById("mostrar").innerHTML=e;
// //     }

// document.getElementById("mirar").innerHTML='SE ha borrado: '+ equipo.eliminarJugador('PACOS');

// // Arbitro jejeje
// try{
// let arbi= new arbitro.Arbitro('Pacos','Madrid',2000);
// document.getElementById("mostrar").innerHTML=arbi.toString();
// }catch (e){
//     document.getElementById("mostrar").innerHTML=e;
// }


// try{
// let team = new equipo.Equipo('Sevilla F.C','sEvilla','sdfsd.jpf','Lopetegui');
// document.getElementById("mostrar").innerHTML=team.toString();
// }catch (e){
//     document.getElementById("mostrar").innerHTML=e;
// }
try{
let miCamp= new campeonato.Campeonato('NBA','Puebla d cazlla','ñlaskhdfñlaskdfñaslkfjd');
document.getElementById("mostrar").innerHTML=arbi.miCamp.toString();

}catch (e){
      document.getElementById("mostrar").innerHTML=e;
     }
    
