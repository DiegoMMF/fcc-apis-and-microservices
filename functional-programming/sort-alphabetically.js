/**
 * Use the sort method in the alphabeticalOrder function to sort the elements
 * of arr in alphabetical order.
 * @param {string[]} arr 
 */
function alphabeticalOrder(arr) {
  /**
   * If compareFunction(a,b) returns a value less than 0 for two elements a and b,
   * then a will come before b. If compareFunction(a,b) returns a value greater than 0
   * for two elements a and b, then b will come before a. If compareFunction(a,b) returns
   * a value equal to 0 for two elements a and b, then a and b will remain unchanged.
   * */
  return arr.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
}

console.table(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));