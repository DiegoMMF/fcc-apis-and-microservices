/**
 * Intermediate Algorithm Scripting: Convert HTML Entities
 * 
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a 
 * string to their corresponding HTML entities.
 * 
 * & → &amp;
 * < → &lt;
 * > → &gt;
 * “ → &quot;
 * ‘ → &apos;
 */
function convertHTML(str) {
  const arr = str.split("");
  for (const index in arr) {
    const char = arr[index];
    switch (char) {
      case "&":
        arr.splice(index, 1, "&amp;")
        break;
      case "<":
        arr.splice(index, 1, "&lt;")
        break;
      case ">":
        arr.splice(index, 1, "&gt;")
        break;
      case '"':
        arr.splice(index, 1, "&quot;")
        break;
      case "'":
        arr.splice(index, 1, "&apos;")
        break;
      default:
        break;
    }
  }
  return arr.join("");
}

console.log(convertHTML("Dolce & Gabbana"))