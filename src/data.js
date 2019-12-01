

/*FILTRO POR CASA.*/
export const filterGryffindor = (POTTER => {
  const gryffindor = POTTER.filter(personage =>(personage.house === "Gryffindor"));
  /*const namegryffindor = gryffindor.map(personage =>(personage.name)+" "+(personage.image));*/
    return gryffindor;
});
export const filterHufflepuff= (POTTER => {
  const hufflepuff= POTTER.filter(personage =>(personage.house === "Hufflepuff"));
      return  hufflepuff;
});

export const filterRavenclaw = (POTTER => {
  const ravenclaw= POTTER.filter(personage =>(personage.house === "Ravenclaw"));
      return ravenclaw;
});

export const filterSlytherin = (POTTER => {
  const slytherin= POTTER.filter(personage =>(personage.house === "Slytherin"));
     return slytherin;
});
