/**
 * Arguments Optional
 * Create a function that sums two arguments together. If only one
 * argument is provided, then return a function that expects one
 * argument and returns the sum.
 * For example, addTogether(2, 3) should return 5, and addTogethe
 * (2) should return a function.
 * Calling this returned function with a single argument will then
 * return the sum:
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * If either argument isn't a valid number, return undefined. 
 */
const addTogether = (argumentoInexorable, argumentoOmitible) => {
  if (argumentoOmitible && typeof argumentoOmitible !== "number") return undefined;
  if (typeof argumentoInexorable === "number") {
    if (!argumentoOmitible) {
      const sumaClosure = argumentoFuturo => 
        (typeof argumentoFuturo  === "number") ?
          argumentoFuturo + argumentoInexorable :
          undefined
      return sumaClosure;
    } else {
      return argumentoInexorable + argumentoOmitible;
    }
  } else {
    // console.log("buuuuuuuuuuuuuu")
    return undefined;
  }


};
console.log(addTogether(3));
