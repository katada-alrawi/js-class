/* 
"Data Types: An introduction
- Primitive Data Types: Numbers, Strings, Boolean, Null and Undefined
- reassignment of variables
- Empty variables: `null` vs. `undefined`.
- Objects: Arrays and Objects
- Data type: the unary operator `typeof`"

- Definition of statement: The semicolon `;`
- Hello world: `console.log(<expression>)`
- Comments: `//`, /* */ 
/*- Syntax Debugging I: Unclosed parentheses"

- String expressions: single quotes, double quotes, concatenation
- Mathematical expressions: +, -, *, /, %
*/

// Wir haben in Javascript verschiedene Arten von Variablen
// Primitive Typen
let zahl = 100; // Number
let wahrFalsch = true; // boolean. Kann entweder true oder false sein. 
let zeichenKette = "Hallo Welt!";  // String, hier kann man buchstaben oder wörter speichern

let zahl1 = 10;
let zahl2 = "10";

// Ist zahl1 das gleiche wie zahl2?
// In manchen Fällen ja. Meistens nein! Das eine ist ein String, das andere eine Number. 

let name1 = "Niels";
let name2 = name1;
console.log(name2); // Niels

name2 = "Moritz";
console.log(name2); // Moritz
console.log(name1); // Niels
