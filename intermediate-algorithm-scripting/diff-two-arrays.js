/**
 * Intermediate Algorithm Scripting: Diff Two Arrays
 * 
 * Compare two arrays and return a new array with any items only found in one of 
 * the two given arrays, but not both. In other words, return the symmetric 
 * difference of the two arrays.
 * 
 * Note you can return the array with its elements in any order.
 */
function diffArray(arr1, arr2) {
    const diffOne = arr1.filter(elem => !arr2.includes(elem));
    const diffTwo = arr2.filter(elem => !arr1.includes(elem));
    return diffOne.concat(diffTwo);
  }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
