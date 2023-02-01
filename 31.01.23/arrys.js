/*
Als nächstes lernen wir Arrays kennen. Recherchiert das gerne schon mal selber. 

let fruits = ["apples", "bananas", "kiwis"];
console.log(fruits[0]);
Was kommt hier raus?

Was ist fruits wenn ich das hier mache?
fruits[1] = "oranges";

// Was passiert wenn ich stattdessen const benutze? 
const fruits = ["apples", "bananas", "kiwis"]
Geht dann immer noch:
fruits[1] = "oranges";

Wenn ja, warum? Wenn nein, warum nicht?

Google mal nach folgenden Array Methoden und probier sie aus: 
- Finding Items: `indexOf(<item>)`
- Adding items: `push()`, `unshift()`
- Removing items: `pop()`, `shift()`
- Manipulating arrays: `reverse()`
*/

// Arrays
// Eine Liste an Sachen. Index.

// index        0          1       2
let fruits = ["banana", "kiwi", "mango"];

console.log(fruits[2]); // mango
fruits[2] = "apple";
console.log(fruits); // [ 'banana', 'kiwi', 'apple' ]

// gemischten array. Wir können in unseren array alles mögliche rein tun. 
// index         0       1       2           3
let gemischt = [true, "mango", -200, ["niels", "abc"]];
// ["niels", "abc"]
console.log(gemischt[3]); // ["niels", "abc"]
// "niels"
console.log(gemischt[3][0]); // "niels"
let namensArray = gemischt[3]; // ["niels", "abc"]
let nielsName = namensArray[0]; // "niels"

// selbst mit const deklarierte arrays können im inhalt verändert/verändert werden.
const namen = ["max", "moritz", "niels"];
// Ich darf den Inhalt von dem mit const deklariertem array verändern.
namen[2] = "mona";
console.log(namen) // [ 'max', 'moritz', 'mona' ]
// Ich darf den array nicht komplett überschreiben.
//namen = ["hier", "ist", "ein", "anderer", "array"]; // fehler, assignment to constant variable


/*- Finding Items: `indexOf(<item>)`
- Adding items: `push()`, `unshift()`
- Removing items: `pop()`, `shift()`
- Manipulating arrays: `reverse()` */
//    index        0        1         2
const früchte = ["apfel", "birne", "erdbeere"];
// mit indexOf kann ich rausfinden an welchem index sich ein Element befindet.
console.log(früchte.indexOf("apfel")); // 0
console.log(früchte.indexOf("erdbeere")); // 2
console.log(früchte.indexOf("avocado")); // -1, wenn indexOf() ein Element nicht findet, gibt es -1 zurück.

// mit push kann ich am ende meines Arrays ein Element hinzufügen
früchte.push("Avocado");
console.log(früchte); // [ 'apfel', 'birne', 'erdbeere', 'Avocado' ]

// mit unshift() kann ich am Anfang meines Arrays ein Element hinzufügen.
früchte.unshift("Gurke"); 
console.log(früchte); // [ 'Gurke', 'apfel', 'birne', 'erdbeere', 'Avocado' ]

früchte.unshift("mehrere", "sachen");
console.log(früchte); //  ['mehrere', 'sachen', 'Gurke', 'apfel', 'birne', 'erdbeere', 'Avocado']

// mit pop() kann ich am Ende eines Arrays Elemente löschen
früchte.pop(2);
console.log(früchte); // [ 'mehrere', 'sachen', 'Gurke', 'apfel', 'birne', 'erdbeere' ]

// mit shift() kann ich am Anfang eines Arrays Elemente löschen
früchte.shift();
console.log(früchte); // [ 'sachen', 'Gurke', 'apfel', 'birne', 'erdbeere' ]

früchte.shift();
früchte.shift();
console.log(früchte); // [ 'apfel', 'birne', 'erdbeere' ]

früchte.pop()
früchte.pop()
früchte.pop()
console.log(früchte) // []

// reverse()
let zahlen = [0, 1, 2, 3];
zahlen.reverse();
console.log(zahlen); // [ 3, 2, 1, 0 ]

// Komplizierteres Beispiel:
// index         0       1       2           3
let gemischt2 = [true, "mango", -200, ["niels", "abc"]];
gemischt2.reverse() // [ [ 'niels', 'abc' ], -200, 'mango', true ]
console.log(gemischt2[0][0]); // niels

