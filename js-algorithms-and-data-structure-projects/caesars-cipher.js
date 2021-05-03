/**
 * Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar
 * cipher, also known as a shift cipher. In a shift cipher the
 * meanings of the letters are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the
 * letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
 * Write a function which takes a ROT13 encoded string as input and
 * returns a decoded string.
 * All letters will be uppercase. Do not transform any
 * non-alphabetic character (i.e. spaces, punctuation), but do pass
 * them on.
 * 
 */

const devolverEquivalente = number => {
  const min = 65;
  const max = 90;
  const cipher = 13;
  return number >= 78 ?
    number - cipher :
    max - (cipher - (number - min)) + 1
}

function rot13(str) {
  const arregloDeCaracteres = [];
  for (const key in str) {
    let oldCharCode = str.charCodeAt(key);
    let newCharCode =
      (str[key] !== " ") &&
      (str[key] !== "!") &&
      (str[key] !== ".") &&
      (str[key] !== "?") ?
        devolverEquivalente(oldCharCode) :
        oldCharCode;
    arregloDeCaracteres.push(String.fromCharCode(newCharCode));
  };
  return arregloDeCaracteres.join("");
}

console.log(rot13("SERR PBQR PNZC"));