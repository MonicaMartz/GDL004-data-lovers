import { filterGryffindor, filterSlytherin, filterRavenclaw, filterHufflepuff } from './data.js'

/*REGISTRA Y MUESTRA EL NOMBRE DEL USUARIO*/
function welcomeUser() {
    let welcome = document.getElementById("name").value;
    document.getElementById("user").innerHTML= welcome;

   console.log(welcome);
}
document.getElementById("boton").addEventListener("click",welcomeUser);


/*ENLACE DE IMPORTACION DE BASE POTTER*/
import { POTTER } from './data/potter/potter.js';

/*MUESTRA LOS NOMBRES E IMAGEN RESULTADO DEL FILTRO DE GRIFFINDOR*/
const personajesGriffindor = filterGryffindor(POTTER)
 personajesGriffindor.map((personage) =>{

  let tempG = document.createElement("span");
  const template = `<div class ="element"> ${personage.name}</div>
  <img class="img" src=${personage.image}></div>`
  tempG.innerHTML = template;
  document.getElementById("PersonGriffindor").appendChild(tempG);
})


/*FILTRO CASA GRIFFINDOR*/
/*function filtradoHouseG() {
  //import { filterGryffindor } from './data.js';
  console.log(filterGryffindor(POTTER));
/*document.getElementById("PersonGriffindor").innerHTML = filterGryffindor(POTTER);
}
document.getElementById("botonGrif").addEventListener("click",filtradoHouseG);
*/

/*FILTRO CASA HUFFLEPUFF*/
function  filtradoHouseH(){
  console.log(filterHufflepuff(POTTER));
document.getElementById("PersonHufflepuff").innerHTML = filterHufflepuff(POTTER);
}
document.getElementById("botonHuff").addEventListener("click",filtradoHouseH);

/*FILTRO CASA RAVENCLAW*/
function  filtradoHouseR(){
  console.log(filterRavenclaw(POTTER));
document.getElementById("PersonRavenclaw").innerHTML = filterRavenclaw(POTTER);
}
document.getElementById("botonRave").addEventListener("click",filtradoHouseR);

/*FILTRO CASA SLYTERIN*/
function  filtradoHouseS(){
  console.log(filterSlytherin(POTTER));
document.getElementById("PersonSlytherin").innerHTML = filterSlytherin(POTTER);
}
document.getElementById("botonSlyt").addEventListener("click",filtradoHouseS);
