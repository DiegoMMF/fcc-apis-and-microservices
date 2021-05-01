/**
 * Intermediate Algorithm Scripting: Smallest Common Multiple
 * 
 * Find the smallest common multiple of the provided parameters that can be evenly 
 * divided by both, as well as by all sequential numbers in the range between these 
 * parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in 
 * numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
 * that is also evenly divisible by all numbers between 1 and 3. The answer here 
 * would be 6.
 */

const construirArreglo = parInicial => {

  parInicial.sort((a,b) => a - b );

  const arregloNuevo = [];

  let index = parInicial[0];

  while (index <= parInicial[1]) {

    arregloNuevo.push(index);

    index++;

  }

  return arregloNuevo;

}

// console.log(construirArreglo([6,1]));

function smallestCommons(arr) {

  const arregloExtensivo = construirArreglo(arr);

  const isEvenlyDivided = arreglo => {

    let dividend = arreglo.slice(arreglo.length -1);    

    const checkElem = element => dividend % element === 0;

    while (!arreglo.every(checkElem)) { dividend++ }

    return dividend;
  }
  
  return isEvenlyDivided(arregloExtensivo);
}

console.log(smallestCommons([5, 1]));


