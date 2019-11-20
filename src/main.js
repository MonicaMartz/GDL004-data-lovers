 /**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

/*REGISTRA Y MUESTRA EL NOMBRE DEL USUARIO*/
function welcomeUser() {
    let welcome = document.getElementById("name").value;
    document.getElementById("user").innerHTML= welcome;

   console.log(welcome);
}
document.getElementById("boton").addEventListener("click",welcomeUser);

/*Cambio de pagina 1 a 2*/

function cambioPagina() {
    document.getElementById('pagina2').style.display = "block";
    document.getElementById('pagina1').style.display = "none";
}





import { POTTER } from './data/potter/potter.js';
 /*prueba funcion
function filtrar (){*/
import { filterHouse } from './data.js';

console.log(filterHouse(POTTER));


document.getElementById("PersonGriffindor").innerHTML += (filterHouse(POTTER));

document.getElementById("Griffindor").addEventListener("click",(filterHouse(POTTER)));


/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
