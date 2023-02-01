/*
- Logical operators: `&&`, `||`
- Truthy and falsy values: false, undefined, null, 0, ''
- Type conversion: `==` vs. `===`
- Boolean inversion with `!`
- Short circuit assignment: Assigning variable fallback with `||`"
*/

// === checkt die äquivalenz. Ist die eine Seite das selbe wie die andere Seite. 
console.log(false === false); // true

// && UND ist immer dann wahr, wenn beide seiten von && wahr sind. 
let x = false && false;
console.log(x); // false

let y = false && true;
console.log(y); // false

let z = true && true;
console.log(z); // true

console.log((true && true) && (true && true) && false); // false

// || ODER ist immer dann wahr, wenn mindestens eine der beiden seiten von || wahr ist. 
console.log(false || true); // true
console.log(false || false); // false
console.log(true || true); // true

// Verknüpfung
console.log((true || false) && (true && true)); // true
//                true      &&      true 

console.log((true || true) || (true && false)); // true 
//                 true    ||    false

// Truthy and falsy values: false, undefined, null, 0, ''
// Wenn man bestimmte Werten in einen vergleich in javascript setzt, sieht es sie als true oder false
// Wir reden dann von "truthy" oder "falsy" Werten.


let begrüßung = 0 ? "hallo" : "guten morgen"; // "guten morgen"
console.log(begrüßung)

let begrüßung2 = (0 && 1) ? "hallo" : "guten morgen"; // "guten morgen", 0 ist falsy, 1 ist truthy
//             false && true
//                  false
console.log(begrüßung2)

let begrüßung3 = (NaN && 1) ? "hallo" : "guten morgen"; // guten Morgen
console.log(begrüßung3);

// NaN ist eh ein spezieller Kunde
let maxAlter = NaN
let moritzAlter = NaN
console.log(maxAlter === moritzAlter); // false


// Type conversion: `==` vs. `===`
// Wenn wir mit == vergleichen, dann wandelt JS im Hintergrund den Typ um. Checkt das gleiche. 
// Wenn wir mit === vergleichen, dann wandelt JS nix um. Checkt das selbe. 

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// === ist strenger. WIR BENUTZEN NUR === 


// Boolsche Inversion mit !, heisst soviel wie "nicht"
console.log(!false); // true
console.log(!true); // false

console.log(!(true && false) || false); // true
//          !(false)    || false
//              true    ||  false
//                     true

console.log((!true && false) || false); // false
//          (false && false) || false
//                 false     || false
//                         false


let begrüßung = 0 ? "hallo" : "guten morgen"; // "guten morgen"
console.log(begrüßung)

let begrüßung2 = (0 && 1) ? "hallo" : "guten morgen"; // "guten morgen", 0 ist falsy, 1 ist truthy
//             false && true
//                  false
console.log(begrüßung2)

let begrüßung3 = (NaN && 1) ? "hallo" : "guten morgen"; // guten Morgen
console.log(begrüßung3);

// NaN ist eh ein spezieller Kunde
let maxAlter = NaN
let moritzAlter = NaN
console.log(maxAlter === moritzAlter); // false


// Type conversion: `==` vs. `===`
// Wenn wir mit == vergleichen, dann wandelt JS im Hintergrund den Typ um. Checkt das gleiche. 
// Wenn wir mit === vergleichen, dann wandelt JS nix um. Checkt das selbe. 

console.log(1 == "1"); // true
console.log(1 === "1"); // false

// === ist strenger. WIR BENUTZEN NUR === 


// Boolsche Inversion mit !, heisst soviel wie "nicht"
console.log(!false); // true
console.log(!true); // false

console.log(!(true && false) || false); // true
//          !(false)    || false
//              true    ||  false
//                     true

console.log((!true && false) || false); // false
//          (false && false) || false
//                 false     || false
//                         false
