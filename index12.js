function capitalize(str) {
    return str
      .split(" ")                  
      .map(world => world[0].toUpperCase() + world.slice(1)) 
      .join(" ");                     
  }
  
  console.log(capitalize("heelo world"));