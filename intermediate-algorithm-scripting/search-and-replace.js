/**
 * Intermediate Algorithm Scripting: Search and Replace
 * 
 * Perform a search and replace on the sentence using the arguments provided and 
 * return the new sentence.
 * 
 * First argument is the sentence to perform the search and replace on.
 * 
 * Second argument is the word that you will be replacing (before).
 * 
 * Third argument is what you will be replacing the second argument with (after).
 * 
 * Note
 * Preserve the case of the first character in the original word when you are 
 * replacing it. For example if you mean to replace the word "Book" with the word 
 * "dog", it should be replaced as "Dog"
 */
function myReplace(str, before, after) {
  const beforeInLowerCase = before.toLowerCase(); 
  // console.log(beforeInLowerCase);
  const beforeInUpperCase = before.replace(before[0], before[0].toUpperCase()) 
  // console.log(beforeInUpperCase);
  const afterInLowerCase = after.toLowerCase(); 
  // console.log(afterInLowerCase);
  const afterInUpperCase = after.replace(after[0], after[0].toUpperCase()) 
  // console.log(afterInUpperCase);
  let newStr = str.replaceAll(beforeInLowerCase, afterInLowerCase);
  newStr = newStr.replaceAll(beforeInUpperCase, afterInUpperCase);
  return newStr;
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));