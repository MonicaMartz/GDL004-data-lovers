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

/*FILTRO POR CASA. MUESTRA NOMBRE*/
export const filterGryffindor = (POTTER => {
  const gryffindor = POTTER.filter(personage =>(personage.house === "Gryffindor"));
  /*const namegryffindor = gryffindor.map(personage =>(personage.name)+" "+(personage.image));*/
    return gryffindor;
});
export const filterHufflepuff= (POTTER => {
  const hufflepuff= POTTER.filter(personage =>(personage.house === "Hufflepuff"));
  const nameHufflepuff = hufflepuff.map(personage =>(personage.name));
    return  nameHufflepuff;
});

export const filterRavenclaw = (POTTER => {
  const ravenclaw= POTTER.filter(personage =>(personage.house === "Ravenclaw"));
  const nameRavenclaw = ravenclaw.map(personage =>(personage.name));
    return nameRavenclaw;
});

export const filterSlytherin = (POTTER => {
  const slytherin= POTTER.filter(personage =>(personage.house === "Slytherin"));
  const nameSlytherin = slytherin.map(personage =>(personage.name));
   return nameSlytherin.sort();
});
