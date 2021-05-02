/**
 * Binary Agents
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 */

/**
 * Let's say we want to convert the binary number 100110112 to decimal.
 * First, write it down. Then, write down the powers of two from right
 * to left. Start at 20, evaluating it as "1". Increment the exponent 
 * by one for each power. Stop when the amount of elements in the list 
 * is equal to the amount of digits in the binary number. The example 
 * number, 10011011, has eight digits, so the list, with eight elements,
 * would look like this: 128, 64, 32, 16, 8, 4, 2, 1 
 */

// console.log(getWeigthFromPosition("0", 7))

/**
 * 
 * @param {string} eightCharsBinaryString each binary representing a character
 * @returns 
 */
const transformString = eightCharsBinaryString => {

  const weightsArray = 
    Array.from(eightCharsBinaryString, (elem, index) => elem * 2 ** (7 - index));

  const charCode = weightsArray.reduce((acc, curr) => acc + curr);

  return String.fromCharCode(charCode);
};

/**
 * Splits the original string, transform each element and joins it again
 * @param {string} str complete string of eight digits binary numbers
 * @returns complete string matching each previous binary number with its char
 */
const binaryAgent =
  str => str.split(" ").map(elem => transformString(elem)).join("");

// Other choice could have been this:
// const binaryAgent = str => Array.from(str, applyForEach).join("");

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));