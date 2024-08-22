let originalString = "Steve Jobs teria vergonha da Apple atual";
let upperCaseString = originalString.toUpperCase();
console.log(" maiúsculas: " + upperCaseString);

let lowerCaseString = originalString.toLowerCase();
console.log(" minúsculas: " + lowerCaseString);

let slicedString = originalString.slice(0, 13); 
console.log("Parte extraída: " + slicedString);

let replacedString = originalString.replace("Programação", "Desenvolvimento");
console.log("String após substituição: " + replacedString);

let stringWithSpaces = "   Espaços ao redor   ";
let trimmedString = stringWithSpaces.trim();
console.log("String sem espaços: '" + trimmedString + "'");


