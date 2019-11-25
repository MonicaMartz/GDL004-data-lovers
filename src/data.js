/* Manejo de data */

// esta es una función de ejemplo

/*export const filterHouse = () => {
  let house= POTTER.filter()

  return 'example';
};*/

export const filterHouse = (POTTER) =>{
  const house = POTTER.filter(personage => (personage.house === "Gryffindor"));

  return house;
}


/*export const filterHouse = (POTTER) =>{
  const house = POTTER.filter(personage => (personage.house === "Gryffindor"));


  return house;
}
*/
/*export const filterHouse = (POTTER) => {
  for(let i=0; i<POTTER.length; i++){
    if(POTTER[i].house =="Griffindor")
    let casa += (POTTER[i].name);
    return casa;
  }
}
/*export const filterHouse = (POTTER) =>{
  for(let i=; i<POTTER.length; i++){

  }
  const house = POTTER.filter(personage => (personage.house === "Gryffindor"));
  return house;
}*/


/*export const NameHouse = POTTER.map(personage )*/
//console.assert(POTTER["house"]);
