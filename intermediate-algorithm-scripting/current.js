function styleHyphenFormat(string) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return string.replace(/[A-Z]/g, upperToHyphenLower);
}

console.log(styleHyphenFormat('ThisIsSpinalTap'))

// spinalCase('This Is Spinal Tap');
// 
// const insertLowerCasePlusSpace = (string, index) => {
  // const char = string[i];
  // const replacement = string[i] + " ";
  // string.replace(char, string[i])
// }
// 
// const replaceUpperCasesInString = string => {
  // let newString = string.slice();
  // for (let i = 0; i < newString.length; i++) {
    // const char = newString[i];
    // const regex = /[A-Z]/;
    // if (regex.test(char)) insertLowerCasePlusSpace(newString, i);
  // }
  // /**
  //  * inside a loop we call insertLowerCase
  //  */
  // return newString;
// }
// 
// function spinalCase(str) {
  // const newStr = str.trim();
  // /**
  //  * first, I'll search for upper case letters, and replace them for space + lower case
  //  */
  // 
  // const index = str.search(regex);
// 
  // if (index >= 0) {
    // const auxStr = replaceForSpacePlusLowerCase(str, index);
// 
  // }
  // const newArr = newStr.split(" ");
  // console.log(newArr.join("-"));
  // return newArr.join("-");
  // /**
  //  * second, I'll split in spaces and join again with dashes
  //  */
// }
// 
// spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
// 
// spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
// 
// spinalCase("TheAndyGriffith_Show"); // should return "the-andy-griffith-show".
// 
// spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
// 
// spinalCase("AllThe-small Things"); // should return "all-the-small-things".