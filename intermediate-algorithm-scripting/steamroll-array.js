/**
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 * Note: Your solution should not use the Array.prototype.flat()
 * or Array.prototype.flatMap() methods.
 */

 function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));