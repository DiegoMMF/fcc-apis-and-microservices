/**
 * Intermediate Algorithm Scripting: DNA Pairing
 * 
 * The DNA strand is missing the pairing element. Take each character, get its 
 * pair, and return the results as a 2d array.
 * 
 * Base pairs are a pair of AT and CG. Match the missing element to the provided 
 * character.
 * 
 * Return the provided character as the first element in each array.
 * 
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * 
 * The character and its pair are paired up in an array, and all the arrays are 
 * grouped into one encapsulating array.
 */
function pairElement(str) {
  const sourceArr = str.split("")
  const finalArr = [];
  let currentPair = [];
  sourceArr.forEach(element => {
    currentPair.push(element);
    switch (element) {
      case "A":
        currentPair.push("T");
        break;
      case "C":
        currentPair.push("G");
        break;
      case "G":
        currentPair.push("C");
        break;
      case "T":
        currentPair.push("A");
        break;
      default:
        break;
    };
    finalArr.push(currentPair);
    currentPair = [];
  });  
  return finalArr;
}

console.log(pairElement("GCG"))