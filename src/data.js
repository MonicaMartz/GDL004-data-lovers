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

//console.assert(POTTER["house"]);
