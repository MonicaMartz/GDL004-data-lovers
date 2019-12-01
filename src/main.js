import { filterGryffindor, filterSlytherin, filterRavenclaw, filterHufflepuff } from './data.js'
/*ENLACE DE IMPORTACION DE BASE POTTER*/
import { POTTER } from './data/potter/potter.js';
 /*REGISTRA Y MUESTRA EL NOMBRE DEL USUARIO OCULTA PAG1,PAG3 Y MUESTRA PAG2*/
function welcomeUser() {
    let welcome = document.getElementById("name").value;
    document.getElementById("user").innerHTML= "Bienvenido"+" "+ welcome;
    document.getElementById("pagina2").style.display = "block";
    document.getElementById("pagina3").style.display = "none";
    document.getElementById("pagina1").style.display = "none";
};

/*FUNCION CONDICIONAL PARA QUE EJECUTE WELCOMEUSER*/
document.getElementById("boton").addEventListener("click",conditional);
function conditional() {
    let welcome = document.getElementById("name").value
    if(welcome.length >= 3){
      welcomeUser(); filterHufflepuff
    }
     else{
         alert("escribe tu nombre");
     }
};
   /* OCULTAR PAG2 MOSTRAR PAG3*/
   document.getElementById("pepecho").addEventListener("click",mostrarPag3);
   function mostrarPag3(){
       document.getElementById("pagina3").style.display = "block";
       document.getElementById("pagina2").style.display = "none";
   };
/*MUESTRA PAG2 OCULTA PAG3 Y PAG1*/
document.getElementById("boton_pag3").addEventListener("click",retornarpag3);
function retornarpag3(){
   
    document.getElementById("pagina2").style.display = "block";
    document.getElementById("pagina3").style.display = "none";
    
};
document.getElementById("botonGryf").addEventListener("click",ejecutarGryffindor);
document.getElementById("botonHuff").addEventListener("click",ejecutarHufflepuff);
document.getElementById("botonRave").addEventListener("click",ejecutarRavenclaw);
document.getElementById("botonSlyt").addEventListener("click",ejecutarSlytherin);

/*MUESTRA LOS NOMBRES E IMAGEN RESULTADO DEL FILTRO DE GRYFFINDOR*/
function ejecutarGryffindor(){
  
  const personagesGryffindor = filterGryffindor(POTTER)
  personagesGryffindor.map((personage) =>{
  let tempG = document.createElement("span");
  const template = `<div class ="element_name"> ${personage.name}</div>
  <img class="img_potter" src=${personage.image}></div>`
  tempG.innerHTML = template;
  document.getElementById("PersonGryffindor").appendChild(tempG);
})};

/*FILTRO CASA HUFFLEPUFF*/
function ejecutarHufflepuff(){const personagesHufflepuff = filterHufflepuff(POTTER)
    personagesHufflepuff.map((personage) =>{
     let tempH = document.createElement("span");
     const template = `<div class ="element_nameH"> ${personage.name}</div>
     <img class="img_potter" src=${personage.image}></div>`
     tempH.innerHTML = template;
     document.getElementById("PersonHufflepuff").appendChild(tempH);
   })};
   
/*FILTRO CASA RAVENCLAW*/
function ejecutarRavenclaw(){const personagesRavenclaw = filterRavenclaw(POTTER)
    personagesRavenclaw.map((personage) =>{
     let tempR = document.createElement("span");
     const template = `<div class ="element_nameR"> ${personage.name}</div>
     <img class="img_potter" src=${personage.image}></div>`
     tempR.innerHTML = template;
     document.getElementById("PersonRavenclaw").appendChild(tempR);
   })};


/*FILTRO CASA SLYTERIN*/
function ejecutarSlytherin(){const personagesSlytherin = filterSlytherin(POTTER)
    personagesSlytherin.map((personage) =>{
     let tempS = document.createElement("span");
     const template = `<div class ="element_nameS"> ${personage.name}</div>
     <img class="img_potter" src=${personage.image}></div>`
     tempS.innerHTML = template;
     document.getElementById("PersonSlytherin").appendChild(tempS);
   })};

