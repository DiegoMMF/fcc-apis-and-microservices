/**
 * Intermediate Algorithm Scripting: Spinal Tap Case
 * 
 * Convert a string to spinal case. Spinal case is 
 * all-lowercase-words-joined-by-dashes.
 */
const onlyAlphanumeric = (str) => {
  const notAlphanumeric = /[^(\d|\w)]+/gi;
  return str.replace(notAlphanumeric, "-");
}

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

function spinalCase(str) {
  const firstStr = str.replaceAll("_", "-");
  const newStr = styleHyphenFormat(firstStr);
  return onlyAlphanumeric(newStr);
}

spinalCase('This Is Spinal Tap');
