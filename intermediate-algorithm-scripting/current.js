const onlyAlphanumeric = (str) => {
  const notAlphanumeric = /[^(\d|\w)]/gi;
  return str.replace(notAlphanumeric, "");
}

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

function spinalCase(str) {
  const newStr = onlyAlphanumeric(str);
  return styleHyphenFormat(newStr);
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))