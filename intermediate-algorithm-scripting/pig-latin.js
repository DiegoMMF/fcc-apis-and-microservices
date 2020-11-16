/**
 * Intermediate Algorithm Scripting: Pig Latin
 * 
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * 
 * - If a word begins with a consonant, take the first consonant or consonant 
 * cluster, move it to the end of the word, and add "ay" to it.
 * 
 * - If a word begins with a vowel, just add "way" at the end.
 * 
 * Translate the provided string to Pig Latin. Input strings are guaranteed to be 
 * English words in all lowercase.
 */

const initiatesWithVowel = word => {
  const vowelArray = ["a", "e","i", "o", "u", "A", "E", "I", "O", "U"];
  return vowelArray.includes(word[0]);
}

const hasAnyVowels = word => {
  const regex = /[aeiouAEIOU]/
  return (word.search(regex) === -1) ? false : true;
}

function translatePigLatin(str) {
  const auxArr = [];
  if (hasAnyVowels(str)) {
    if (initiatesWithVowel(str)) {
      return str + "way";
    } else {
      auxArr.push(str[0]);
      // console.log(translatePigLatin(str.slice(1)));
      if (initiatesWithVowel(str.slice(1))) {
        return str.slice(1) + auxArr.join("") + "ay"
      } else {
        return translatePigLatin(str.slice(1)+str[0]);
      }
    }
  } else {
    return str + "ay";
  }
}