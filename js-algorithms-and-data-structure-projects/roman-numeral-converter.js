/**
 * Roman Numeral Converter
 * Convert the given number into a roman numeral.
 * All roman numerals answers should be provided in upper-case.
 */
const convertirMillar = char => {
   switch (char) {
      case "1":
         return "M"
      case "2":
         return "MM"
      case "3":
         return "MMM"
      default:
         return "";
   }
}

const convertirCentena = char => {
   switch (char) {
      case "1":
         return "C";
      case "2":
         return "CC";
      case "3":
         return "CCC";
      case "4":
         return "CD";
      case "5":
         return "D";
      case "6":
         return "DC";
      case "7":
         return "DCC";
      case "8":
         return "DCCC";
      case "9":
         return "CM"
      default:
         return "";
   }
}

const convertirDecena = char => {
   switch (char) {
      case "1":
         return "X";
      case "2":
         return "XX";
      case "3":
         return "XXX";
      case "4":
         return "XL";
      case "5":
         return "L";
      case "6":
         return "LX";
      case "7":
         return "LXX";
      case "8":
         return "LXXX";
      case "9":
         return "XC"
      default:
         return "";
   }
}

const convertirUnidad = char => {
   switch (char) {
      case "1":
         return "I";
      case "2":
         return "II";
      case "3":
         return "III";
      case "4":
         return "IV";
      case "5":
         return "V";
      case "6":
         return "VI";
      case "7":
         return "VII";
      case "8":
         return "VIII";
      case "9":
         return "IX"
      default:
         return "";
   }

}

function convertToRoman(num) {
   const error = "El argumento 'N' debe ser un número 0 < N < 3.999";
   if (typeof num !== "number") return console.log(error);
   if (0 <= num >= 4000) return console.log(error);
   const str = num.toString();
   let millarRomano = "";
   let centenaRomana = "";
   let decenaRomana = "";
   let unidadRomana = "";
   switch (str.length) {
      case 4:
         millarRomano = convertirMillar(str[0]);
         centenaRomana = convertirCentena(str[1]);
         decenaRomana = convertirDecena(str[2]);
         unidadRomana = convertirUnidad(str[3]);
         break;
      case 3:
         centenaRomana = convertirCentena(str[0]);
         decenaRomana = convertirDecena(str[1]);
         unidadRomana = convertirUnidad(str[2]);
         break;
      case 2:
         decenaRomana = convertirDecena(str[0]);
         unidadRomana = convertirUnidad(str[1]);
         break;
      default:
         unidadRomana = convertirUnidad(str[0]);
         break;
   };
   return `${millarRomano}${centenaRomana}${decenaRomana}${unidadRomana}`
}
// 
console.log(convertToRoman(1));
